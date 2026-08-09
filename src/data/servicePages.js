import { normalizePath } from "../utils/path.js";

export const servicePages = [
  {
    path: "/criacao-de-sites/",
    label: "Sites e presença digital",
    title: "Criação de sites",
    titleAccent: "profissionais para empresas.",
    lead:
      "Sites institucionais e landing pages pensados para apresentar sua empresa com clareza, transmitir confiança e transformar visitas em conversas comerciais.",
    overviewTitle: "Sua empresa precisa de um endereço digital que trabalhe por ela.",
    overview:
      "A DigiUP organiza a mensagem do negócio, projeta a experiência e desenvolve uma presença digital rápida, responsiva e preparada para os mecanismos de busca. O resultado é um site que explica o valor da empresa e facilita o próximo passo do cliente.",
    benefits: [
      "Apresentar serviços de forma clara e profissional",
      "Ser encontrada por clientes que pesquisam no Google",
      "Concentrar credibilidade, conteúdo e canais de contato",
    ],
    coverage: {
      text: "Atendemos empresas em todo o Brasil. Quando o projeto pede uma conversa presencial, também conseguimos atender em",
      links: [
        { label: "Brasília, DF", path: "/criacao-de-sites-em-brasilia/" },
        { label: "Formosa, GO", path: "/criacao-de-sites-em-formosa-go/" },
      ],
    },
    deliverables: [
      {
        title: "Site institucional",
        text: "Estrutura completa para apresentar empresa, soluções, diferenciais e contato.",
      },
      {
        title: "Landing pages",
        text: "Páginas focadas em campanhas, lançamentos e geração de oportunidades.",
      },
      {
        title: "Experiência responsiva",
        text: "Navegação consistente em celular, tablet e computador.",
      },
      {
        title: "Base técnica de SEO",
        text: "Conteúdo semântico, desempenho e indexação preparados desde a construção.",
      },
    ],
    idealFor: [
      "Empresas que ainda não possuem site",
      "Negócios que dependem apenas de redes sociais",
      "Marcas com um site antigo ou pouco convincente",
      "Serviços que precisam gerar contatos comerciais",
    ],
    faqs: [
      {
        question: "Quanto tempo leva para criar um site profissional?",
        answer:
          "O prazo depende do número de páginas, do conteúdo e das integrações necessárias. Depois do diagnóstico, a DigiUP apresenta um escopo com etapas e prazo definidos.",
      },
      {
        question: "A DigiUP ajuda a organizar o conteúdo do site?",
        answer:
          "Sim. Estruturamos a hierarquia das páginas e orientamos a mensagem para que o site explique o negócio com clareza. Materiais específicos da empresa são validados em conjunto.",
      },
      {
        question: "O site funciona bem no celular?",
        answer:
          "Sim. A experiência é planejada para diferentes tamanhos de tela, com navegação, leitura e ações adequadas principalmente ao uso em dispositivos móveis.",
      },
      {
        question: "O site já é entregue preparado para o Google?",
        answer:
          "A entrega inclui a base técnica de SEO, como estrutura semântica, metadados, sitemap e cuidados de desempenho. O crescimento orgânico contínuo também depende de conteúdo, autoridade e acompanhamento.",
      },
    ],
    seo: {
      title: "Criação de Sites Profissionais para Empresas | DigiUP",
      description:
        "Criação de sites institucionais e landing pages profissionais para empresas que querem fortalecer sua presença digital e gerar novas oportunidades.",
      serviceType: "Criação de sites profissionais",
    },
  },
  {
    path: "/sistemas-sob-medida/",
    label: "Sistemas e plataformas",
    title: "Sistemas sob medida",
    titleAccent: "para organizar e evoluir operações.",
    lead:
      "Plataformas web, painéis e integrações construídos de acordo com o processo real da sua empresa — sem obrigar a operação a caber em uma ferramenta genérica.",
    overviewTitle: "Quando a operação cresce, improvisos começam a custar caro.",
    overview:
      "Transformamos processos dispersos em uma solução centralizada, segura e simples de usar. Do levantamento das regras até a evolução do produto, tecnologia e experiência caminham juntas para apoiar o trabalho cotidiano.",
    benefits: [
      "Centralizar informações e reduzir retrabalho",
      "Dar visibilidade a processos e indicadores",
      "Conectar ferramentas que hoje operam isoladas",
    ],
    deliverables: [
      {
        title: "Sistemas web",
        text: "Aplicações acessíveis pelo navegador, com regras e fluxos próprios da operação.",
      },
      {
        title: "Plataformas digitais",
        text: "Produtos com áreas de usuário, permissões e jornadas específicas.",
      },
      {
        title: "Painéis operacionais",
        text: "Visões claras para acompanhar tarefas, dados e decisões importantes.",
      },
      {
        title: "APIs e integrações",
        text: "Conexões entre serviços para manter dados e processos trabalhando juntos.",
      },
    ],
    idealFor: [
      "Operações dependentes de planilhas e mensagens",
      "Processos que exigem muitas tarefas manuais",
      "Empresas que não se adaptam a softwares genéricos",
      "Ideias de plataformas que precisam sair do papel",
    ],
    faqs: [
      {
        question: "Como começa um projeto de sistema sob medida?",
        answer:
          "O primeiro passo é mapear objetivos, usuários, regras e riscos. A partir desse diagnóstico, priorizamos o núcleo da solução e definimos uma evolução viável por etapas.",
      },
      {
        question: "É possível integrar o sistema com ferramentas que já usamos?",
        answer:
          "Na maioria dos casos, sim. Avaliamos as APIs e limitações técnicas de cada ferramenta antes de definir como a integração será realizada.",
      },
      {
        question: "A DigiUP desenvolve um MVP?",
        answer:
          "Sim. Podemos construir uma primeira versão focada nas hipóteses e funções essenciais, evitando investimento prematuro em recursos que ainda não foram validados.",
      },
      {
        question: "O sistema pode evoluir depois da primeira entrega?",
        answer:
          "Sim. A arquitetura e o planejamento consideram evolução contínua, novas integrações e ajustes orientados pelo uso real da solução.",
      },
    ],
    seo: {
      title: "Desenvolvimento de Sistemas Sob Medida | DigiUP",
      description:
        "Desenvolvimento de sistemas sob medida, plataformas web, painéis e integrações para organizar processos e apoiar o crescimento da sua empresa.",
      serviceType: "Desenvolvimento de sistemas sob medida",
    },
  },
  {
    path: "/automacoes-e-ia/",
    label: "Automação e inteligência artificial",
    title: "Automações e IA",
    titleAccent: "aplicadas ao trabalho real.",
    lead:
      "Fluxos inteligentes, integrações e agentes que reduzem tarefas repetitivas, conectam informações e liberam a equipe para decisões de maior valor.",
    overviewTitle: "Automatizar bem não é adicionar tecnologia: é remover atrito.",
    overview:
      "Analisamos onde o tempo é desperdiçado e desenhamos um fluxo confiável entre pessoas, dados e ferramentas. A inteligência artificial entra somente quando melhora a experiência, a velocidade ou a capacidade da operação.",
    benefits: [
      "Reduzir tarefas manuais e erros de transferência",
      "Acelerar triagens, consultas e respostas recorrentes",
      "Manter dados sincronizados entre diferentes ferramentas",
    ],
    deliverables: [
      {
        title: "Automação de processos",
        text: "Fluxos que executam etapas recorrentes a partir de eventos e regras definidos.",
      },
      {
        title: "Agentes de IA",
        text: "Assistentes conectados ao contexto e às ferramentas da empresa, com limites claros.",
      },
      {
        title: "Integração de dados",
        text: "Informações circulando entre sistemas sem cópias e atualizações manuais.",
      },
      {
        title: "Busca inteligente",
        text: "Consulta a documentos e bases internas com respostas contextualizadas.",
      },
    ],
    idealFor: [
      "Equipes sobrecarregadas por tarefas repetitivas",
      "Atendimentos que exigem triagem e encaminhamento",
      "Empresas com dados espalhados em várias ferramentas",
      "Operações que querem aplicar IA com objetivo claro",
    ],
    faqs: [
      {
        question: "O que pode ser automatizado na minha empresa?",
        answer:
          "Tarefas recorrentes, baseadas em regras e que movimentam informações entre ferramentas são boas candidatas. O diagnóstico identifica ganho potencial, riscos e pontos que devem permanecer sob decisão humana.",
      },
      {
        question: "Toda automação precisa usar inteligência artificial?",
        answer:
          "Não. Muitas automações funcionam melhor com regras objetivas. Usamos IA quando o processo envolve interpretação de linguagem, classificação, busca contextual ou geração assistida.",
      },
      {
        question: "É possível integrar WhatsApp, formulários e sistemas internos?",
        answer:
          "Sim, quando os serviços oferecem meios técnicos de integração. Antes do projeto, avaliamos APIs, permissões, custos e regras de cada plataforma.",
      },
      {
        question: "Como vocês evitam que a IA tome decisões erradas?",
        answer:
          "Definimos limites, validações, registros e momentos de revisão humana conforme o risco do processo. A solução é desenhada para ser útil e controlável, não autônoma a qualquer custo.",
      },
    ],
    seo: {
      title: "Automação de Processos e Inteligência Artificial | DigiUP",
      description:
        "Automações, integrações e agentes de IA para reduzir tarefas manuais, conectar ferramentas e tornar a operação da sua empresa mais eficiente.",
      serviceType: "Automação de processos e inteligência artificial",
    },
  },
];

export function getServicePage(path) {
  const normalizedPath = normalizePath(path);
  return servicePages.find((service) => service.path === normalizedPath);
}
