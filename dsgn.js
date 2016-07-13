/*
console.log("hello, world!");
var skyColor="blue";
console.log("the sky is " + skyColor + " today.");
var temp = 50;
var hum = 1;
console.log("the temperature is " + temp + ".");
console.log("the humidity is " + hum + ".");
var realTemp = temp * hum;
console.log("the real temperature is " + realTemp + ".");
var umbrella;
var raining = true;
if(raining==true)
{
	umbrella = true;

}else{
	umbrella=false;
}
console.log("it is " + umbrella + " that you should bring an umbrella.");
var scarfOn;
var realTemp=75;
if (realTemp < 66) 
	{
		scarfOn=true;

	} else {
		scarfOn=false;
	}
	console.log("it is " + scarfOn + " that you should bring a scarf, Zach.")

	var step;
	for(step = 0; step <= 5; step++)
	{
		console.log("step " + step + "!");
	}
	var stomp=0;
	while(stomp <= 5)
	{
		console.log("stomp is " + stomp + "!");
		stomp++;
	}

	var myNumbers = [0,1,2,3,4,5,6,7,8,9];
var myRainbow = ["red", "orange", "yellow", "green", "blue", "violet"];
var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


for (var n = 1; n < myNumbers.length; n+=2) {
	
	console.log (myNumbers[n]);
}

for (var n=0; n < myNumbers.length; n++) {
	 console.log (myNumbers[n]+101);
}

for (var n=0; n< myRainbow.length; n+=2)
{
	console.log (myRainbow[n]);
}
*/

var car = new Object;

car.price = 12000;
car.color = "blue";
car.size = "sedan";
car.mpg = 34;
car.convertible = false;

console.log(car.price * 1.034);
console.log("the car is " + car.color);


var A = 1;
var B = 2;
var C = 3;
var D = 4;


function doTheThing(firstN, secondN)
{
	console.log("we are doing the thing with " + firstN + " and " +secondN);
	console.log(firstN + secondN);
	console.log(firstN - secondN);
	console.log(firstN * secondN);
	console.log(firstN / secondN);

}

doTheThing(A, B);
doTheThing(C, D);

function whichGreater (firstN, secondN)
{
	var x;
	if(firstN>secondN)

{
x= firstN;
}else{
	x=secondN;
}
return x;
}
var theGreater = whichGreater(A,B);
console.log("The greater number is " + theGreater);

var firstCarOption = researchACar();
var secondCarOption
