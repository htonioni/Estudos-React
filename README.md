# Estudos React

Este repositório contém vários projetos de estudo em React, cada um com diferentes funcionalidades e tecnologias. Abaixo está uma descrição de cada projeto e as tecnologias utilizadas.

## Projetos

### 1. Página de Cadastro (_signup-page-react_)

Este projeto é uma página de cadastro simples construída com React e Vite. Inclui um formulário para registro de usuários e opções para se cadastrar usando redes sociais.
![Página de Cadastro](./pisocial-page-react_rest/src/assets/image.png)

#### Funcionalidades

- Formulário de cadastro de usuários.
- Opções para cadastro via redes sociais (LinkedIn, Twitter, Facebook).
- Design responsivo para visualizações em dispositivos móveis e desktop.

#### Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida para projetos front-end.
- **JSON Server**: Utilizado para simular um backend e gerenciar os dados de usuários.

#### Estrutura do Projeto

- `src/components/Form.jsx`: Contém o componente de formulário para registro de usuários.
- `src/components/SocialNetwork.jsx`: Contém o componente para opções de cadastro via redes sociais.
- `src/App.jsx`: O componente principal que combina os componentes de formulário e redes sociais.
- `src/App.css`: Estilos para o componente principal.
- `src/components/Form.css`: Estilos para o componente de formulário.
- `src/components/SocialNetwork.css`: Estilos para o componente de redes sociais.

#### Configuração do JSON Server

Para rodar o backend simulado com o `json-server`, siga os passos abaixo:

1. Instale o `json-server` globalmente (caso ainda não esteja instalado):
   ```
   npm install -g json-server
   ```
2. Utilize o script configurado no `package.json`
   ```
   npm run server
   ```

#### Progresso do Projeto

- ✅ Configuração inicial do projeto com React e Vite.
- ✅ Criação da estrutura de pastas e organização dos componentes.
- ✅ Desenvolvimento do componente de formulário (`Form.jsx`) para registro de usuários.
- ✅ Desenvolvimento do componente de redes sociais (`SocialNetwork.jsx`) para opções de cadastro via LinkedIn, Twitter e Facebook.
- ✅ Estilização dos componentes com CSS (`Form.css`, `SocialNetwork.css` e `App.css`).
- ✅ Configuração do `JSON Server` para simular o backend.
- ✅ Implementação da requisição `HTTP POST` para envio de dados ao backend
- ⏳ Implementação do `React Router` para navegação entre páginas.
- ⏳ Desenvolvimento da página de login com formulário funcional.
- ⏳ Configuração da requisição `HTTP GET` para obter dados do backend.
- ⏳ Desenvolvimento da página de login sucess.

### 2. Gerenciador de Tarefas (_task-list-react_)

Este é um projeto de gerenciador de tarefas (CRUD) desenvolvido com React e Vite. Ele permite adicionar, visualizar, editar e excluir tarefas, além de marcar tarefas como concluídas.
![alt text](./task-list-react/src/assets/1.png)

#### Funcionalidades

- Adicionar novas tarefas com título e descrição.
- Visualizar a lista de tarefas.
- Marcar tarefas como concluídas.
- Excluir tarefas.
- Visualizar detalhes de uma tarefa específica.

#### Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida para projetos front-end.
- **Tailwind CSS**: Framework de CSS para estilização.
- **React Router**: Biblioteca para roteamento em aplicações React.
- **UUID**: Biblioteca para geração de identificadores únicos.


### 3. CodeConnect (_login-page-react_)

Projeto inicial de React de uma página de login para uma rede social chamada CodeConnect, desenvolvido durante o curso de React: componentes e JSX.
![alt text](./login-page-react/img/image.png)

#### Funcionalidades

- Página de login com imagem, formulário de e-mail e senha, títulos e textos.
- Botão para entrar na aplicação.
- Links para lembrar senha ou cadastrar.

#### Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React-DOM**: Pacote que permite a integração do React com a árvore de elementos do DOM.
- **Babel**: Transpilador que converte código JavaScript moderno em versões compatíveis com navegadores mais antigos, além de permitir a interpretação de códigos JSX.
- **JSX**: Uma extensão de sintaxe para JavaScript usada no React, que permite a escrita de código HTML/XML de forma declarativa e integrada dentro do JavaScript.
- **Componentização**: Abordagem de design em que a interface de usuário é dividida em componentes reutilizáveis e independentes.
- **Props**: Dados passados de um componente pai para um componente filho no React.
- **useState**: Hook no React que permite adicionar estado a componentes funcionais.
- **Manipulação de eventos**: Ação de responder a interações do usuário, como cliques e teclas pressionadas, em aplicações web.

#### Figma

Você pode conferir o Figma da aplicação clicando [aqui](https://www.figma.com/file/SASyBm2k3IlqrO8qI1Otg1/CodeConnect-%7C-React%3A-Componentização-e-conceitos-básicos-(JSX)).

### 4. Feed Content (_feed-content-react_)

Este projeto é um feed de conteúdo interativo desenvolvido com React e Vite. Ele exibe uma lista de publicações com informações detalhadas, como título, resumo, número de linhas de código, compartilhamentos e comentários.

![Feed Content](./feed-content-react/image.png)

#### Funcionalidades

- Exibição de publicações em formato de cards.
- Barra de pesquisa para filtrar publicações.
- Filtro para categorias específicas.
- Sidebar com navegação para diferentes seções.
- Integração com uma API para buscar dados das publicações.

#### Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida para projetos front-end.
- **PropTypes**: Biblioteca para validação de propriedades em componentes React.
- **CSS Grid**: Utilizado para layout responsivo dos cards.
- **Fetch API**: Para realizar requisições HTTP e obter dados da API.

#### Estrutura do Projeto

- `src/components/BarraDePesquisa`: Componente para a barra de pesquisa.
- `src/components/Card`: Componente para exibição de cada publicação.
- `src/components/Filtro`: Componente para aplicar filtros às publicações.
- `src/components/Siderbar`: Componente para a barra lateral de navegação.
- `src/App.jsx`: Componente principal que combina todos os outros componentes.
- `src/App.css`: Estilos globais para o layout do feed.

#### Configuração

1. Instale as dependências do projeto:
   ```bash
   npm install
   ```

## Contato

Para mais informações, entre em contato através do email: htonioni@outlook.com
