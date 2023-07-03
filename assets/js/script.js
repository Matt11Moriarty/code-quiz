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
    a1: ['134', false],
    a2: ['2', true],
    a3: ['-1', false],
    a4: ['All of the above', false]
}
var question2 = {
    qText: 'What is the correct number of cats to own?',
    a1: ['0', false],
    a2: ['1', false],
    a3: ['2 or more', true],
    a4: ['I\'m more of a dog person', false]

}

//Event Listeners
//Click the start button to hide the start page
startButton.addEventListener('click', startQuiz);
//answers
answer1.addEventListener('click', pickAnswer);
answer2.addEventListener('click', pickAnswer);
answer3.addEventListener('click', pickAnswer);
answer4.addEventListener('click', pickAnswer);


function startQuiz () {
    startingPage.style.display = 'none';
    qAndApage.style.display = 'block';
    console.log("start game");
    questionCount = 1;
    console.log(questionCount);
    setQuestion(questionCount);
    // return questionCount;
}    

function pickAnswer (event) {
    var selectedAnswer = event.target;
    var isCorrect = selectedAnswer.dataset.correct === 'true';

    if (isCorrect) {
        console.log('correct');
    }
    else {
        console.log('wrong!');
    }

    questionCount ++;
    return setQuestion(questionCount);
}

function setQuestion (questionCount) {
    answer1.dataset.correct = 'false';
    answer2.dataset.correct = 'false';
    answer3.dataset.correct = 'false';
    answer4.dataset.correct = 'false';
    if (questionCount === 1) {
        questionVal.textContent = question1.qText;
        answer1.textContent = question1.a1[0];
        //a2 is correct so set the data to true via object
        answer2.textContent = question1.a2[0];
        answer2.dataset.correct = question1.a2[1];

        answer3.textContent = question1.a3[0];
        answer4.textContent = question1.a4[0];

        questionCount ++;
        return setQuestion;
    }
    else if (questionCount === 2) {
        questionVal.textContent = question2.qText;
        answer1.textContent = question2.a1[0];
        answer2.textContent = question2.a2[0];
        //answer 3 is correct so set the data to true via object
        answer3.textContent = question2.a3[0];
        answer3.dataset.correct = question2.a3[1];

        answer4.textContent = question2.a4[0];

        questionCount ++;
        return setQuestion;
    }

}
