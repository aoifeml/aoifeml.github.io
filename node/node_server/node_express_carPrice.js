var express = require("express");
var app = express();

var carPrice;
var carMpg;
var carColor;


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/set_price", function(req, res){
    console.log(req.query.price);
    carPrice = req.query.price;
});

app.get("/retrieve_price", function(req, res){
    res.send("The car price is: " + carPrice);
});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/set_mpg", function(req, res){
    console.log(req.query.mpg);
    carMpg = req.query.mpg;
});

app.get("/retrieve_mpg", function(req, res){
    res.send("The car mpg is: " + carMpg);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/set_color", function(req, res){
    console.log(req.query.mpg);
    carColor = req.query.mpg;
});

app.get("/retrieve_color", function(req, res){
    res.send("The car color is: " + carColor);
});


app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});