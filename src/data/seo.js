import { faqs } from "./faqs.js";
import { servicePages } from "./servicePages.js";
import { localPages } from "./localPages.js";
import { caseStudies } from "./caseStudies.js";
import { siteConfig } from "../config/site.js";

export const siteUrl = siteConfig.url;

const organization = {
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "DigiUP",
  url: `${siteUrl}/`,
  logo: `${siteUrl}/digiup-symbol.svg`,
  image: `${siteUrl}/og.jpg`,
  description:
    "Empresa de desenvolvimento web e software sediada em Brasília, DF. Cria sites, sistemas, automações com IA e integrações, com evolução e suporte para empresas em todo o Brasil.",
  email: siteConfig.email,
  telephone: siteConfig.phoneE164,
  areaServed: { "@type": "Country", name: "Brasil" },
  location: {
    "@type": "City",
    name: "Brasília",
    containedInPlace: { "@type": "AdministrativeArea", name: "Distrito Federal" },
  },
  sameAs: siteConfig.socials.map((social) => social.href),
  founder: {
    "@type": "Person",
    name: "Claiverty Rodrigues",
    sameAs: siteConfig.founderLinkedin,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    availableLanguage: "Portuguese",
  },
  knowsAbout: [
    "Criação de sites",
    "Presença digital",
    "Desenvolvimento de sistemas",
    "Plataformas web",
    "Inteligência artificial",
    "Automações",
    "Integrações de sistemas e APIs",
    "Manutenção e suporte de sites e sistemas",
  ],
};

const website = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: `${siteUrl}/`,
  name: "DigiUP",
  alternateName: "Digi UP",
  inLanguage: "pt-BR",
  publisher: { "@id": `${siteUrl}/#organization` },
};

const homeRoute = {
  path: "/",
  sitemapGroup: "pages",
  title: "DigiUP | Sites, Sistemas e Automações para Empresas",
  description:
    "Sites, sistemas, automações com IA, integrações e suporte para empresas. A DigiUP é sediada em Brasília e atende todo o Brasil.",
  ogDescription:
    "Sites, sistemas, automações com IA, integrações e suporte para empresas de todo o Brasil.",
  faqs,
};

export const seoRoutes = [
  homeRoute,
  ...servicePages.map((service) => ({
    path: service.path,
    sitemapGroup: "services",
    title: service.seo.title,
    description: service.seo.description,
    ogDescription: service.seo.description,
    faqs: service.faqs,
    serviceType: service.seo.serviceType,
  })),
  ...localPages.map((page) => ({
    path: page.path,
    sitemapGroup: "locations",
    title: page.seo.title,
    description: page.seo.description,
    ogDescription: page.seo.description,
    faqs: page.faqs,
    serviceType: page.seo.serviceType,
    areaServed: page.seo.areaServed,
  })),
  ...caseStudies.map((project) => ({
    path: project.path,
    sitemapGroup: "projects",
    title: project.seo.title,
    description: project.seo.description,
    ogDescription: project.seo.description,
    project,
  })),
];

export function buildStructuredData(route) {
  const pageUrl = route.path === "/" ? `${siteUrl}/` : `${siteUrl}${route.path}`;
  const pageId = `${pageUrl}#webpage`;
  const primaryImage = route.project
    ? { url: `${siteUrl}${route.project.image}`, width: 1400, height: 808 }
    : { url: `${siteUrl}/og.jpg`, width: 3344, height: 1882 };
  const graph = [
    { ...organization },
    website,
    {
      "@type": "WebPage",
      "@id": pageId,
      url: pageUrl,
      name: route.title,
      description: route.description,
      inLanguage: "pt-BR",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        ...primaryImage,
      },
    },
  ];

  if (route.path === "/") {
    const catalogId = `${siteUrl}/#services`;
    graph[0].hasOfferCatalog = { "@id": catalogId };
    graph[2].mainEntity = { "@id": catalogId };
    graph.push({
      "@type": "OfferCatalog",
      "@id": catalogId,
      name: "Soluções da DigiUP",
      itemListElement: servicePages.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@id": `${siteUrl}${service.path}#service` },
      })),
    });
    graph.push(...servicePages.map((service) => ({
      "@type": "Service",
      "@id": `${siteUrl}${service.path}#service`,
      name: service.seo.serviceType,
      description: service.seo.description,
      url: `${siteUrl}${service.path}`,
      areaServed: "BR",
      provider: { "@id": `${siteUrl}/#organization` },
    })));
  }

  if (route.serviceType) {
    graph[2].mainEntity = { "@id": `${pageUrl}#service` };
    graph.push({
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: route.serviceType,
      description: route.description,
      url: pageUrl,
      areaServed: route.areaServed || "BR",
      provider: { "@id": `${siteUrl}/#organization` },
    });

    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "DigiUP",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: route.serviceType,
          item: pageUrl,
        },
      ],
    });
  }

  if (route.project) {
    graph[2].mainEntity = { "@id": `${pageUrl}#project` };
    graph.push({
      "@type": "CreativeWork",
      "@id": `${pageUrl}#project`,
      name: route.project.name,
      description: route.project.description,
      url: pageUrl,
      image: `${siteUrl}${route.project.image}`,
      creator: { "@id": `${siteUrl}/#organization` },
      mainEntityOfPage: { "@id": pageId },
    });
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "DigiUP", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Projetos", item: `${siteUrl}/#case-study` },
        { "@type": "ListItem", position: 3, name: route.project.name, item: pageUrl },
      ],
    });
  }

  if (route.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: route.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
