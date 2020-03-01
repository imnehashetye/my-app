const mysql = require('mysql');
const config = require('./index');

const con = mysql.createConnection(config.DB_CREDENTIALS);

module.exports = con;