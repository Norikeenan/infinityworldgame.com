require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.MYSQLHOST, 
    user: process.env.MYSQLUSER, 
    password: process.env.MYSQLPASSWORD, 
    database: process.env.MYSQLDATABASE, 
    port: process.env.MYSQLPORT
});

const sql = `
   CREATE TABLE IF NOT EXISTS usuarios (
      id INT AUTO_INCREMENT PRIMARY KEY, 
      nickname VARCHAR(50) NOT NULL UNIQUE,
      ciado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;

console.log("Conectando ao Raliway");

connection.query(sql, function (err, results) {
    if(err) {
        console.error("❌ Deu erro:", err.message);
    } else {
        console.log("✅ Sucesso! A tabela 'usuarios' foi criada (ou já existia).");
    }

    connection.end();
});