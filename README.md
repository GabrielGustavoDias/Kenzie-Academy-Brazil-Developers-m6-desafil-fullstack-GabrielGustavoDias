# Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Início Rápido](#2-início-rápido)
  - [Instalando Dependências](#31-instalando-dependências)
  - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
  - [Migrations](#33-migrations)
- [Endpoints](#4-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.
Pro back-end:

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Yup](https://www.npmjs.com/package/yup)

No Front-end:

- [React](https://react.dev)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [React Router](https://reactrouter.com/en/main)
- [React-hook-form](https://www.npmjs.com/package/react-hook-form)
- [Styled-components](https://styled-components.com)
- [Yup](https://www.npmjs.com/package/yup)

## 2. Sobre

O projeto tinha como objetivo fazer um CURD completo de clientes, e contatos. Sendo que cada cliente poderia ter diversos contatos em sua aplicação, enquanto um contato pode se ter apenas um cliente. Seguindo essa logica, fiz uma pagina de login e registro para clientes, e na dashboard há uma lista dos contatos registrados e um formulario para se registrar novos clientes

## 3. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 3.1. Instalando Dependências

Clone o projeto em sua máquina, entre na pasta back-end e instale as dependências com o comando:

```shell
yarn
```

ou

```shell
npm
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

### 3.4 Iniciando servidor

Abra o terminal na pasta de back-end e rode o comando:

```
npm run dev
```

E pode acessar o site pelo [Link](https://desafio-fullstack-lptynxb7y-gabrielgustavodias.vercel.app)

## 4. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Clients](#1-clients)
  - [POST - /client](#11-criação-de-cliente)
  - [GET - /client](#12-listando-cliente-logado)
  - [DEL - /client/:client_id](#13-deleção-de-cliente-por-id)
- [Contacts](#2-contacts)

---

## 1. **Clients**

[ Voltar para os Endpoints ](#3-endpoints)

O objeto Client é definido como:

| Campo         | Tipo   | Descrição                        |
| ------------- | ------ | -------------------------------- |
| id            | string | Identificador único do usuário   |
| completedName | string | O nome do usuário.               |
| email         | string | O e-mail do usuário.             |
| password      | string | A senha de acesso do usuário     |
| cellphone     | string | O celular de cadastro do usuário |

### Endpoints

| Método | Rota             | Descrição                                      |
| ------ | ---------------- | ---------------------------------------------- |
| POST   | /client          | Criação de um usuário.                         |
| GET    | /client          | Lista todos os usuários                        |
| DEL    | /client/:user_id | Deleta um usuário usando seu ID como parâmetro |

---

### 1.1. **Criação de Clients**

[ Voltar para os Endpoints ](#5-endpoints)

### `/client`

### Exemplo de Request:

```
POST /client
Host: localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "completeName": "clientTest",
  "cellphone": "(11) 99999-9999",
  "email": "clientTest@gmail.com",
  "password": "12345678"
}
```

### Schema de Validação com Yup:

```javascript
  cellphone: yup
    .string()
    .matches(
      /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
      "Invalid cell phone"
    )
    .required(),
  completeName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8, "The password must have at least 8 characters")
    .required(),
  registerDate: yup.date().notRequired(),
```

OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
201 Created
```

```json
{
{
	"email": "clientTest@gmail.com",
	"cellphone": "(11) 99999-9999",
	"completeName": "clientTest",
  "id": "a0bbe5dd-94da-4bc8-a346-31ba8ebcebee"
}
}
```

### Possíveis Erros:

| Código do Erro | Descrição                 |
| -------------- | ------------------------- |
| 409 Conflict   | Email already registered. |

---

Link da documentação completa : https://doc-api-full-stack-budeadzu6-gabrielgustavodias.vercel.app
