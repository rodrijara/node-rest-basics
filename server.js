const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

// a listener executes whenever we make a request
const server = http.createServer(app);

// start the server
server.listen(port);
