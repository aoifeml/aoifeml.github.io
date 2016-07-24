// Colors the paragraph
$(function() {
  
  function rand(min, max) {
    return parseInt(Math.round(min + Math.random() * (max - min)));
  }
  
  $('#btn').on('click', function () {
	// Blasts the paragraph
    var words = $('#body').blast({
      delimiter: 'word',
      tag: 'em'
    });

	 // Gives a random color to every word
    words.each(function() {
      $(this).css('color', 'rgb(' + rand(0, 255) + ', ' + rand(0, 255) + ', ' + rand(0, 255) + ')');
    });
    
   });
});