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
      text: "Atendemos empresas em todo o Brasil. Conheça nossas soluções em",
      links: [
        { label: "Brasília, DF", path: "/criacao-de-sites-em-brasilia/" },
        { label: "Formosa, GO", path: "/criacao-de-sites-em-formosa-go/" },
        { label: "São Paulo, SP", path: "/criacao-de-sites-em-sao-paulo-sp/" },
      ],
    },
    projectLink: {
      href: "/projetos/comercial-sagarana/",
      label: "site e painel da Comercial Sagarana",
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
      title: "Criação de Sites para Empresas | DigiUP",
      description:
        "Sites institucionais e landing pages para empresas que querem fortalecer sua presença digital, apresentar seus serviços e gerar oportunidades.",
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
    projectLink: {
      href: "/projetos/digiticket/",
      label: "plataforma de eventos DigiTicket",
    },
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
      title: "Sistemas Sob Medida para Empresas | DigiUP",
      description:
        "Desenvolvimento de sistemas web sob medida, plataformas e integrações para organizar processos e apoiar o crescimento da sua empresa.",
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
      title: "Automação de Processos e IA para Empresas | DigiUP",
      description:
        "Automatize processos, conecte ferramentas e aplique inteligência artificial para reduzir tarefas manuais e tornar sua operação mais eficiente.",
      serviceType: "Automação de processos e inteligência artificial",
    },
  },
  {
    "path": "/integracoes-e-apis/",
    "label": "Integrações e APIs",
    "title": "Integrações e APIs",
    "titleAccent": "para conectar sua operação.",
    "lead": "Conectamos sistemas, ferramentas e meios de pagamento para que as informações circulem entre as áreas e sua equipe trabalhe com menos tarefas manuais.",
    "overviewTitle": "Suas ferramentas precisam trabalhar juntas.",
    "overview": "A DigiUP avalia os sistemas que sua empresa já utiliza e desenvolve as conexões necessárias entre eles. Definimos quais dados devem circular, como tratar falhas e quais permissões cada integração precisa, respeitando as regras da operação.",
    "benefits": [
      "Reduzir digitação repetida e transferência manual de dados",
      "Manter informações consistentes entre ferramentas",
      "Conectar etapas comerciais, financeiras e operacionais"
    ],
    "deliverables": [
      {
        "title": "Integração entre sistemas",
        "text": "Conexões entre plataformas, CRMs e ferramentas internas conforme as APIs e os recursos disponíveis."
      },
      {
        "title": "APIs sob medida",
        "text": "Interfaces para disponibilizar funções e dados do seu sistema com autenticação e permissões definidas."
      },
      {
        "title": "Pagamentos e eventos",
        "text": "Integração com provedores de pagamento e webhooks para atualizar etapas a partir de eventos recebidos."
      },
      {
        "title": "Sincronização de dados",
        "text": "Fluxos com validação, registros e tratamento de falhas para acompanhar a troca de informações."
      }
    ],
    "idealFor": [
      "Empresas que usam ferramentas sem conexão entre si",
      "Equipes que copiam dados de um sistema para outro",
      "Operações que precisam integrar pagamentos e pedidos",
      "Plataformas que precisam disponibilizar ou consumir APIs"
    ],
    "faqs": [
      {
        "question": "É possível conectar as ferramentas que minha empresa já usa?",
        "answer": "Avaliamos a documentação, as APIs, as permissões e as limitações de cada ferramenta. Com essas informações, definimos as conexões viáveis e o escopo da integração."
      },
      {
        "question": "Vocês desenvolvem APIs para sistemas existentes?",
        "answer": "Sim. Após avaliar o código e a estrutura do sistema, podemos desenvolver endpoints, autenticação e regras de acesso adequados às funções que precisam ser disponibilizadas."
      },
      {
        "question": "A integração pode incluir pagamentos?",
        "answer": "Sim, quando o provedor oferece os recursos necessários. O projeto define como iniciar pagamentos, receber notificações e atualizar os registros de acordo com as regras da operação."
      },
      {
        "question": "O que acontece se uma ferramenta ficar indisponível?",
        "answer": "Planejamos registros, alertas e estratégias de reprocessamento conforme o fluxo e os recursos das ferramentas. As regras de recuperação são definidas no escopo para reduzir perdas e duplicidades."
      }
    ],
    "seo": {
      "title": "Integrações de Sistemas e APIs para Empresas | DigiUP",
      "description": "Conecte sistemas, ferramentas e pagamentos com integrações e APIs sob medida. Reduza tarefas manuais e centralize informações com a DigiUP.",
      "serviceType": "Integrações de sistemas e desenvolvimento de APIs"
    }
  },
  {
    "path": "/evolucao-e-suporte/",
    "label": "Evolução e suporte",
    "title": "Evolução e suporte",
    "titleAccent": "para acompanhar seu negócio.",
    "lead": "Manutenção, correções e melhorias para que seu site ou sistema continue atendendo às necessidades da empresa depois da primeira entrega.",
    "overviewTitle": "A tecnologia precisa acompanhar as mudanças da operação.",
    "overview": "A DigiUP organiza as demandas de manutenção e evolução conforme o uso da solução. Avaliamos o estado do projeto, priorizamos ajustes e planejamos novas entregas com escopo definido, considerando as necessidades da equipe e dos clientes.",
    "benefits": [
      "Corrigir problemas que atrapalham o uso da solução",
      "Adaptar funcionalidades às mudanças do negócio",
      "Organizar melhorias e prioridades com acompanhamento técnico"
    ],
    "deliverables": [
      {
        "title": "Manutenção e correções",
        "text": "Análise e resolução de problemas no site ou sistema, conforme o escopo e as prioridades acordados."
      },
      {
        "title": "Evolução de funcionalidades",
        "text": "Novos recursos e ajustes nos fluxos para acompanhar o uso da solução e as necessidades da empresa."
      },
      {
        "title": "Atualizações técnicas",
        "text": "Avaliação de dependências, compatibilidade e melhorias na base do projeto para planejar atualizações."
      },
      {
        "title": "Acompanhamento técnico",
        "text": "Organização de demandas, orientações e planejamento de entregas com canais e prazos combinados."
      }
    ],
    "idealFor": [
      "Empresas com sites ou sistemas que precisam de manutenção",
      "Operações que precisam ajustar recursos já existentes",
      "Produtos digitais com novas demandas de usuários",
      "Equipes que precisam de apoio técnico para planejar melhorias"
    ],
    "faqs": [
      {
        "question": "Vocês atendem projetos desenvolvidos por outra empresa?",
        "answer": "Podemos avaliar projetos existentes. Antes de assumir o trabalho, analisamos a tecnologia, o código disponível, os acessos e a documentação para definir a viabilidade e o escopo."
      },
      {
        "question": "O acompanhamento pode ser contínuo?",
        "answer": "Sim. Podemos organizar um acompanhamento recorrente ou demandas pontuais, conforme a necessidade do projeto. Atividades, canais de atendimento e prazos são definidos na proposta."
      },
      {
        "question": "O suporte inclui novas funcionalidades?",
        "answer": "Correções, manutenção e novos recursos são planejados conforme o escopo contratado. Demandas de evolução são avaliadas e priorizadas antes da implementação."
      },
      {
        "question": "Como são definidos os prazos de atendimento?",
        "answer": "Os prazos e a disponibilidade são combinados na contratação, de acordo com o tipo de demanda e a criticidade da operação. A proposta estabelece como solicitar e acompanhar o atendimento."
      }
    ],
    "seo": {
      "title": "Manutenção, Evolução e Suporte de Sites e Sistemas | DigiUP",
      "description": "Manutenção de sites e sistemas, correções e novas funcionalidades. Conte com a DigiUP para planejar a evolução da tecnologia do seu negócio.",
      "serviceType": "Manutenção, evolução e suporte de sites e sistemas"
    }
  },
];

export function getServicePage(path) {
  const normalizedPath = normalizePath(path);
  return servicePages.find((service) => service.path === normalizedPath);
}
