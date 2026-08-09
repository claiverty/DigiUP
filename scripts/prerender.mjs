import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { buildStructuredData, seoRoutes, siteUrl } from "../src/data/seo.js";

const projectRoot = process.cwd();
const distDirectory = path.join(projectRoot, "dist");
const serverEntry = path.join(projectRoot, ".prerender", "entry-server.js");
const template = await readFile(path.join(distDirectory, "index.html"), "utf8");
const { render } = await import(pathToFileURL(serverEntry).href);

function escapeAttribute(value) {
  return value
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

await rm(path.join(projectRoot, ".prerender"), { recursive: true, force: true });
console.log(`Prerender concluído: ${seoRoutes.length} páginas.`);
