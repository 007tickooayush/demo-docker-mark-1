const mysql = require('mysql');

require('dotenv').config();

// const database = mysql.createConnection({
//     host: 'localhost',
//     user:'root',
//     password:'root',
//     database:'emails_db',
//     port:'3308'
// });
const database = mysql.createConnection({
    host:process.env.HOST,
    port:process.env.PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB,
});
module.exports = database;