<h1 align="center">
    <a href="#"> API TypeScript </a>
</h1>

<p align="center"> Um crud de aprendizado... </p>

<h4 align="center">
	 Status: Finalizado
</h4>

<p align="center">
 <a href="#-about">About</a> •
 <a href="#-Features">Features</a> •
 <a href="#-tech-stack">Tech Stack</a> •
 <a href="#-author">Author</a> •

</p>

## 💻 Sobre:

A API que desenvolvi simula o cadastro de salas, materias e videos das materias para uma escola fictícia.
Neste desafio foram abordados os seguintes temas:

- Node;
- TypeScript;
- Typeorm;
- Express;
- PostgreSQL;
- relationship;
---

## Funcionalidades

- [x] Um projeto estruturado, com uma boa organização das pastas, etc;
- [x] Os dados das aulas e videos, da escola serão armazenados em um banco de dados;
- [x] Dê nomes significativos para as suas funções e variáveis: trabalhe um pouco com os conceitos do Clean Code;
- [x] O admin irá fazer o cadastrar de salas, materias e videos;
- [x] Deixe o código mais acessível e semântico usando as dicas que foram passadas em aula;

---

## 🚀 Como executar o projeto.

1. Backend (API)

💡 O Backend deve estar rodando em sua máquina.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Postgress](https://www.postgresql.org/download/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/JuanBarcelos/crud-api-nodeJS

# Acesse a pasta do projeto no terminal/cmd
$ cd + sua pasta + git clone https://github.com/JuanBarcelos/crud-api-nodeJS

# Instale as dependências
$ yarn install

# Execute as migration e seed
$ yarn migration:run

#Arquivo .Env
$ preencha o arquivo com os dasdos de acordo com o seu postgress

#Criar o banco de dados
$ crie um banco de dados no postgress com o nome a sua escolha e preencha o campo `DB_NAME` com o nome criado.

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

```

---

## 🛠 Tecnologias

O projeto foi desenvolvido com as seguintes tecnologias:

- TypeScript
- Node.js

---

## 💻 Sobre:

Esta API foi desenvolvida com o intuito de aprendizado com as tecnologias utilizadas neste projeto.
O projeto teve como base o canal [Guido Cerqueira](https://www.youtube.com/c/guidocerqueira) atraves do video [API REST com Node.js e TypeScript | TypeORM [Atualizado]](https://www.youtube.com/watch?v=j8cm2C5-xn8&ab_channel=GuidoCerqueira)
