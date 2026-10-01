import { normalizePath } from "../utils/path.js";

const rideGoiasCities = [
  "Abadiânia",
  "Água Fria de Goiás",
  "Águas Lindas de Goiás",
  "Alexânia",
  "Alto Paraíso de Goiás",
  "Alvorada do Norte",
  "Barro Alto",
  "Cabeceiras",
  "Cavalcante",
  "Cidade Ocidental",
  "Cocalzinho de Goiás",
  "Corumbá de Goiás",
  "Cristalina",
  "Flores de Goiás",
  "Formosa",
  "Goianésia",
  "Luziânia",
  "Mimoso de Goiás",
  "Niquelândia",
  "Novo Gama",
  "Padre Bernardo",
  "Pirenópolis",
  "Planaltina",
  "Santo Antônio do Descoberto",
  "São João d’Aliança",
  "Simolândia",
  "Valparaíso de Goiás",
  "Vila Boa",
  "Vila Propício",
];

const sharedDeliverables = [
  {
    title: "Sites e plataformas web",
    text: "Experiências digitais responsivas para apresentar a empresa, produtos e serviços com clareza.",
  },
  {
    title: "Sistemas sob medida",
    text: "Painéis e aplicações para organizar fluxos, informações e tarefas próprias da operação.",
  },
  {
    title: "Automações e IA",
    text: "Integrações e automações planejadas conforme os processos e ferramentas do negócio.",
  },
  {
    title: "SEO técnico e estrutura de conteúdo",
    text: "Páginas com metadados, hierarquia e conteúdo organizados para pessoas e mecanismos de busca.",
  },
];

const sharedIdealFor = [
  "Empresas que precisam apresentar melhor seus serviços na internet",
  "Negócios que querem organizar uma operação em um sistema próprio",
  "Equipes que buscam automatizar tarefas repetitivas",
  "Empresas que precisam renovar um site ou produto digital existente",
];

function makeFaqs(city) {
  return [
    {
      question: `A DigiUP atende somente empresas de ${city}?`,
      answer:
        "Não. O atendimento é remoto e disponível para empresas de qualquer cidade do Brasil. O escopo e o processo não mudam conforme a localidade.",
    },
    {
      question: "Que tipo de projeto a DigiUP desenvolve?",
      answer:
        "Sites e plataformas web, sistemas sob medida e automações. A solução é definida depois de entender os objetivos e o fluxo de trabalho da empresa.",
    },
    {
      question: "Vocês garantem que o site vai ficar no topo do Google?",
      answer:
        "Não existe garantia de posição orgânica. A DigiUP prepara uma base técnica e de conteúdo, mas o resultado depende também da concorrência, da autoridade do domínio e do tempo de evolução do site.",
    },
    {
      question: "Como começa um projeto?",
      answer:
        "Começamos entendendo o objetivo, o público, o conteúdo disponível e as integrações necessárias. Depois apresentamos escopo, etapas e prazo para aprovação.",
    },
  ];
}

export const localPages = [
  {
    path: "/criacao-de-sites-em-formosa-go/",
    label: "Tecnologia para empresas em Formosa, GO",
    title: "Sites, sistemas e automações",
    titleAccent: "para Formosa, Goiás.",
    lead:
      "A DigiUP desenvolve sites, sistemas sob medida e automações para empresas em Formosa e em todo o Brasil. Atendimento remoto, com o mesmo escopo de soluções em qualquer localidade.",
    overviewTitle: "Sua presença digital pode fazer mais do que apresentar a empresa.",
    overview:
      "Um site pode divulgar produtos e serviços; um sistema pode organizar tarefas da equipe; e uma automação pode conectar etapas do trabalho. A DigiUP planeja cada projeto conforme a necessidade do negócio. Em Formosa, o Comercial Sagarana é um exemplo de site público conectado a um painel administrativo para ofertas e vendas.",
    projectLink: {
      href: "/projetos/comercial-sagarana/",
      label: "Comercial Sagarana em Formosa",
    },
    benefits: [
      "Apresentar serviços, produtos e diferenciais com clareza",
      "Organizar tarefas e informações em ferramentas digitais próprias",
      "Facilitar o contato de clientes por canais já usados pela empresa",
    ],
    deliverables: sharedDeliverables,
    idealFor: sharedIdealFor,
    faqs: makeFaqs("Formosa"),
    seo: {
      title: "Sites, Sistemas e Automações em Formosa, GO | DigiUP",
      description:
        "Sites, sistemas sob medida e automações para empresas em Formosa, GO. Veja o projeto do Comercial Sagarana e conheça o atendimento remoto da DigiUP.",
      serviceType:
        "Sites, sistemas sob medida e automações para empresas em Formosa, Goiás",
      areaServed: {
        "@type": "City",
        name: "Formosa",
        containedInPlace: { "@type": "AdministrativeArea", name: "Goiás" },
      },
    },
  },
  {
    path: "/criacao-de-sites-em-brasilia/",
    label: "Tecnologia para empresas em Brasília e no Entorno",
    title: "Sites, sistemas e automações",
    titleAccent: "para Brasília e região.",
    lead:
      "A DigiUP desenvolve sites, sistemas sob medida e automações para empresas em Brasília, no Entorno de Goiás e em todo o Brasil. Atendimento remoto, com o mesmo escopo de soluções em qualquer localidade.",
    overviewTitle: "Escolha a solução a partir da necessidade da operação.",
    overview:
      "Da presença digital à organização de processos internos, cada projeto começa pelo objetivo da empresa. O DigiTicket, plataforma desenvolvida em Brasília, reúne publicação de eventos, reservas, ingressos digitais e validação de entrada em um fluxo full-stack.",
    projectLink: {
      href: "/projetos/digiticket/",
      label: "DigiTicket em Brasília",
    },
    benefits: [
      "Explicar a oferta da empresa e abrir caminhos simples para contato",
      "Transformar processos internos em sistemas adequados ao fluxo do time",
      "Integrar ferramentas e reduzir tarefas manuais com automações",
    ],
    deliverables: sharedDeliverables,
    idealFor: sharedIdealFor,
    faqs: makeFaqs("Brasília"),
    areaCoverage: {
      title: "Atendimento em Brasília e nos municípios goianos da RIDE-DF.",
      text:
        "O trabalho é remoto e está disponível em todos os 29 municípios goianos que integram a Região Integrada de Desenvolvimento do Distrito Federal e Entorno (RIDE-DF). Também atendemos empresas de outras regiões do país. A lista abaixo segue a composição oficial publicada pela Sudeco. Veja também o",
      link: {
        href: "/projetos/comercial-sagarana/",
        label: "projeto da Comercial Sagarana, em Formosa",
      },
      source: {
        href: "https://www.gov.br/sudeco/pt-br/assuntos/ride-df",
        label: "Consultar a lista oficial da RIDE-DF",
      },
      cities: rideGoiasCities,
    },
    seo: {
      title: "Sites, Sistemas e Automações em Brasília | DigiUP",
      description:
        "Sites, sistemas sob medida e automações para empresas em Brasília e no Entorno de Goiás. Conheça o DigiTicket e o atendimento remoto da DigiUP em todo o Brasil.",
      serviceType:
        "Sites, sistemas sob medida e automações para empresas em Brasília e no Entorno",
      areaServed: {
        "@type": "City",
        name: "Brasília",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Distrito Federal",
        },
      },
    },
  },
  {
    path: "/criacao-de-sites-em-sao-paulo-sp/",
    label: "Tecnologia para empresas em São Paulo, SP",
    title: "Sites, sistemas e automações",
    titleAccent: "para São Paulo, SP.",
    lead:
      "A DigiUP desenvolve sites, sistemas sob medida e automações para empresas em São Paulo e em todo o Brasil. Atendimento remoto, com o mesmo escopo de soluções em qualquer localidade.",
    overviewTitle: "Uma experiência digital bem planejada conecta pessoas e processos.",
    overview:
      "A DigiUP trabalha da interface pública à lógica que sustenta o produto. O Ballon d’Or SPFC, desenvolvido para a comunidade do Discord Tricolor, organiza indicações, seleção de candidatos, votação por edição e publicação do histórico da premiação.",
    projectLink: {
      href: "/projetos/ballon-dor-spfc/",
      label: "Ballon d’Or SPFC em São Paulo",
    },
    benefits: [
      "Apresentar produtos e serviços com uma experiência clara",
      "Reunir etapas e regras de negócio em uma plataforma própria",
      "Planejar integrações e fluxos digitais adequados a cada projeto",
    ],
    deliverables: sharedDeliverables,
    idealFor: sharedIdealFor,
    faqs: makeFaqs("São Paulo"),
    seo: {
      title: "Sites, Sistemas e Automações em São Paulo | DigiUP",
      description:
        "Sites, sistemas sob medida e automações para empresas em São Paulo, SP. Conheça o projeto full-stack Ballon d’Or SPFC, desenvolvido pela DigiUP.",
      serviceType:
        "Sites, sistemas sob medida e automações para empresas em São Paulo, SP",
      areaServed: {
        "@type": "City",
        name: "São Paulo",
        containedInPlace: { "@type": "AdministrativeArea", name: "São Paulo" },
      },
    },
  },
];

export function getLocalPage(path) {
  const normalizedPath = normalizePath(path);
  return localPages.find((page) => page.path === normalizedPath);
}
