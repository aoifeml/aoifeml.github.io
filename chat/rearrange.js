function rearrange(word) {
	var words = [];
  
  if (!word || typeof word !== 'string')
  	return 'Invalid input!';

	function helper(prefix, str) {
		if (str.length === 1) {
			if (words.indexOf(prefix + str) < 0) {
				words.push(prefix + str);
			}
		} else {
			str.split('').forEach(function(letter, index) {
				var substr = str.slice(0, index) + str.slice(index + 1);
				helper(prefix + letter, substr);
			});
		}
	}

	helper('', word);
	return words;
}

var words = rearrange('goal');
console.log(words);