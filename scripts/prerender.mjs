import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { buildStructuredData, seoRoutes, siteUrl } from "../src/data/seo.js";

const projectRoot = process.cwd();
const distDirectory = path.join(projectRoot, "dist");
const serverEntry = path.join(projectRoot, ".prerender", "entry-server.js");
const builtTemplate = await readFile(path.join(distDirectory, "index.html"), "utf8");
const stylesheetTags = builtTemplate.match(/<link rel="stylesheet"[^>]*>/g) || [];
// Make the CSS discoverable before the metadata and structured data on every route.
const template = stylesheetTags.length
  ? builtTemplate
      .replace(/<link rel="stylesheet"[^>]*>/g, "")
      .replace(
        /(<meta name="viewport"[^>]*>)/i,
        `$1\n    ${stylesheetTags.join("\n    ")}`,
      )
  : builtTemplate;
const { render } = await import(pathToFileURL(serverEntry).href);

function escapeAttribute(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function setMeta(html, attribute, name, content) {
  const matcher = new RegExp(`<meta\\s+${attribute}="${name}"[^>]*>`, "i");
  return html.replace(
    matcher,
    `<meta ${attribute}="${name}" content="${escapeAttribute(content)}" />`,
  );
}

function setLink(html, relation, href, hreflang) {
  const languageMatcher = hreflang ? `(?=[^>]*hreflang="${hreflang}")` : "";
  const matcher = new RegExp(`<link\\s+${languageMatcher}[^>]*rel="${relation}"[^>]*>`, "i");
  const language = hreflang ? ` hreflang="${hreflang}"` : "";
  return html.replace(matcher, `<link rel="${relation}"${language} href="${href}" />`);
}

function applySeo(html, route) {
  const canonicalUrl =
    route.path === "/" ? `${siteUrl}/` : `${siteUrl}${route.path}`;
  let output = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`);

  output = setMeta(output, "name", "description", route.description);
  output = setMeta(output, "property", "og:url", canonicalUrl);
  output = setMeta(output, "property", "og:title", route.title);
  output = setMeta(output, "property", "og:description", route.ogDescription);
  output = setMeta(output, "name", "twitter:title", route.title);
  output = setMeta(output, "name", "twitter:description", route.ogDescription);
  if (route.project) {
    const projectImage = `${siteUrl}${route.project.image}`;
    output = setMeta(output, "property", "og:image", projectImage);
    output = setMeta(output, "property", "og:image:secure_url", projectImage);
    output = setMeta(output, "property", "og:image:width", 1400);
    output = setMeta(output, "property", "og:image:height", 808);
    output = setMeta(output, "property", "og:image:alt", route.project.imageAlt);
    output = setMeta(output, "name", "twitter:image", projectImage);
    output = setMeta(output, "name", "twitter:image:alt", route.project.imageAlt);
  }
  output = setLink(output, "canonical", canonicalUrl);
  output = setLink(output, "alternate", canonicalUrl, "pt-BR");
  output = setLink(output, "alternate", canonicalUrl, "x-default");

  const structuredData = JSON.stringify(buildStructuredData(route), null, 2);
  return output.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script type="application/ld+json">\n${structuredData}\n    </script>`,
  );
}

for (const route of seoRoutes) {
  const markup = render(route.path);
  const renderedTemplate = template.replace(
    '<div id="root"></div>',
    `<div id="root">${markup}</div>`,
  );
  const output = applySeo(renderedTemplate, route);

  const targetDirectory =
    route.path === "/"
      ? distDirectory
      : path.join(distDirectory, route.path.replace(/^\/+|\/+$/g, ""));

  await mkdir(targetDirectory, { recursive: true });
  await writeFile(path.join(targetDirectory, "index.html"), output, "utf8");
}

const sitemapNamespace = "http://www.sitemaps.org/schemas/sitemap/0.9";
const sitemapGroups = ["pages", "services", "locations", "projects"];
const generatedSitemaps = [];

for (const group of sitemapGroups) {
  const routes = seoRoutes.filter((route) => route.sitemapGroup === group);
  if (!routes.length) continue;

  const entries = routes
    .map((route) => {
      const pageUrl = route.path === "/" ? `${siteUrl}/` : `${siteUrl}${route.path}`;
      return `  <url>\n    <loc>${pageUrl}</loc>\n  </url>`;
    })
    .join("\n");
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<urlset xmlns="${sitemapNamespace}">`,
    entries,
    "</urlset>",
    "",
  ].join("\n");
  const filename = `sitemap-${group}.xml`;
  await writeFile(path.join(distDirectory, filename), sitemap, "utf8");
  generatedSitemaps.push(filename);
}

const sitemapIndexEntries = generatedSitemaps
  .map((filename) => `  <sitemap>\n    <loc>${siteUrl}/${filename}</loc>\n  </sitemap>`)
  .join("\n");
const sitemapIndex = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  `<sitemapindex xmlns="${sitemapNamespace}">`,
  sitemapIndexEntries,
  "</sitemapindex>",
  "",
].join("\n");
await writeFile(path.join(distDirectory, "sitemap.xml"), sitemapIndex, "utf8");

await rm(path.join(projectRoot, ".prerender"), { recursive: true, force: true });
console.log(`Prerender concluído: ${seoRoutes.length} páginas.`);
