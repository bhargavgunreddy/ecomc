
var express = require('express');

var app = express();

var CONST_PORT = 5000;


app.use(express.static('/src'));

app.listen(CONST_PORT, function(err){
    console.log("Listening at port ::", CONST_PORT);
});

app.get('/', function(req, res){
    res.sendFile('index.html', {"root": __dirname});
});
