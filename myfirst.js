var http = require('http');
var date = require('./myfirstmodule');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('The time on your time zone is: ' + date.myDateTime());
}).listen(8080)