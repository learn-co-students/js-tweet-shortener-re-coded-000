'use strict';
var tweetShortener = {
	wordSubstituter: function(tweet){
		var dictionary={
			"hello":'hi',
			"to":   '2',
			"two":  '2', 
			"too":  '2',
			"for":  '4',
			"four": '4',
			'be':   'b',
			'you':  'u',
			"at":   "@",
			"and" : "&"
		}
		var words=tweet.split(' ')
		var res=[]
		words.forEach(function(word){
			if(dictionary.hasOwnProperty(word.toLowerCase()))
				res.push(dictionary[word.toLowerCase()])
			else
				res.push(word)
		})
		return res.join(' ');
	},

	bulkShortener: function(tweets){
		var bulk = []
		tweets.forEach(function(tweet){
			bulk.push(tweetShortener.wordSubstituter(tweet));
		});

		return bulk;

	},


	selectiveShortener: function(tweet) {
		if (tweet.length >= 140) {
			return this.wordSubstituter(tweet);
		}

		return tweet;
	},

	shortenedTruncator: function(tweet) {
		var result = this.selectiveShortener(tweet);

		if (result.length >= 140) {
			return result.slice(0, 137) + "...";
		}

		return result;
	}
}


