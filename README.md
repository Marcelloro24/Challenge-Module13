# E-Commerce Back End

## Description
A back-end application for an e-commerce site built with Express.js, Sequelize, and PostgreSQL. This application provides a RESTful API that allows users to perform CRUD operations on categories, products, and tags.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [License](#license)

## Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with the following variables:
   ```
   DB_NAME='ecommerce_db'
   DB_USER='your_postgres_username'
   DB_PASSWORD='your_postgres_password'
   ```
4. Create the database using PostgreSQL shell:
   ```
   psql -U postgres
   CREATE DATABASE ecommerce_db;
   ```
5. Run schema: `npm run schema`
6. Seed the database: `npm run seed`
7. Start the server: `npm start`

## Usage
Use an API client like Insomnia to test the following endpoints:

Categories:
- GET /api/categories
- GET /api/categories/:id
- POST /api/categories
- PUT /api/categories/:id
- DELETE /api/categories/:id

Products:
- GET /api/products
- GET /api/products/:id
- POST /api/products
- PUT /api/products/:id
- DELETE /api/products/:id

Tags:
- GET /api/tags
- GET /api/tags/:id
- POST /api/tags
- PUT /api/tags/:id
- DELETE /api/tags/:id

## Features
- RESTful API endpoints
- PostgreSQL database integration
- Sequelize ORM
- Environment variable configuration
- Data validation
- Association between models

## Technologies Used
- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- dotenv
- nodemon (dev dependency)

## Credits
Developed by Marcello Romero

## License
This project is licensed under the MIT License.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions
For any questions or concerns, please open an issue in the GitHub repository or contact the developer directly at mra24@me.com

GitHub: [marcelloro24](https://github.com/marcelloro24)