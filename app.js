const express = require('express')

var app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
})

app.listen(3030);