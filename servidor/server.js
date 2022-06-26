const http = require('http');

http.createServer((req, res)=> {
    res.end('Rodando!');
}).listen(3030);