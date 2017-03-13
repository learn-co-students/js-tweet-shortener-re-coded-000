'use strict';


var tweetShortener = {

  wordSubstituter: function(tweet){
    var substitutes={
	"hello": 'hi' ,
	"to": '2',  "two": '2' , "too":"2",
	"for": '4' , "four": '4',
	'be': 'b' ,
	'you': 'u' ,
	"at": '@' ,
	"and": '&'
}
  	var refactored_tweet=[]	;
  	var tweetArr=tweet.split(" ");
    for (var i =0; i < tweetArr.length ;  i++) {
    	if(substitutes.hasOwnProperty(tweetArr[i].toLowerCase())){refactored_tweet.push(substitutes[tweetArr[i].toLowerCase()]);}
    	else{refactored_tweet.push(tweetArr[i]);}
    }
    return refactored_tweet.join(" ");
  },
  bulkShortener: function(tweets){

  	var filtered_tweets=[]	;
  	for (var i =0; i < tweets.length ;  i++){
      filtered_tweets.push(this.wordSubstituter(tweets[i]));
  }
  return filtered_tweets;
  },
  selectiveShortener: function(tweet){
         if (tweet.length >140){return this.wordSubstituter(tweet);}
  	     else {return tweet ;}
  },
  shortenedTruncator: function(tweet){
    var filtered=this.selectiveShortener(tweet);
    if(filtered.length >140){filtered=filtered.slice(0,137)+"...";}
    return filtered ;
  }
};
