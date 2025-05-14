var http = require("http");
var url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    var q = url.parse(req.url, true).query;
    var txt = q.ano + " " + q.mes;
    res.write(txt);
    res.write('<p> <a href ="/?ano=2025&mes=Maio">Test</a></p>');
    res.end();
  })
  .listen(5000);
