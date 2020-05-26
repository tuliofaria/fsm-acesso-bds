const mysql = require('mysql2/promise')

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'cat-products'
})
