
const fs = require('fs');
const http = require('http');





//Create the server

var server = http.createServer(require('./app'));

const host = 'localhost';
const port = 3000;

server.listen({
  port,
  host
}, () => {
  console.log(`server running at http://${host}:${port}`)
});
