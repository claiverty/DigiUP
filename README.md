# DigiUP

Site institucional da **DigiUP**, uma Tech House especializada em presença
digital, criação de sites, sistemas, plataformas e automações.

O projeto apresenta os serviços, o processo de trabalho e o posicionamento da
empresa por meio de uma experiência responsiva, acessível e orientada à
conversão.

## Principais recursos

- Página institucional e páginas específicas para cada frente de serviço.
- Apresentação das soluções e do processo de desenvolvimento da DigiUP.
- Seção institucional com informações sobre o fundador.
- FAQ com respostas sobre serviços e contratação.
- Integração direta com WhatsApp para contato comercial.
- Metadados para SEO, Open Graph e compartilhamento em redes sociais.
- HTML pré-renderizado, dados estruturados e sitemap com todas as páginas.
- Eventos de conversão preparados para integração com Google Tag Manager.
- Imagens otimizadas em WebP/JPEG e cache prolongado para arquivos estáticos.
- Cabeçalhos de segurança, política de conteúdo e canal de divulgação responsável.
- Identidade visual própria com efeitos de liquid glass e animações sutis.
- Rolagem suave e entradas progressivas de conteúdo durante a navegação.
- Respeito à preferência do usuário por movimento reduzido.

## Tecnologias

- React 19
- JavaScript e JSX
- Vite 8
- CSS modularizado por responsabilidade

## Estrutura do projeto

```text
DigiUP/
├── public/                  # Imagens, favicon e ativos públicos
├── src/
│   ├── components/
│   │   ├── layout/          # Cabeçalho e rodapé
│   │   ├── sections/        # Seções da página
│   │   └── ui/              # Componentes reutilizáveis
│   ├── config/              # Informações e links globais
│   ├── data/                # Serviços, processo e FAQ
│   ├── hooks/               # Comportamentos de rolagem e animação
│   ├── pages/               # Composição das páginas
│   ├── styles/
│   │   ├── layout/          # Estilos estruturais
│   │   ├── pages/           # Estilos das páginas de serviço
│   │   └── sections/        # Estilos específicos das seções
│   ├── utils/               # Recursos compartilhados, como analytics
│   ├── App.jsx
│   ├── entry-server.jsx     # Renderização estática para SEO
│   └── main.jsx
├── scripts/                 # Geração das páginas estáticas
├── index.html
├── package.json
├── vercel.json              # Deploy, cache e cabeçalhos de segurança
└── vite.config.js
```

## Como executar localmente

### Requisitos

- Node.js 22.13 ou superior
- npm

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

O Vite mostrará no terminal o endereço do servidor local.

### Build de produção

```bash
npm run build
```

Os arquivos finais serão gerados na pasta `dist`.

O build gera HTML completo para a página inicial e para as rotas:

- `/criacao-de-sites/`
- `/sistemas-sob-medida/`
- `/automacoes-e-ia/`
- `/criacao-de-sites-em-formosa-go/`
- `/criacao-de-sites-em-brasilia/`

### Visualizar o build

```bash
npm run preview
```

## Manutenção

- Informações globais e links: `src/config/site.js`
- Serviços: `src/data/services.js`
- Etapas do processo: `src/data/process.js`
- Perguntas frequentes: `src/data/faqs.js`
- Conteúdo das páginas de serviço: `src/data/servicePages.js`
- Conteúdo das páginas regionais: `src/data/localPages.js`
- Metadados e dados estruturados: `src/data/seo.js`
- Rolagem e animações de entrada: `src/hooks/`
- Identidade visual e cores: `src/styles/variables.css`
- Ativos da marca: `public/`

## Segurança na publicação

O arquivo `vercel.json` mantém a configuração usada na publicação: Content
Security Policy, proteção contra iframes, controle de permissões, HSTS e cache
prolongado para arquivos estáticos. O domínio pode permanecer sob o proxy da
Cloudflare sem retirar essas proteções da resposta da Vercel.

---

© 2026 DigiUP. Todos os direitos reservados.
