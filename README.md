# 📚 BookHub API

Uma API REST desenvolvida em **Node.js** para gerenciamento de livros e autores, utilizando **Express**, **MongoDB** e **Mongoose**.

O projeto permite realizar operações de cadastro, consulta, atualização e exclusão de livros e autores, além de oferecer recursos de filtros, paginação e tratamento de erros.

---

## 🚀 Tecnologias utilizadas

- Node.js
- JavaScript (ES Modules)
- Express
- MongoDB
- Mongoose
- Dotenv
- Nodemon

---

## 📂 Estrutura do projeto

```text
bookhub-api/
├── src/
│   ├── config/
│   │   └── dbConnect.js
│   ├── controllers/
│   │   ├── autorController.js
│   │   └── livroController.js
│   ├── erros/
│   │   ├── ErrosBase.js
│   │   ├── ErroValidacao.js
│   │   ├── NaoEncontrado.js
│   │   └── RequisicaoIncorreta.js
│   ├── middlewares/
│   │   ├── manipulador404.js
│   │   ├── manipuladorDeErros.js
│   │   └── paginar.js
│   ├── models/
│   │   ├── Autor.js
│   │   └── Livro.js
│   ├── routes/
│   │   ├── autoresRoutes.js
│   │   ├── index.js
│   │   └── livrosRoutes.js
│   └── app.js
├── .env
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/ricardoLima01/bookhub-api.git
```

Entre na pasta do projeto:

```bash
cd bookhub-api
```

Instale as dependências:

```bash
npm install
```

---

## 🔐 Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL=sua_string_de_conexao_com_mongodb
PORT=3000
```

Substitua `sua_string_de_conexao_com_mongodb` pela URL de conexão do seu banco de dados MongoDB.

---

## ▶️ Como executar

Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

A API estará disponível em:

```text
http://localhost:3000
```

---

## 📌 Funcionalidades

### 📖 Livros

- Cadastro de livros;
- Listagem de livros;
- Busca de livro por ID;
- Atualização de livros;
- Exclusão de livros;
- Filtros por título, gênero, preço e autor;
- Paginação;
- Ordenação dos resultados.

### ✍️ Autores

- Cadastro de autores;
- Listagem de autores;
- Busca de autor por ID;
- Atualização de autores;
- Exclusão de autores;
- Paginação;
- Ordenação dos resultados.

### ⚙️ Outros recursos

- Integração com MongoDB utilizando Mongoose;
- Validação de dados;
- Tratamento de erros;
- Middleware para recursos não encontrados;
- Middleware de paginação;
- Organização do projeto em Models, Controllers, Routes e Middlewares.

---

## 📡 Endpoints

### Livros

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/livros` | Lista os livros |
| GET | `/livros/:id` | Busca um livro pelo ID |
| GET | `/livros/busca` | Filtra livros |
| POST | `/livros` | Cadastra um livro |
| PUT | `/livros/:id` | Atualiza um livro |
| DELETE | `/livros/:id` | Exclui um livro |

### Autores

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/autores` | Lista os autores |
| GET | `/autores/:id` | Busca um autor pelo ID |
| POST | `/autores` | Cadastra um autor |
| PUT | `/autores/:id` | Atualiza um autor |
| DELETE | `/autores/:id` | Exclui um autor |

---

## 🔎 Filtros

A API permite realizar buscas utilizando parâmetros na URL.

### Buscar por título

```http
GET /livros/busca?titulo=Harry
```

### Buscar por gênero

```http
GET /livros/busca?genero=Fantasia
```

### Buscar por faixa de preço

```http
GET /livros/busca?minPreco=20&maxPreco=100
```

### Buscar pelo nome do autor

```http
GET /livros/busca?nomeAutor=J.K
```

Os filtros também podem ser combinados:

```http
GET /livros/busca?genero=Fantasia&minPreco=20&maxPreco=100
```

---

## 📄 Paginação

Os endpoints de listagem possuem suporte à paginação e ordenação.

Exemplo:

```http
GET /livros?limite=5&pagina=1&ordenacao=titulo:1
```

Parâmetros utilizados:

- `limite` — quantidade de registros por página;
- `pagina` — página que será exibida;
- `ordenacao` — campo e ordem dos resultados.

---

## 🏗️ Organização

O projeto utiliza uma separação de responsabilidades entre as diferentes partes da aplicação:

```text
Routes
   ↓
Controllers
   ↓
Models
   ↓
MongoDB
```

### Routes

Responsáveis por definir os endpoints disponíveis na API.

### Controllers

Responsáveis por processar as requisições e executar as operações necessárias.

### Models

Representam as estruturas dos documentos armazenados no MongoDB.

### Middlewares

Responsáveis por funcionalidades como paginação, tratamento de erros e recursos não encontrados.

---

## 🎯 Objetivo do projeto

O projeto foi desenvolvido para praticar conceitos de **desenvolvimento back-end com Node.js**, explorando a construção de uma API REST integrada a um banco de dados MongoDB.

Entre os principais conceitos praticados estão:

- APIs REST;
- Express;
- MongoDB;
- Mongoose;
- CRUD;
- Rotas;
- Controllers;
- Models;
- Middlewares;
- Query parameters;
- Paginação;
- Filtros;
- Validação;
- Tratamento de erros;
- Variáveis de ambiente.

---

## 👨‍💻 Autor

Desenvolvido por **Ricardo Lima**.

- GitHub: https://github.com/ricardoLima01