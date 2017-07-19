var fs = require('fs');

var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Node.js\n');
});

server.listen(8888, '127.0.0.1', function() {
    console.log('Server running at 8888 port');
});

