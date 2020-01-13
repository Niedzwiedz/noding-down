const http = require("http"); // adds http support
const hostname = '127.0.0.1'; // set host
const port = 3000; // set port

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end({ 'body': 'Hello World' });
})

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
})
