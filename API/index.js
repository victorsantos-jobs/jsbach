const express = require('express');
const app = express();
const data = require('./data.json'); // Importa o arquivo JSON

app.get('/', function(req, res) {
    res.json(data); // Envia o JSON importado na resposta
});

app.listen(3000, function() {
    console.log('O app está rodando na porta 3000');
});
