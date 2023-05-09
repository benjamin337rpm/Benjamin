var http = require('http');

http.createServer(function(req, res){
    res.end("GERENCIADOR")
}).listen(8080);