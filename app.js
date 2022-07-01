const express = require('express')

var app = express();
app.use(express.static('src'));
app.use(express.static('src/pages'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
});

app.get('/endereco', (req, res) => {
    res.sendFile(__dirname + '/src/pages/endereco.html')
})

app.listen(3030);