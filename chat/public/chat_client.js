$(document)
        .ready(function() {
                var socket = io();
                $("#chat_start")
                        .click(function(e) {
                                e.preventDefault();
                                $.ajax({
                                        url: "get_archive",
                                        success: function(data) {
                                                for (var i = 0; i < data.length; i++) {
                                                        var msg = data[i];
                                                        if (msg.username == $("#chat_name")
                                                                .val()) {
                                                                $("#chat_log ul")
                                                                        .append(
                                                                                "<li class = 'me_line'><b>" +
                                                                                msg.username +
                                                                                "</b>: " + msg.text +
                                                                                "</li>");
                                                        }
                                                        else {
                                                                $("#chat_log ul")
                                                                        .append(
                                                                                "<li class = 'them_line'><b>" +
                                                                                msg.username +
                                                                                "</b>: " + msg.text +
                                                                                "</li>");
                                                        }
                                                }
                                        }
                                });
                        });
                $("#send")
                        .click(function(e) {
                                e.preventDefault();
                                var messageObject = {};
                                messageObject.username = $("#chat_name")
                                        .val();
                                messageObject.text = "";
                                var originalMessage = $("#chat_input")
                                        .val();
                                var originalArray = originalMessage.split(" ");
                                var punctuated = originalArray[originalArray.length - 1];
                                var originalWord = punctuated.replace(/[.,\/#@!?$%-+\|^&\*"<>;:{}=\-_`~()]/g, "");
                                console.log(originalWord);
                                $.ajax({
                                        url: "http://words.bighugelabs.com/api/2/862e5edb8e65162a9486d6adacfa8bb9/" +
                                                originalWord + "/json",
                                        error: keepOldWord,
                                        success: inputNewWord
                                });

                                function keepOldWord() {
                                        messageObject.text = originalMessage + ' (<i>i do not understand</i> "' +
                                                punctuated + '")';
                                        sendItIn();
                                }

                                function inputNewWord(data) {
                                        var obj = JSON.parse(data);
                                        var partOfSpeech = "";
                                        if (obj.noun !== undefined) {
                                                partOfSpeech = obj.noun;
                                        }
                                        else if (obj.adjective !== undefined) {
                                                partOfSpeech = obj.adjective;
                                        }
                                        else if (obj.verb !== undefined) {
                                                partOfSpeech = obj.verb;
                                        }
                                        else if (obj.adverb !== undefined) {
                                                partOfSpeech = obj.adverb;
                                        }
                                        else {
                                                keepOldWord();
                                        }
                                        var synonymArray = "";
                                        if (partOfSpeech.syn !== undefined) {
                                                synonymArray = partOfSpeech.syn;
                                        }
                                        else if (partOfSpeech.sim !== undefined) {
                                                synonymArray = partOfSpeech.sim;
                                        }
                                        else {
                                                keepOldWord();
                                        }
                                        console.log(synonymArray);
                                        var newWord = synonymArray[Math.floor(Math.random() * synonymArray.length)];
                                        console.log(newWord);
                                        messageObject.text = originalMessage.split(" " + originalWord)
                                                .join('  ' + newWord + '  ');
                                        sendItIn();
                                }

                                function sendItIn() {
                                        socket.emit("chat message", messageObject);
                                        $("#chat_input")
                                                .val("");
                                        return false;
                                }
                        });
                socket.on("chat message", function(msg) {
                        if (msg.username == $("#chat_name")
                                .val()) {
                                $("#chat_log ul")
                                        .append("<li class = 'me_line'><b>" + msg.username + "</b>: " + msg.text +
                                                "</li>");
                        }
                        else {
                                $("#chat_log ul")
                                        .append("<li class = 'them_line'><b>" + msg.username + "</b>: " + msg.text +
                                                "</li>");
                        }
                });
        });