var num = require("numeral");
var express = require("express");
var app = express();

var carPrice = 12000;

app.get("/", function(req, res){
    console.log("Returning current price: " + num(carPrice).format('0,0'));
    res.send("<div style='text-align:center;font-size:20px;margin-top:50px;'>The current car price is<br>" + num(carPrice).format('0,0')+"</div>");
});

app.get("/add", function(req, res){
    carPrice += 250;
    confirmCarPriceChange(res);
});

app.get("/subtract", function(req, res){
    carPrice -= 250;
    confirmCarPriceChange(res);
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});


function confirmCarPriceChange(res)
{
  console.log("Adjusted car price");
  res.send("<div style='text-align:center;font-size:20px;margin-top:50px;'>Thank you. See current price <a href='/'>here.</a></div>");
}