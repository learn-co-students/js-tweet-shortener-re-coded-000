'use strict';

var tweetShortener = {
	wordSubstituter: function(tweet){
		var shortcuts={
			"hello": 'hi' ,
			"to": '2', 
			"two": '2' , 
			"too":"2",
			"for": '4' , 
			"four": '4',
			'be': 'b' ,
			'you': 'u' ,
			"at": '@' ,
			"and": '&'
		}
		var shortedTweet=[]	;
		var tweetWords=tweet.split(" ");
		for (var i =0; i < tweetWords.length ;  i++) {
			if(shortcuts.hasOwnProperty(tweetWords[i].toLowerCase())){
				shortedTweet.push(shortcuts[tweetWords[i].toLowerCase()]);}
				else{shortedTweet.push(tweetWords[i]);}
			}
			return shortedTweet.join(" ");

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

	


