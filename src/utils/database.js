const {Sequelize} = require('sequelize')
require('dotenv').config()
const db = new Sequelize({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: "postgres",
    port: process.env.DB_PORT
})

module.exports = db