$(document).ready(function(){

	$("#set-price-submit").click(function(e){
		e.preventDefault();

        $.ajax({
            url: "http://localhost:3000/set_price",
            type: "GET",
            data: {
                price: $('#car-price').val()
            }
          });
    });

$("#set-mpg-submit").click(function(e){
        e.preventDefault();

        $.ajax({
            url: "http://localhost:3000/set_mpg",
            type: "GET",
            data: {
                mpg: $('#car-mpg').val()
            }
          });
    });
$("#set-color-submit").click(function(e){
        e.preventDefault();

        $.ajax({
            url: "http://localhost:3000/set_color",
            type: "GET",
            data: {
                color: $('#car-color').val()
            }
          });
    });

});