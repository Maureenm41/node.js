const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<h1>Hello World</h1>');
  });

  const port = 3000;
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });

console.log('Hello World!')

const fs = require('fs');

const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    fs.readFile('./views/index.html', 'utf-8', (err, data) => {
        if (err) throw err
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(data);
    }) 
  
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

const url = require('url');

const query = url.parse(req.url, true).query;