var http = require('http');
express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);
app.get('/', function (req, res) {
    res.send('<html><body><h1>Hello World</h1></body></html>');
  });
   
  console.log('Server running on port 3000.');