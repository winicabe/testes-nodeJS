const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    //criando aquivo com fs.
    fs.appendFile('created.txt', 'Arquivo Criado!', function(err){
        if (err) throw err;
        console.log("saved!")
    })
    //lendo arquivo html com fs.readFile
    fs.readFile('demofile.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080)