# 🌐 Portfólio Pessoal — Caio Agrelli

<div align="center">

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-build-646CFF?style=for-the-badge&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript)
![UFPE](https://img.shields.io/badge/UFPE-CIn-red?style=for-the-badge)
![Status](https://img.shields.io/badge/status-no%20ar-brightgreen?style=for-the-badge)

**Projeto desenvolvido para a disciplina de Desenvolvimento de Software — CIn/UFPE (2026)**

🔗 **[cin.ufpe.br/~caarr](https://cin.ufpe.br/~caarr)**

</div>

---

## 📌 Sobre o Projeto

Portfólio pessoal desenvolvido com **React + Vite**, apresentando informações profissionais, habilidades, experiências e certificados de forma bilíngue (PT/EN).

O projeto foi construído com foco em:
- Interface moderna, responsiva e com tema escuro
- Suporte a **dois idiomas** (Português e Inglês) com troca dinâmica via React state
- Componentização e organização de código com **React**
- Deploy via servidor web do CIn/UFPE

---

## 🔗 Acesso

| Ambiente | URL |
|----------|-----|
| Produção | [https://cin.ufpe.br/~caarr](https://cin.ufpe.br/~caarr) |
| Repositório | [github.com/caioagrelli/DS-React](https://github.com/caioagrelli/DS-React) |

---

## 📁 Estrutura do Projeto

```
caiooagrelli/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── foto.jpg
│   ├── App.css
│   ├── App.jsx         # ← Componente principal
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚙️ Funcionalidades

| Funcionalidade | Descrição |
|----------------|-----------|
| Bilíngue PT/EN | Troca de idioma via `useState` sem recarregar a página |
| Foto de perfil | Exibida com `object-fit: cover` e bordas arredondadas |
| Skills com ícones | Usa a biblioteca **Devicons** para exibir logos das tecnologias |
| Seção de experiência | Cards com cargo, empresa, badge de status e stack |
| Cursos & Certificados | Grid de cards com título, emissor e ano |
| Animações | Entrada com `fadeUp` em CSS puro via `@keyframes` |
| Responsivo | Layout adaptado para mobile via `@media` queries |

---

## 🛠️ Stack

| Tecnologia | Uso |
|------------|-----|
| React 18 | Componentização e gerenciamento de estado |
| Vite | Build tool e servidor de desenvolvimento |
| CSS puro | Estilização completa sem framework |
| Devicons | Ícones das linguagens e tecnologias |
| Flag Icons | Bandeiras para o toggle de idioma |
| Google Fonts | Fontes Syne, DM Sans e JetBrains Mono |

---

## 💻 Como rodar localmente

```bash
# Clonar o repositório
git clone https://github.com/caioagrelli/DS-React.git

# Entrar na pasta
cd DS-React

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

Acesse em `http://localhost:5173`

---

## 📦 Build para produção

```bash
npm run build
```

Os arquivos gerados ficam na pasta `dist/` e devem ser copiados para `public_html/` no webserver do CIn para deploy.

---

## 👤 Integrante

| Nome | E-mail |
|------|--------|
| Caio Agrelli | caarr@cin.ufpe.br |

---

## 🏫 Contexto Acadêmico

| Campo | Informação |
|-------|------------|
| Disciplina | Desenvolvimento de Software |
| Instituição | Centro de Informática – UFPE (CIn) |
| Professores | Kiev Gama e Vinicius Cardoso |
| Linguagem | JavaScript (React) |
| Ano | 2026 |