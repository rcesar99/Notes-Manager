# Gerenciador de Notas 📝

- Um projeto básico de Gerenciador de Notas construído com React.js. Este aplicativo permite que você crie, edite e exclua notas de forma intuitiva. Além disso, todas as notas são armazenadas localmente usando um servidor json-server, permitindo simular um backend.

## Funcionalidades

### 📝 Adicionar Notas: Crie novas notas para organizar suas ideias.
### ✏️ Editar Notas: Modifique o conteúdo de uma nota existente.
### 🗑️ Excluir Notas: Remova notas indesejadas.
### 📄 Listagem de Notas: Visualize suas notas de forma organizada.

## Como Executar o Projeto Localmente 🚀

### Pré-requisitos
#### Antes de iniciar, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js (versão 14 ou superior),
- NPM ou Yarn
- Git

## Passo a Passo
### Clone o Repositório

## 1. Primeiro, clone o repositório para sua máquina local:

- git clone "https://github.com/rcesar99/Notes-Manager.git"
- cd Notes-Manager
## Ou, se estiver usando Yarn:
- yarn install


## 2. Instale as Dependências

### Depois de clonar o repositório, instale as dependências do projeto:
- npm install

## 3. Inicie o Servidor JSON-Server

### O projeto utiliza o json-server para simular um backend e armazenar as notas localmente. Para iniciar o json-server, siga as instruções abaixo:
- npx json-server --watch db.json --port 3005
- Isso iniciará o servidor local na porta 3005 e você poderá acessar o banco de dados de notas em http://localhost:3005/notes.

## 4. Inicie o Aplicativo React

### Em outra janela do terminal, inicie o aplicativo React:
- npm start
### Ou, se estiver usando Yarn:
- yarn start

## 5. Acesse o Projeto
### Após iniciar o aplicativo, abra o navegador e acesse:
- http://localhost:3000
- Você verá a interface do gerenciador de notas com as funcionalidades descritas.

## Estrutura do Projeto 📂
### A estrutura de diretórios do projeto é a seguinte:
```
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.js
│   │   │   └── Button.css
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   ├── NoteForm/
│   │   │   ├── NoteForm.js
│   │   │   └── NoteForm.css
│   │   ├── NoteItem/
│   │   │   ├── NoteItem.js
│   │   │   └── NoteItem.css
│   │   └── NoteList/
│   │       ├── NoteList.js
│   │       └── NoteList.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── db.json
├── package.json
└── README.md

```

## Scripts Disponíveis
- npm start ou yarn start - Inicia o aplicativo React em modo de desenvolvimento.
- npx json-server --watch db.json --port 3005 - Inicia o servidor JSON para armazenar as notas.

## Observações 📝
- Se você estiver usando uma porta diferente para o json-server, certifique-se de atualizar a URL do fetch no arquivo App.js.
- Se encontrar problemas ao executar o projeto, verifique se todas as dependências foram instaladas corretamente e se o json-server está rodando.




