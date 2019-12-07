# 📚Books Library

A Collection Of Books API Using NodeJS MySQL ExpressJS

<p align="center">
  <a href="https://nodejs.org/">
    <img title="Restful API" height='200' src="https://raw.githubusercontent.com/auliasandie/libraryapp/img.jpg">
  </a>
</p>
<p align="center">
  <a href="http://opensource.org/licenses/MIT">
    <img title="MIT license" src="http://img.shields.io/badge/license-MIT-brightgreen.svg">
  </a>
    <a href="#">
    <img alt="David" src="https://img.shields.io/david/dev/auliasandie/libraryapp">
  </a>
  <a href="#">
    <img title="Open Source Love" src="https://badges.frapsoft.com/os/v1/open-source.svg?v=102">
  </a>
  <a href="https://github.com/auliasandie?tab=followers">
    <img title="Followers" src="https://img.shields.io/github/followers/auliasandie?style=social">
  </a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>
  <a href="#">
    <img title="Repo Size" src="https://img.shields.io/github/repo-size/auliasandie/libraryapp">
  </a>

</p>

## Table Of Contents

- [Books Library Api](#books-library-api)
  - [Table Of Content](#table-of-content)
  - [Build Setup](#build-setup)
  - [Stacks](#stacks)
  - [Dependencies](#dependencies)
  - [Aplication Structure](#aplication-Structure)
  - [API Docs](#api-docs)
    - [Books](#Books)
    - [Genre](#genre)

## Build Setup

1. Clone repository
   `$ git clone https://github.com/auliasandie/libraryapp`

2. Install depedencies

```bash
# with npm
$ npm install

# or with yarn
$ yarn install
```

3. Setup your environment variable in `.env` files (if not exists, create your own).

```env
DB_HOST      = 'localhost'
DB_USER      = 'root'
DB_PASSWORD  = 'xxx'
DB_DATABASE  = 'databasename'
```

4. Start API server

```bash
$ npm run server
```

## Stacks

- NodeJS
- MySQL
- ExpressJS

## Dependencies

- [expressjs](https://www.npmjs.com/package/express) - The server for handling and routing HTTP requests
- [morgan](https://www.npmjs.com/package/morgan) - a HTTP request logger middleware for Node.js. It simplifies the process of logging requests to your application
- [dotenv](https://www.npmjs.com/package/dotenv) - is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- [mysql](https://www.npmjs.com/package/mysql) - NodeJs driver for MySQL
- [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware
- [nodemon](https://www.npmjs.com/package/nodemon) - is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Aplication Structure

- `app.js` - Entry point of our aplication
- `src/Config` - This folder contain configuration files of our app, such as mysql connection
- `src/Models` - This folder containt files that define query of MysQL
- `src/Routes` - Route of our app going here
- `src/Helpers` - This folder contain file that help you simplify your code such as define the error handling
- `src/Controllers` - This folder contain configuration files that links Models to Route

---

## API Docs

### **Books**

| Method | Endpoint                     | Description      | Request Param    | Request Body                                                                                              | Request Query                                                    |
| ------ | ---------------------------- | ---------------- | ---------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| GET    | /api/library                 | Get Books        | -                | -                                                                                                         | `title`:STRING `author`:STRING `genre`: INTEGER `status`:INTEGER |
| POST   | /api/library                 | Add New Books    | -                | `title`:STRING (Required) `author`:STRING (Required)`status`:STRING (Required) `genre`:STRING (Required)  | -                                                                |
| PUT    | api/library/edit/:id_book   | Edit Books By ID | `id`: INT (UUID) | `title`:STRING (Required) `author`:STRING (Required) `status`:STRING (Required) `genre`:STRING (Required) | -                                                                |
| DELETE | api/library/delete/:id_book | Delete Books     | -                | `id`:INT                                                                                                  | -                                                                |

### **Genre**

| Method | Endpoint           | Description    | Request Param | Request Body              | Request Query |
| ------ | ------------------ | -------------- | ------------- | ------------------------- | ------------- |
| GET    | /api/library/genre/:id_genre | Get All Genres | -             | -                         | -             |
| POST   | /api/genre         | Add New Genre  | -             | `genre`:STRING (Required) | -             |

---

Copyright © 2019 by Aulia Sandie


# libraryapp
