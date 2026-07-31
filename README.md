# DigiUP

Site institucional da **DigiUP**, uma Tech House especializada em presença
digital, criação de sites, sistemas, plataformas e automações.

O projeto apresenta os serviços, o processo de trabalho e o posicionamento da
empresa por meio de uma experiência responsiva, acessível e orientada à
conversão.

## Principais recursos

- Página institucional responsiva para desktop, tablet e dispositivos móveis.
- Apresentação das soluções e do processo de desenvolvimento da DigiUP.
- Seção institucional com informações sobre o fundador.
- FAQ com respostas sobre serviços e contratação.
- Integração direta com WhatsApp para contato comercial.
- Metadados para SEO, Open Graph e compartilhamento em redes sociais.
- Identidade visual própria com efeitos de liquid glass e animações sutis.
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
│   ├── pages/               # Composição das páginas
│   ├── styles/
│   │   ├── layout/          # Estilos estruturais
│   │   └── sections/        # Estilos específicos das seções
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
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

### Visualizar o build

```bash
npm run preview
```

## Manutenção

- Informações globais e links: `src/config/site.js`
- Serviços: `src/data/services.js`
- Etapas do processo: `src/data/process.js`
- Perguntas frequentes: `src/data/faqs.js`
- Identidade visual e cores: `src/styles/variables.css`
- Ativos da marca: `public/`

---

© 2026 DigiUP. Todos os direitos reservados.
