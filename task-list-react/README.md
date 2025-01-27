# Gerenciador de Tarefas (Task List)

Este é um projeto de gerenciador de tarefas (CRUD) desenvolvido com React e Vite. Ele permite adicionar, visualizar, editar e excluir tarefas, além de marcar tarefas como concluídas.
![alt text](./src/assets/1.png)

## Funcionalidades

- Adicionar novas tarefas com título e descrição.
- Visualizar a lista de tarefas.
- Marcar tarefas como concluídas.
- Excluir tarefas.
- Visualizar detalhes de uma tarefa específica.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida para projetos front-end.
- **Tailwind CSS**: Framework de CSS para estilização.
- **React Router**: Biblioteca para roteamento em aplicações React.
- **UUID**: Biblioteca para geração de identificadores únicos.

## Instalação

Para rodar este projeto localmente, você precisará ter o Node.js e o npm instalados. Siga os passos abaixo:

1. Clone o repositório:
    ```sh
    git clone https://github.com/htonioni/Estudos-React.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd task-list-react
    ```

3. Instale as dependências do projeto:
    ```sh
    npm install
    ```

4. Inicie o servidor de desenvolvimento:
    ```sh
    npm run dev
    ```

## Estrutura do Projeto

- **src/**: Contém os arquivos fonte do projeto.
  - `components/`: Contém os componentes React utilizados no projeto.
    - _AddTasks.jsx_: Componente para adicionar novas tarefas.
    - _Button.jsx_: Componente de botão reutilizável.
    - _Input.jsx_: Componente de input reutilizável.
    - _Tasks.jsx_: Componente que exibe a lista de tarefas.
    - _Title.jsx_: Componente para exibir títulos.
  - `pages/`: Contém as páginas da aplicação.
    - _TaskPage.jsx_: Página de detalhes da tarefa.
  - _App.jsx_: Componente principal da aplicação.
  - _main.jsx_: Ponto de entrada da aplicação.
- _index.html_: Arquivo HTML principal.
- _tailwind.config.js_: Configuração do Tailwind CSS.
- _vite.config.js_: Configuração do Vite.
- _package.json_: Contém as dependências e scripts do projeto.

## Dependências

As dependências do projeto estão listadas no arquivo `package.json`. Aqui estão algumas das principais:

- [react](https://react.dev/)
- [react-dom](https://pt-br.legacy.reactjs.org/docs/react-dom.html)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [uuid](https://www.npmjs.com/package/uuid)
- [tailwindcss](https://tailwindcss.com/7)
- [vite](https://vite.dev/)

## Comandos Úteis

Aqui estão alguns comandos úteis para trabalhar com este projeto:

- Para criar um novo projeto React com Vite:
    ```sh
    npm create vite@latest my-react-app -- --template react
    ```

- Para instalar dependências:
    ```sh
    npm install
    ```

- Para iniciar o servidor de desenvolvimento:
    ```sh
    npm run dev
    ```

- Para construir o projeto para produção:
    ```sh
    npm run build
    ```

- Para visualizar a versão de produção localmente:
    ```sh
    npm run preview
    ```

- Para rodar o linter:
    ```sh
    npm run lint
    ```

## Projeto 

Projeto criado durante curso de **iniciante em React** do canal [Dicas para Devs](https://www.youtube.com/@dicasparadevs) com Felipe Rocha.

