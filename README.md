# Convexa - Educação Empreendedora

## 🚀 Sobre o Projeto

A **Convexa** é uma plataforma de educação empreendedora especializada em transformar empreendedores - especialmente advogados e profissionais do direito - em líderes de resultado através de mentorias, masterminds, consultorias e soluções de tecnologia com inteligência artificial.

## 🏗️ Arquitetura do Projeto

Este é um site Jekyll moderno e responsivo construído com:

- **Jekyll 4.3+** - Gerador de sites estáticos
- **SCSS/Sass** - Pré-processador CSS
- **HTML5 + CSS3** - Estrutura e estilização
- **JavaScript** - Interatividade
- **Bootstrap** - Framework CSS responsivo
- **Font Awesome** - Ícones

## 📁 Estrutura do Projeto

```
convexa/
├── _config.yml              # Configuração principal do Jekyll
├── _data/                   # Dados estruturados (YAML)
│   ├── navigation.yml       # Menu de navegação
│   └── footer.yml          # Dados do rodapé
├── _includes/               # Componentes reutilizáveis
│   ├── navigation.html     # Cabeçalho/navegação
│   ├── footer.html         # Rodapé
│   └── seo.html           # Meta tags SEO
├── _layouts/                # Templates das páginas
│   ├── default.html        # Layout base
│   ├── home.html          # Layout da homepage
│   └── page.html          # Layout de páginas internas
├── _sass/                   # Arquivos SCSS
├── assets/                  # Assets estáticos
│   ├── css/               # CSS compilado
│   ├── js/                # JavaScript
│   └── images/            # Imagens e logotipos
├── pages/                   # Páginas estáticas
├── docs/                    # Documentação (não deployada)
├── Dockerfile              # Container Docker
├── docker-compose.yml      # Orquestração Docker
├── firebase.json           # Configuração Firebase Hosting
└── README.md               # Este arquivo
```

## 🎯 Funcionalidades

### 🏠 Homepage
- Hero section impactante com call-to-action
- Seções sobre serviços (mentorias, masterminds, consultorias)
- Depoimentos e cases de sucesso
- Formulário de contato

### 📖 Páginas Institucionais
- Sobre a Convexa e fundadores
- Política de Privacidade (LGPD compliant)
- Termos de Uso

### 🎨 Design
- Design moderno e profissional
- Totalmente responsivo (mobile-first)
- Otimizado para performance
- SEO otimizado

## 🚀 Como Executar

### Pré-requisitos
- Ruby 3.0+
- Jekyll 4.3+
- Node.js 16+ (opcional, para build tools)
- Docker (opcional)

### Instalação Local

1. Clone o repositório:
```bash
git clone https://github.com/CalculoJuridico/convexa.git
cd convexa
```

2. Instale as dependências:
```bash
bundle install
```

3. Execute o servidor de desenvolvimento:
```bash
bundle exec jekyll serve
```

4. Acesse no navegador:
```
http://localhost:4000
```

### Execução com Docker

1. Build e execute com Docker Compose:
```bash
docker-compose up --build
```

2. Acesse no navegador:
```
http://localhost:4000
```

## 🔧 Desenvolvimento

### Estrutura de Dados

Os dados do site são gerenciados via arquivos YAML em `_data/`:

- `navigation.yml` - Menu principal
- `footer.yml` - Links e informações do rodapé

### Customização de Estilos

Os estilos estão organizados em `_sass/` usando SCSS:

```scss
// Principais arquivos
_sass/
├── main.scss              # Arquivo principal
├── _variables.scss        # Variáveis globais
├── _base.scss            # Estilos base
├── _layout.scss          # Layout e grid
└── _components.scss      # Componentes específicos
```

### Adicionando Conteúdo

#### Nova Página
```yaml
---
layout: page
title: "Título da Página"
permalink: /nova-pagina/
description: "Descrição para SEO"
---

Conteúdo da página em Markdown...
```

#### Novo Post no Blog
```yaml
---
layout: post
title: "Título do Post"
date: 2025-06-26
author: "Autor"
description: "Descrição do post para SEO"
---

Conteúdo do post em Markdown...
```

## 🌐 Deploy

### Firebase Hosting

1. Instale o Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Faça login no Firebase:
```bash
firebase login
```

3. Build do site:
```bash
bundle exec jekyll build
```

4. Deploy:
```bash
firebase deploy
```

### GitHub Actions (CI/CD)

O projeto inclui workflow de CI/CD para deploy automático no Firebase Hosting quando há push na branch `main`.

## 📊 SEO e Performance

### Otimizações Implementadas
- Meta tags otimizadas
- Schema.org markup
- Sitemap XML automático
- RSS Feed
- Imagens otimizadas
- CSS e JS minificados
- Lazy loading de imagens

### Core Web Vitals
- Lighthouse Score: 95+
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1

## 🔐 Segurança e Privacidade

- Compliance total com LGPD
- Headers de segurança configurados
- Proteção contra XSS
- Validação de formulários
- HTTPS obrigatório

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1440px

## 🧪 Testes

### Executar Testes
```bash
# Testes de build
bundle exec jekyll build

# Validação HTML
bundle exec htmlproofer ./_site

# Testes de performance
npm run lighthouse
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📋 Roadmap

### Versão 1.0 (Atual)
- [x] Website institucional
- [x] Sistema de navegação
- [x] Páginas legais (Privacidade, Termos)
- [x] SEO otimizado
- [x] Deploy automatizado

### Versão 1.1 (Próxima)
- [ ] Blog integrado
- [ ] Formulários de contato funcionais
- [ ] Integração com CRM
- [ ] Chat online
- [ ] Analytics avançados

### Versão 2.0 (Futuro)
- [ ] Portal do cliente
- [ ] Sistema de agendamento
- [ ] Integração com pagamentos
- [ ] API própria
- [ ] Aplicativo mobile

## 📞 Suporte

- **Email**: suporte@convexatech.com.br
- **Website**: https://convexatech.com.br
- **Documentação**: Disponível na pasta `/docs`

## 📄 Licença

Este projeto é propriedade da Convexa. Todos os direitos reservados.

---

**Convexa** - Transformamos empreendedores em líderes de resultado.