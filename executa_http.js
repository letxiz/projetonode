var http = require("http");

http
  .createServer(function (req, res) {
    res.write("Servidor Ativo");
    res.end();
  })
  .listen(5000);
