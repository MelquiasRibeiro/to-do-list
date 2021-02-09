![lang](https://img.shields.io/badge/language-Javascript-yellow) ![status](https://img.shields.io/badge/Status-WIP-orange)

# To-do List
um To-do List controller feito com React  e Node.js

# Backend

## Romo Rodar este projeto?
+ configurar o arquivo .ENV.exemple com as informações pedidas;
+ rodar o comando ```npm install``` para obter as bilbiotecas utilizadas no projeto;
+ rodar as migrations do banco de dados com o comando  ```npx sequelize db:migrate ```.
+ rodar o comando ```npm run start```.
`
## Rotas
+ __/tasks__:  o CRUD de Tasks com 5 rotas
    1. (get)/tasks: lista todos as tasks cadastradas;
    
    2. (get)/tasks/id: busca uma task por ID;
    3. (post)/tasks: cria uma task recebendo no body da requisição as informações {"title":"",
	"description":"",
	"finished":true/false,}
    4. (put)/tasks/id: atualiza os dados de uma tarefa que teve o ID fornecido.;
    5. (delete)/tasks/id: delete uma task ṕor ID .

## Ferramentas utilizadas:
Uma API de cadastro de usuários com autenticaçãodesenvolvida nos padroes REST.

+ Backend desenvolvido em [NODE.js](https://nodejs.org/en/about/) e [Express](https://expressjs.com/pt-br/)
+ Desenvolvimento de Api rest;
+ Padronização de código com [Eslint](https://eslint.org/) e [Prettier](https://prettier.io/);
+ Conexão com banco de dado gerenciado com [Sequelize](https://sequelize.org/) banco de dados Postgress;

# frontend

## telas:
o desing foi pensado com base no [protótipo](https://www.figma.com/file/whWZjR3k03ofWNxO73kS6I/Untitled?node-id=0%3A1) elaborado no FIGMA.

![Screenshot from 2021-02-09 18-10-44](https://user-images.githubusercontent.com/54459438/107431456-3c8fd600-6b05-11eb-83f9-40b0ce905798.png)
![Screenshot from 2021-02-09 18-31-25](https://user-images.githubusercontent.com/54459438/107431464-3e599980-6b05-11eb-8df9-bd1e301aa0a2.png)
![Screenshot from 2021-02-09 18-31-33](https://user-images.githubusercontent.com/54459438/107431467-3e599980-6b05-11eb-83a4-4900faf962a5.png)
![Screenshot from 2021-02-09 18-31-44](https://user-images.githubusercontent.com/54459438/107431469-3ef23000-6b05-11eb-81bf-98c83ddc9b4b.png)


## Como Rodar este projeto:
1. clone o projeto em sua maquina ```git clone https://github.com/MelquiasRibeiro/to-do-list-challenge```;
2. instale as dependencias necessárias ```npm install```;
3. inicie o projeto ```npm start``` e acesse localhost:3000.

## Padrão de commits:
O padrão adotado para os commits deste projeto foi o do [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
 

## Conceitos abordados neste projeto:
+ Padronização de código com [Eslint](https://eslint.org/) e [Prettier](https://prettier.io/);
+ Roteamento com [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start);
+ [Styled Components](https://styled-components.com/);
+ Armazenamento de dados no LocalStorage;
+ Renderização Condicional;
+ Tratamento de Erros;

