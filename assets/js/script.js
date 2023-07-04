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

//end screen
var endScreen = document.querySelector('#end-screen');

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
        a1: ['function(input) {}', true],
        a2: ['function.input {}', false],
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
    // console.log(questionCount);
    setQuestion();
    // return questionCount;
}

//timer functoin
function countDown() {

    timerText.textContent = `Time Remaining: ${timeLeft}`;
    timeInterval = setInterval(function () {
        // console.log(timeLeft);
        if (timeLeft > 0) {
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
    timerText.textContent = 'Time Remaining: 0';
    clearInterval(timeInterval);
    qAndApage.style.display = 'none';
    endScreen.style.display = 'block';
    console.log(incorrectAnswers);
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
        if (timeLeft > 15) {
            timeLeft = timeLeft - 15;
        }
        else {
            timeLeft = 0;
        }
    }

    // questionCount++;
    return setQuestion();
}

//for each question, builds an array of the answers 
function setQuestion() {
 if (questionCount >= questions.length) {
        endQuiz();
        return;
    }

    var answerElements = [answer1, answer2, answer3, answer4];

    var currentQuestion = questions[questionCount];
    questionVal.textContent = currentQuestion.qText;
    //for the current question, loops through the array of answers and sets the text content
    for (let i = 0; i < answerElements.length; i++) {
        const el = answerElements[i];
        var currentAnswer = currentQuestion[`a${i + 1}`];

        var [content, correct] = currentAnswer;
        el.textContent = content;
        el.dataset.correct = correct;

    }
    questionCount++;
    return setQuestion;
}
