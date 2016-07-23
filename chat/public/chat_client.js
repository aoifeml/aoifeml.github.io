$(document).ready(function(){
	var socket= io("http://localhost:3000");
$("#chat_start").click(function(){
	console.log($("#chat-name").val());

	if($("#chat-name").val() == "")
    {
        alert("who are you?");
        return false;
    }
    else{

	$.ajax({
	url:"http://localhost:3000/get_archive",
	success: function(data){
		$("#chat-log ul li").remove();
		for(var i=0; i<data.length; i++){
			var msg= data[i];
         if(msg.username==$("#chat-name").val()){
		$("#chat-log ul").append("<li class='archive'><b>"+ msg.username + ":</b>"+ msg.text + "</li>");
    }
        else{
    	$("#chat-log ul").append("<li class='archive1'><b>"+ msg.username + ":</b>"+ msg.text + "</li>");
    }
    }
        if (data.length>1) 
    	{$("#chat-log").append("<div>archive</div>");}

	}

});
}

});




$("#chat-form").submit(function(){

    var messageObject ={};
    messageObject.username = $("#chat-name").val();
    messageObject.text = $("#chat-input").val();
	socket.emit("chat message", messageObject);
	$("#chat-input").val("");
    return false;

});





socket.on("chat message", function(msg){
	if(msg.username==$("#chat-name").val()){
		$("#chat-log ul").append("<li class='me'><b>"+ msg.username + ":</b>"+ msg.text + "</li>");
    }else{
    	$("#chat-log ul").append("<li class='you'><b>"+ msg.username + ":</b>"+ msg.text + "</li>");
    }
});




});