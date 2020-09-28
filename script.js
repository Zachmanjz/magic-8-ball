
$(document).ready(function(){
 
var magic8Ball = {};
magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];
 
// define the method
magic8Ball.askQuestion = function(question) {
 
     // create a random number
     var randomNumber = Math.random();
 
     // make the random number between 0 and the number of items in your array
     var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
 
     // round down the number to be a whole number
     var randomIndex = Math.floor(randomNumberForListOfAnswers);
 
     // use that number to index a random number from the answers array
     var answer = this.listOfAnswers[randomIndex];
 
     console.log(question);
     console.log(answer);
};
 
 
});



