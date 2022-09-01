const { Sequelize, DataTypes } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: '', //poner contraseña
	port: 5432,
	database: 'cobrando', //nombre db
	logging: false,
})

module.exports = { db, DataTypes }