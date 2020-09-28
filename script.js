$(document).ready(function (){
     var magic8ball = {};
      $("#answer").hide();
     magic8ball.listOfAnswers = ["It is certain", "Reply hazy try again", "cannot predict now", "yes", "Outlook not so good"];

     magic8ball.askQuestion = function(question){
                    $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
          $("#answer").fadeIn(4000);
               var randomNumber = Math.random() * this.listOfAnswers.length;

               var randomAnswerIndex = Math.floor(randomNumber);

          var randomAnswer = this.listOfAnswers[randomAnswerIndex];
          $("#answer").text(randomAnswer);

          console.log("Question: " + question + "… " + "Answer: " + randomAnswer);
     };

     var onClick = function(){
           $("#answer").hide();
          $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

          setTimeout(function(){
               var question = prompt("ASK A YES/NO QUESTION!");
          $("#8ball").effect("shake");
          magic8ball.askQuestion(question);
          },500);

     };

     $("#questionButton").click(onClick);
});