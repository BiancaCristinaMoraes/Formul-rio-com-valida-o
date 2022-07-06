const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/Formulário.js'));
});

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/form.css'));
});
app.use('/', router);
app.listen(process.env.port || 3000);
console.log("rodando");