import { normalizePath } from "../utils/path.js";

export const caseStudies = [
  {
    id: "ballondor",
    path: "/projetos/ballon-dor-spfc/",
    name: "Ballon d’Or SPFC",
    eyebrow: "Comunidade esportiva · São Paulo, SP",
    image: "/projects/ballondor-site-1400.jpg",
    imageAlt: "Página inicial do Ballon d’Or SPFC com identidade azul e dourada.",
    title: "Uma premiação construída pela comunidade SPFC.",
    description:
      "Premiação da comunidade SPFC no Discord, com edições e categorias configuráveis, indicações, votação por etapas, apuração de resultados e Hall da Fama.",
    challenge:
      "A comunidade precisava reunir indicações, votação e resultados de uma premiação em um fluxo claro, sem perder o histórico de cada edição.",
    solution:
      "A plataforma organiza categorias e edições, recebe indicações, conduz a votação por etapas e publica resultados e vencedores no Hall da Fama. O acesso para votar utiliza autenticação pelo Discord.",
    siteUrl: "https://ballondorspfc.vercel.app/",
    repositoryUrl: "https://github.com/claiverty/BallondOrSPFC",
    relatedService: { href: "/sistemas-sob-medida/", label: "Sistemas e plataformas" },
    seo: {
      title: "Ballon d’Or SPFC: plataforma de votação | DigiUP",
      description:
        "Conheça a plataforma da premiação da comunidade SPFC: indicações, votação por etapas, resultados e Hall da Fama em um projeto da DigiUP.",
    },
    metrics: [
      { value: "Indicações", label: "Editáveis por categoria" },
      { value: "Votação", label: "Por etapas e por edição" },
      { value: "Resultados", label: "Apuração e Hall da Fama" },
    ],
  },
  {
    id: "sagarana",
    path: "/projetos/comercial-sagarana/",
    name: "Comercial Sagarana",
    eyebrow: "Comércio local · Formosa, GO",
    image: "/projects/comercial-sagarana-site-1400.jpg",
    imageAlt: "Página inicial da Comercial Sagarana com foto da loja e chamada de ofertas.",
    imagePosition: "44% center",
    title: "Da vitrine ao controle financeiro da loja.",
    description:
      "Site com ofertas dinâmicas e contato direto, integrado a um dashboard financeiro para cadastrar e editar ofertas, registrar vendas diárias e acompanhar o faturamento mensal e anual.",
    challenge:
      "A loja precisava apresentar suas ofertas na internet e atualizar as informações comerciais com autonomia, além de acompanhar as vendas em um único lugar.",
    solution:
      "O projeto une uma vitrine pública com contato direto e uma área administrativa. No painel, a equipe cadastra e edita ofertas, registra vendas diárias e consulta o faturamento mensal e anual.",
    siteUrl: "https://comercialsagarana.vercel.app/",
    repositoryUrl: "https://github.com/claiverty/ComercialSagarana3.0",
    relatedService: { href: "/criacao-de-sites/", label: "Sites e presença digital" },
    seo: {
      title: "Comercial Sagarana: site e painel financeiro | DigiUP",
      description:
        "Veja o projeto da Comercial Sagarana em Formosa, GO: site com ofertas editáveis e painel para vendas e faturamento, desenvolvido pela DigiUP.",
    },
    metrics: [
      { value: "Ofertas", label: "Cadastro e edição no painel" },
      { value: "Vendas", label: "Registro e histórico diário" },
      { value: "Financeiro", label: "Faturamento mensal e anual" },
    ],
  },
  {
    id: "digiticket",
    path: "/projetos/digiticket/",
    name: "DigiTicket",
    eyebrow: "Eventos e ingressos · Brasília, DF",
    image: "/projects/digiticket-site-1400.jpg",
    imageAlt: "Página inicial da DigiTicket com busca e destaques de eventos.",
    title: "Da descoberta do evento à entrada, em um só lugar.",
    description:
      "Plataforma para publicar eventos, reservar ingressos e assentos, simular o checkout, emitir e transferir ingressos com QR Code e validar a entrada na portaria.",
    challenge:
      "Organizadores, participantes e equipe de portaria precisavam de um fluxo conectado, da publicação do evento à validação do ingresso na entrada.",
    solution:
      "O DigiTicket reúne catálogo e gestão de eventos, reserva de lugares, emissão e transferência de ingressos com QR Code e validação na portaria. O checkout do ambiente público é uma simulação, sem cobrança real.",
    siteUrl: "https://meudigiticket.vercel.app/",
    repositoryUrl: "https://github.com/claiverty/DigiTicket",
    relatedService: { href: "/sistemas-sob-medida/", label: "Sistemas e plataformas" },
    seo: {
      title: "DigiTicket: plataforma de eventos e ingressos | DigiUP",
      description:
        "Conheça o DigiTicket, plataforma de demonstração para eventos, reservas, ingressos com QR Code e validação na portaria criada pela DigiUP.",
    },
    metrics: [
      { value: "Assentos", label: "Mapa e reserva de lugares" },
      { value: "Ingressos", label: "QR Code e transferência" },
      { value: "Portaria", label: "Validação de entrada" },
    ],
  },
];

export function getCaseStudy(path) {
  const normalizedPath = normalizePath(path);
  return caseStudies.find((project) => project.path === normalizedPath);
}
