//Starting Page
var startingPage = document.querySelector('#start-page');
var startButton = document.querySelector('#start-btn');

//Q and A page
var qAndApage   = document.querySelector('#question-container');
var questionVal = document.querySelector('#question');
var answer1     = document.querySelector('#answer1');
var answer2     = document.querySelector('#answer2');
var answer3     = document.querySelector('#answer3');
var answer4     = document.querySelector('#answer4');

var questionCount = 0;
//list of questions
var question1 = {
    qText: 'What is 1 + 1?',
    a1: '134',
    a2: '2',
    a3: '-1',
    a4: 'All of the above'    
}
var question2 = {
    qText: 'What is the correct number of cats to own?',
    a1: '0',
    a2: '1',
    a3: '2 or more',
    a4: 'I\'m more of a dog person'
}

//Click the start button to hide the start page
startButton.addEventListener('click', startQuiz)

function startQuiz () {
    startingPage.style.display = 'none';
    qAndApage.style.display = 'block';
    console.log("start game");
    questionCount = 1;
    console.log(questionCount);
    setQuestion(questionCount);
    // return questionCount;
}    

function nextQuestion () {
    
}

function setQuestion (questionCount) {
    if (questionCount === 1) {
        questionVal.textContent = question1.qText;
        answer1.textContent = question1.a1;
        answer2.textContent = question1.a2;
        answer3.textContent = question1.a3;
        answer4.textContent = question1.a4;
        questionCount = 2;
    }
    else if (questionCount === 2) {
        questionVal.textContent = question2.qText;
        answer1.textContent = question2.a1;
        answer2.textContent = question2.a2;
        answer3.textContent = question2.a3;
        answer4.textContent = question2.a4;
    }

}

function selectAnswer () {

}