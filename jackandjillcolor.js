$(document).ready(function(){
	$("#next-color").click(function(){
		
		var randomRed = generateRandomColor();
		var randomGreen = generateRandomColor();
		var randomBlue = generateRandomColor();

		var randomColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
		$("#rhyme").css({"background-color":randomColor});
	});
});

function generateRandomColor()
{
	return Math.round(Math.random() * 255);
}
