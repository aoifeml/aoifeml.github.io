$(document).ready(function(){
            
            $("#api_search").click(function(){
                $.ajax({
                    url: "https://api.spotify.com/v1/search",
                    data:{
                        q: $("#api_field").val() + ":" + $("#api_term").val(),
                        type: $("#api_return").val(),
                        limit: "20"
                    },
                    success: ajaxHandler
                });
            });
            

        });

        function ajaxHandler(data)
        {
            console.log(data);

            var typeString = $("#api_return").val() + "s";

            $("#api_result").text("");

            var results = data[typeString].items; //Array of albums
            for(var i = 0; i < results.length; i++)
            {
                $("#api_result").append(results[i].name + "\n");
            }
        }