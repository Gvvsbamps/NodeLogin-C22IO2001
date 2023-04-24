require('dotenv').config()
const { Client } = require('pg')
const dbName = process.env.DB_NAME;
const dbUserName = process.env.DB_USERNAME;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const dbPort  = process.env.DB_PORt;
const client = new Client({
	user: dbUserName,
	host: dbHost,
	database: dbName,
	password: dbPassword,
	port: dbPort,
});
module.exports = client;
