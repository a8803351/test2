var http = require('http');

var handleRequest = function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    response.end(request.url);
};

var server = http.createServer(handleRequest);

server.listen(8888, '127.0.0.1', function() {
    console.log('server runing 888 port');
});