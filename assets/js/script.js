//Starting Page
var startingPage = document.querySelector('#start-page');
var startButton = document.querySelector('#start-btn');

//Q and A page
var qAndApage = document.querySelector('#question-container');
var questionVal = document.querySelector('#question');
var answer1 = document.querySelector('#answer1');
var answer2 = document.querySelector('#answer2');
var answer3 = document.querySelector('#answer3');
var answer4 = document.querySelector('#answer4');

//timer
var timerText = document.querySelector('#timer')

//iterations
var questionCount = 0;
var incorrectAnswers = 0;
var timeLeft = 75;
var timeInterval;

//list of questions
var questions = [
    {
        qText: 'What is 1 + 1?',
        a1: ['134', false],
        a2: ['2', true],
        a3: ['-1', false],
        a4: ['All of the above', false]
    }, {
        qText: 'What is the correct number of cats to own?',
        a1: ['0', false],
        a2: ['1', false],
        a3: ['2 or more', true],
        a4: ['I\'m more of a dog person', false]

    }]


//Event Listeners
//Click the start button to hide the start page
startButton.addEventListener('click', startQuiz);
//answers
answer1.addEventListener('click', pickAnswer);
answer2.addEventListener('click', pickAnswer);
answer3.addEventListener('click', pickAnswer);
answer4.addEventListener('click', pickAnswer);


function startQuiz() {
    startingPage.style.display = 'none';
    qAndApage.style.display = 'block';
    console.log("start game");
    //questionCount = 1;
    countDown();
    console.log(questionCount);
    setQuestion();
    // return questionCount;
}

//timer functoin
function countDown() {

    timerText.textContent = `Time Remaining: ${timeLeft}`;
    timeInterval = setInterval(function () {
        console.log(timeLeft);
        if (timeLeft >= 0) {
            timeLeft--;
            timerText.textContent = `Time Remaining: ${timeLeft}`;
        }
        else {
            console.log(timeLeft);
            endQuiz();
        }
    }, 1000)
}

function endQuiz() {
    clearInterval(timeInterval);
    qAndApage.style.display = 'none';
}

function pickAnswer(event) {
    var selectedAnswer = event.target;
    var isCorrect;
    if (selectedAnswer.dataset.correct === 'true') {
        isCorrect = true;
    }
    else {
        isCorrect = false;
    }

    if (isCorrect) {
        console.log('correct');
    }
    //working on this now 
    else {
        console.log('wrong!');
        incorrectAnswers++;
        timeLeft = timeLeft - 15;
    }

    // questionCount++;
    return setQuestion();
}

function setQuestion() {
    // answer1.dataset.correct = 'false';
    // answer2.dataset.correct = 'false';
    // answer3.dataset.correct = 'false';
    // answer4.dataset.correct = 'false';

    if (questionCount >= questions.length) {
        endQuiz();
        return;
    }

    var answerElements = [answer1, answer2, answer3, answer4];

    var currentQuestion = questions[questionCount];
    //if (questionCount === 1) {
    questionVal.textContent = currentQuestion.qText;

    for (let i = 0; i < answerElements.length; i++) {
        const el = answerElements[i];
        var currentAnswer = currentQuestion[`a${i + 1}`];

        var [content, correct] = currentAnswer;
        el.textContent = content;
        el.dataset.correct = correct;

    }


    questionCount++;
    return setQuestion;
    // }
    // else if (questionCount === 2) {
    //     questionVal.textContent = question2.qText;
    //     answer1.textContent = question2.a1[0];
    //     answer2.textContent = question2.a2[0];
    //     //answer 3 is correct so set the data to true via object
    //     answer3.textContent = question2.a3[0];
    //     answer3.dataset.correct = question2.a3[1];

    //     answer4.textContent = question2.a4[0];

    //     questionCount++;
    //     return setQuestion;
    // }
}
