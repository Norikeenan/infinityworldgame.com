const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createConnection({
    // O comando "process.env.VARIAVEL" tenta pegar o valor da nuvem.
    // O "||" significa "OU". Se não achar na nuvem, usa o valor fixo (seu PC).
    host: process.env.MYSQLHOST || 'localhost',
    user: process.env.MYSQLUSER || 'root',
    password: process.env.MYSQLPASSWORD || 'sua_senha_local',
    database: process.env.MYSQLDATABASE || 'financas_pessoais',
    port: process.env.MYSQLPORT || 3306
});

// Define a porta (3000 é o padrãozão do Node)
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando! Acesse: http://localhost:${PORT}`);
});