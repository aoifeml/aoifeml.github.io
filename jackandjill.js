$(document).ready(function(){

var line = "JACK AND JILL WENT UP THE HILL TO FETCH A PAIL OF WATER";
var lineArray=line.split(" ");
var currentWordNum=0;

$("#next-word").click(function(e){
	$("#word").text(lineArray[currentWordNum]);
	console.log(currentWordNum)
	currentWordNum++;
	if(currentWordNum == lineArray.length)
	{
		currentWordNum=0;
	}
		e.preventDefault();	

});

});