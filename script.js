var startScreen = document.querySelector(".container-sm")
var startButton = document.querySelector(".start-btn")
var questionsEl = document.getElementById("question-card")
var questions = document.querySelector("questions")
var timerEl = document.querySelector("timer")
var nextButton = document.getElementById("next-btn")
var userName = document.getElementById("username")
var answerBtn1 = document.getElementById("btn1")
var answerBtn2 = document.getElementById("btn2")
var answerBtn3 = document.getElementById("btn3")
var answerBtn4 = document.getElementById("btn4")
var highScore = document.getElementById("highscore")
var answerButtons = document.getElementById("answerbuttons")
var scoreBoolean = false;
var time = 60;
var questionNumber = 0;
var availableQuestions = [];
var questionAnswers = [
    {
        question: "Commonly used data types do not include:",
        choices: ["String", "Booleans", "Alerts", "Numbers"]
        
    },
    {
        question: "The condition in an if / else statement inclosed within:",
        choices: ["Quotes", "Curly Brackets",]
    }

]






startButton.addEventListener("click", function (event){
    startScreen.style.display = "none";
    questionsEl.style.display = "block";
    userName.style.display = "none";
    timerEl();
    getNewQuestion();

})
function timer() {
    var timer = setInterval(function () {
        if (time === 0) {
            clearInterval(timer)
            endGame()
        }
        time--;
        timerEl.innerText = time
    ), 1000
}

() {
var totalQuestions = questionsAnswers.length;
console.log(questionNumber < totalQuestions -1);
console.log()


function getNewQuestion() {
    questions.textContent = questionsAnswers[questionNumber].question;
    answerBtn1.textContent = questionsAnswers[questionNumber].choices[0];
    answerBtn2.textContent = questionAnswers[questionNumber].choices[1];
    answerBtn3.textContent = questionsAnswers[questionNumber].choices[2];
    answerBtn4.textContent = questionsAnswers[questionNumber].choices[3];
}