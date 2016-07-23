var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/goodbye', function (req, res) {
  res.send('Goodbye World!');
});

app.get('/lol', function (req, res) {
	var responseText="";

	responseText += "my dog is <em>amazing</em><br> ";
	responseText += "haha ";
  res.send(responseText);
  console.log('i am loling!');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});  