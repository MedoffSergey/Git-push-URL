var express = require('express');
var app = express();
const url = require('url');


app.set("view engine","ejs");


app.get('/', function (req, res) {
  res.sendfile(__dirname + "/index.html");
});
app.get('/404', function (req, res) {
  res.sendfile(__dirname + "/404.html");
});

app.get('/:news', function (req, res) {
  console.log(req.query) ;
  res.render('news', {newsId: req.query});
});


app.listen(3000, function () {
  console.log('Сервер работает на порту : 3000!');
});
