var Magic8Ball = (function () {

    const ANSWERS = [
        "It is certain",
        "Reply hazy try again",
        "cannot predict now",
        "yes",
        "Outlook not so good"
    ];

    const BALL_IMG = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png"
    const BALL_ANSWER_IMG = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png"

    const $8BALL = $("#8ball");
    const $ANSWER = $("#answer");
    const $QUESTION_BTN = $("#questionButton");

    const FADE_TIME = 4000;

    function resetBall() {
        $ANSWER.hide();
        $8BALL.attr("src", BALL_IMG);
    }

    function shakeBall() {
        $8BALL.effect("shake");
    }

    function fadeInAnswer(answer) {
        $8BALL.attr("src", BALL_ANSWER_IMG);
        $ANSWER.text(answer).fadeIn(FADE_TIME);
    }

    function getRandomAnswer() {
        return ANSWERS[Math.floor(Math.random() * ANSWERS.length)];
    }

    function showAnswer(answer) {
        fadeInAnswer(getRandomAnswer());
    }

    function askQuestion() {
        resetBall();
        prompt("ASK A YES/NO QUESTION!");
        shakeBall();
        showAnswer();
    }

    function init() {
        resetBall();
        $QUESTION_BTN.on('click', askQuestion);
    }

    return {
        init: init
    }

})();

Magic8Ball.init();