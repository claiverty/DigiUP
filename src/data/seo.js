import { faqs } from "./faqs.js";
import { servicePages } from "./servicePages.js";
import { localPages } from "./localPages.js";
import { siteConfig } from "../config/site.js";

export const siteUrl = "https://digiuptech.com.br";

const organization = {
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "DigiUP",
  url: `${siteUrl}/`,
  logo: `${siteUrl}/digiup-symbol.svg`,
  image: `${siteUrl}/og.jpg`,
  description:
    "Tech House especializada em presença digital, criação de sites, sistemas, plataformas e automações.",
  email: `mailto:${siteConfig.email}`,
  telephone: "+55 61 99863-6443",
  areaServed: "BR",
  sameAs: siteConfig.socials.map((social) => social.href),
  founder: {
    "@type": "Person",
    name: "Claiverty Rodrigues",
    sameAs: siteConfig.founderLinkedin,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+55 61 99863-6443",
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
  ],
};

const website = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: `${siteUrl}/`,
  name: "DigiUP",
  inLanguage: "pt-BR",
  publisher: { "@id": `${siteUrl}/#organization` },
};

const homeRoute = {
  path: "/",
  title: "DigiUP | Criação de Sites, Sistemas e Automações",
  description:
    "A DigiUP cria sites profissionais, sistemas, plataformas e automações para empresas que querem fortalecer sua presença digital e crescer com tecnologia.",
  ogDescription:
    "Sites profissionais, sistemas, plataformas e automações para fortalecer a presença digital e o crescimento da sua empresa.",
  faqs,
};

export const seoRoutes = [
  homeRoute,
  ...servicePages.map((service) => ({
    path: service.path,
    title: service.seo.title,
    description: service.seo.description,
    ogDescription: service.seo.description,
    faqs: service.faqs,
    serviceType: service.seo.serviceType,
  })),
  ...localPages.map((page) => ({
    path: page.path,
    title: page.seo.title,
    description: page.seo.description,
    ogDescription: page.seo.description,
    faqs: page.faqs,
    serviceType: page.seo.serviceType,
    areaServed: page.seo.areaServed,
  })),
];

export function buildStructuredData(route) {
  const pageUrl = route.path === "/" ? `${siteUrl}/` : `${siteUrl}${route.path}`;
  const pageId = `${pageUrl}#webpage`;
  const graph = [
    organization,
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
        url: `${siteUrl}/og.jpg`,
        width: 3344,
        height: 1882,
      },
    },
  ];

  if (route.serviceType) {
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
