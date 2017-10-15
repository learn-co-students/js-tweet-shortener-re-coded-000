'use strict';
var tweetShortener = {
wordSubstituter: function(tweet){
 var substitution = {
  "hello": 'hi',
  "to": '2', "two": '2', "too": '2',
  "for": '4', "four": '4',
  "at": '@',
  "and": '&'}
 var tweetArray = tweet.split("");
 for (var i =0; i < tweetArray.length; i++){
  for (var sub in substitution){
   if(sub === tweetArray[i].toLowerCase()){
    tweetArray[i] = substitution[sub];
  }
}
}
}
}










