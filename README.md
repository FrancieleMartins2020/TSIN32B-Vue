Vue.js
Introdução
Olá! 😊
Vue (pronunciado /vjuː/, como "view") é uma poderosa abstração de JavaScript que facilita a construção de interfaces de usuário. Ela trabalha em cima do HTML, CSS e JavaScript padrão, oferecendo um modelo de programação declarativa baseado em componentes. Atualmente, estamos na versão 3 do Vue.

Preparando o ambiente
Para começar a desenvolver, você vai precisar do Node.js.
Você pode instalá-lo usando o executável ou via linha de comando (terminal) com o
fnm
.
Dica: No PowerShell do Windows, pode ser necessário ajustar o caminho do
fnm
.

Para editar o código, recomendamos o Visual Studio Code (VSCode) com os seguintes plugins:

Vue (oficial)
ESLint
Prettier - Code formatter
Error Lens
Opcional: Ícones para deixar seu VSCode mais bonito:

Material Icon Theme
Vscode-icons
Symbols
O projeto - Controle de estoque de produtos
Vamos criar um projeto chamado estoq para aprender Vue! Ele terá três telas (detalhadas nas próximas sessões) e permitirá adicionar, listar, editar e deletar (CRUD) diferentes tipos de informações.

Para simular um servidor web, usaremos o json-server. Ele cria uma API simples para manipular dados em formato JSON. Em um sistema real, o backend poderia ser em Apache ou Node.js, com bancos de dados como PostgreSQL ou MySQL.

O backend
Embora seja chamado de "back", na verdade é uma API REST que mantém os dados. Pode-se usar um banco de dados, mas, para manter tudo em JavaScript, utilizaremos um arquivo JSON com o pacote json-server.
