# 🌿 Vue.js

## 📌 Introdução

Olá! 😊  
Vue (pronunciado */vjuː/*, como "view") é uma poderosa abstração de JavaScript que facilita a construção de interfaces de usuário.  
Ele funciona sobre HTML, CSS e JavaScript padrão, oferecendo um modelo de programação **declarativa baseada em componentes**.  

> 📦 Atualmente estamos na **versão 3** do Vue.

---

## ⚙️ Preparando o ambiente

Para começar a desenvolver com Vue, você precisará do **Node.js**.

### 🔧 Instalação do Node.js

Você pode instalá-lo de duas formas:

- Usando o instalador oficial do site [nodejs.org](https://nodejs.org)
- Ou via linha de comando com o **[`fnm`](https://github.com/Schniz/fnm)** (Fast Node Manager)

> 💡 **Dica**: No PowerShell do Windows, pode ser necessário ajustar o caminho do `fnm`.

---

### 💻 Editor de Código Recomendado

Recomendamos o **[Visual Studio Code (VSCode)](https://code.visualstudio.com/)** com os seguintes plugins:

- ✅ [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) — oficial
- ✅ [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- ✅ [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- ✅ [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

#### 🌈 Plugins visuais opcionais:
- 🎨 [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- 🎨 [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)

---

## 📁 O Projeto — Controle de Estoque de Produtos

Vamos criar um projeto chamado **estoq** para aprender Vue! 🚀  
Este projeto contará com **três telas** (detalhadas nas próximas seções) e permitirá executar operações **CRUD**:

- ➕ Adicionar
- 📄 Listar
- ✏️ Editar
- 🗑️ Deletar

---

## 🌐 Backend Simples com JSON Server

Para simular um servidor web, usaremos o pacote [`json-server`](https://github.com/typicode/json-server).  
Ele permite criar uma API REST simples baseada em um arquivo `.json`.

> ⚠️ Em aplicações reais, o backend pode ser construído com **Node.js**, **Apache**, **PostgreSQL**, **MySQL**, entre outros.

Neste projeto, para facilitar, tudo será mantido em **JavaScript**, usando um **arquivo JSON** como banco de dados.

---

📣 **Fique à vontade para clonar o projeto e experimentar!**
