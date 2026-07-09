# meu-mercado

## Status

Academic backend/API project.

## Context

This project was created during university study as an early backend API for a market-related application. The package description indicates that it was intended to receive requests from a React Native client.

## Objective

The API models a small marketplace domain with markets, products, people and items. It exposes Express routes that interact with a MySQL database through SQL queries.

## Technologies

- Node.js
- Express
- MySQL / mysql2
- body-parser
- morgan
- nodemon
- SQL scripts for database creation and sample insert data

## Main Routes

- `GET /products`: lists product names.
- `POST /products`: creates a product.
- `GET /markets`: lists market names.
- `POST /markets`: creates a market.
- `POST /persons`: creates a person associated with a market.
- `GET /items`: lists items.
- `POST /items`: creates an item.
- `PATCH /items`: updates an item.
- `DELETE /items`: deletes an item.

## How to Run

This repository was preserved as a historical learning project and may require adjustments before local execution.

A likely local workflow is:

```sh
npm install
```

Create and seed the database using the scripts in `dtb/`:

```sh
# Review the SQL first, then run it in your MySQL environment.
# dtb/creates.sql
# dtb/inserts.sql
```

Configure the database connection through environment variables:

```sh
MYSQL_USER=<user>
MYSQL_PASSWORD=<password>
MYSQL_DATABASE=meu_mercado
MYSQL_HOST=<host>
MYSQL_PORT=<port>
```

Start the API:

```sh
npm start
```

By default, the server listens on port `3000` unless `PORT` is defined.

## What This Project Demonstrates

- Building REST-style routes with Express.
- Connecting a Node.js API to MySQL.
- Organizing routes by domain resource.
- Basic CRUD operations and SQL usage.
- Early backend work connected to a mobile application idea.

## Known Limitations

- This project does not represent the author's current engineering standards.
- There are no automated tests or API documentation files.
- Input validation, authentication and error handling are limited.
- The SQL schema and route expectations may need alignment before execution, especially around market password fields.
- Case-sensitive environments may require checking the route file name used for `items`.

## Portfolio Relation

This repository is best understood as a university backend/API project and early Node.js practice. It is kept public for historical context and portfolio continuity, not as an active production service.
