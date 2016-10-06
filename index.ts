import * as http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

let reqs = 0;

const server = http.createServer((req, res) => {
  let reqid = reqs++;
  console.log('received ' + reqid);
  setTimeout(() => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
    console.log('sent ' + reqid);
  }, 2000);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});