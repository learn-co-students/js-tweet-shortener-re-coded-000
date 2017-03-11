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
		return tweets.map(function(tweet){
			return tweetShortener.wordSubstituter(tweet)
		})
	},
	selectiveShortener: function(tweet){
		if(tweet.length<=140)
			return tweet;
		return tweet.slice(0,137)+"...";
	},
	shortenedTruncator: function(tweet){
		if(tweet.length<=140)
			return tweet;
		return tweetShortener.selectiveShortener(tweetShortener.wordSubstituter(tweet))
	}
};
