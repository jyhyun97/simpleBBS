var express = require('express');
var app = express();
var cors = require('cors');
var router = require('./route/index');

app.use(cors());
app.use('/', router);
app.listen(3000, function () {
  console.log('start! express server on port 3000');
});
