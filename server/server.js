var fs = require("fs");
var host = "local.wtml";
var port = 8000;
var express = require("express");

var app = express();
app.use(app.router); //use both root and other routes below

app.get(/^(.+)$/, function (req, res) {
    res.sendfile('webroot/' + req.params[0]);
});

app.listen(port, host);

console.log('Server started on '+host+':'+port);