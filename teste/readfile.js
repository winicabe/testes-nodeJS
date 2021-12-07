var http = require('http');
var fs = require('fs');

const server = http.createServer()
server.on('request', (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    console.log(req.url)
    try {
      fs.writeFileSync('teste_file.txt', 'O cara é foda patroa!');
      const data = fs.readFileSync('demofile1.html', {encoding: 'utf8', flag: 'r'});
      res.writeHead(200, {'Content-Type': 'text/html'});
      console.log(data)
      return res.end(data);
      
    }catch (err){
      console.log(err.message);
    }
  }
})
server.listen(8080)