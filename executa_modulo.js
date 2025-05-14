var http = require("http");
var data = require("./meuprimeiromodulo");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("Data e hora do servidor:" + data.minhaDataHora());
    res.end();
  })
  .listen(5000);
