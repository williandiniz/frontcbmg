const http = require('http');

const host = 'localhost';
const port = 3000;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('<h1>Olá, Mundo!</h1><p>Seu servidor Node.js está funcionando!</p>');
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Servidor rodando em http://${host}:${port}`);
});
