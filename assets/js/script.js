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
        qText: 'Does Javascript work on Mac?',
        a1: ['Sometimes', false],
        a2: ['Yes', true],
        a3: ['No', false],
        a4: ['Not since 2018', false]
    }, {
        qText: 'What is the difference between Java and JavaScript',
        a1: ['There is no difference', false],
        a2: ['They are two halves to the same whole', false],
        a3: ['Lot\'s of stuff', true],
        a4: ['Java is even real', false]

    },     {
        qText: 'What does DOM stand for?',
        a1: ['Duane Orwell Monroe', false],
        a2: ['Doctor of Medicine', false],
        a3: ['Document Oriented Mode', false],
        a4: ['Document Object Model', true]
    },     {
        qText: 'How do you end an setInterval method?',
        a1: ['endTimer', false],
        a2: ['clearInterval', true],
        a3: ['stopPlease', false],
        a4: ['You don\'t', false]
    },     {
        qText: 'When should you use querySelector instead of getElementById?',
        a1: ['When using SQL', false],
        a2: ['When you are iterating through an array', false],
        a3: ['When you have no idea what to do', false],
        a4: ['When you are getting something other than an element identified by an id', true] 
    },     {
        qText: 'Correct way to declare a variable:',
        a1: ['var', false],
        a2: ['const', false],
        a3: ['let', false],
        a4: ['All of the above', true]
    },     {
        qText: 'With what element do you link a js file to your html?',
        a1: ['<script>', true],
        a2: ['Hydrogen', false],
        a3: ['<javascriptfilelinkgoeshere>', false],
        a4: ['<link>', false]
    },     {
        qText: 'In js, a method is:',
        a1: ['a way to do something', false],
        a2: ['Clifford Smith, Jr. (born March 2, 1971)', false],
        a3: ['an object property containing a function definition', true],
        a4: ['idk ask someone else', false]
    },     {
        qText: 'Which of these statements would select the first item in the array?',
        a1: ['array.first', false],
        a2: ['give.me.the.first.element.of.the.array', false],
        a3: ['array[1]', false],
        a4: ['array[0]', true]
    },     {
        qText: 'Which of these function declarations are recieving an input?',
        a1: ['function(input) {}', false],
        a2: ['function.input {}', true],
        a3: ['function () {input}', false],
        a4: ['None of the above', false]
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

    else {
        console.log('wrong!');
        incorrectAnswers++;
        timerText.style.backgroundColor = 'lightcoral';
        setTimeout(() => {
            timerText.style.backgroundColor = 'white';
        }, 500)
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
