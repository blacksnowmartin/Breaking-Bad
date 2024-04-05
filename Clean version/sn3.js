// Load correct and wrong sound files
const correctSound = new Audio('audio/correct-156911.mp3');
const wrongSound = new Audio('audio/wrong-buzzer-6268.mp3');
const passSound = new Audio('audio/congratulations.mp3')
const failSound = new Audio('audio/fail.mp3')

// Unlock image element
const imageElement = document.createElement('img');
imageElement.src = 'images/season3.jpg'; // Path to the unlocked image
imageElement.alt = 'Unlocked Image';
imageElement.style.maxWidth = '650px';

// Array of quiz questions
const quizData = [
    {
        question: "What is the name of the protagonist in Breaking Bad?",
        choices: ["Jesse Pinkman", "Hank Schrader", "Walter White", "Saul Goodman"],
        correct: "Walter White"
    },
    {
        question: "What is Walter White's profession at the beginning of the series?",
        choices: ["Teacher", "Lawyer", "Doctor", "Police officer"],
        correct: "Teacher"
    },
    {
        question: "What is the name of Walter's wife?",
        choices: ["Jane", "Marie", "Skyler", "Wendy"],
        correct: "Skyler"
    },
    {
        question: "Who is Jesse Pinkman's former business partner?",
        choices: ["Tuco Salamanca", "Skinny Pete", "Krazy-8", "Walter White"],
        correct: "Krazy-8"
    },
    {
        question: "Where is Breaking Bad primarily set?",
        choices: ["Los Angeles", "Miami", "Albuquerque", "Houston"],
        correct: "Albuquerque"
    },
    {
        question: "What is the name of the car wash Walter buys?",
        choices: ["A1A Car Wash", "Crystal Clear Car Wash", "Pinkman's Car Wash", "Bogdan's Car Wash"],
        correct: "Bogdan's Car Wash"
    },
    {
        question: "What is the nickname of the blue-colored crystal meth Walter and Jesse produce?",
        choices: ["Blue Magic", "Blue Ice", "Blue Sky", "Blue Dream"],
        correct: "Blue Ice"
    },
    {
        question: "Who is the DEA agent investigating the meth trade?",
        choices: ["Saul Goodman", "Gustavo Fring", "Hank Schrader", "Mike Ehrmantraut"],
        correct: "Hank Schrader"
    },
    {
        question: "What is the name of Walter's son who has cerebral palsy?",
        choices: ["Flynn", "Skyler Jr.", "Jesse", "Mike"],
        correct: "Flynn"
    },
    {
        question: "What is the name of the high school where Walter teaches?",
        choices: ["East High", "West High", "South High", "Albuquerque High"],
        correct: "Albuquerque High"
    }
];


let currentQuestion = 0;
let score = 0;

// HTML elements
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');

// Function to load a question
function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    choicesElement.innerHTML = '';
    currentQuizData.choices.forEach(choice => {
        const choiceElement = document.createElement('div');
        choiceElement.innerText = choice;
        choiceElement.classList.add('choice');
        choiceElement.addEventListener('click', () => {
            checkAnswer(choice);
        });
        choicesElement.appendChild(choiceElement);
    });
}

// Function to check the answer
function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
    if (answer === currentQuizData.correct) {
        score++;
        correctSound.play();
    } else {
        wrongSound.play();
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Function to show the result
function showResult() {
    resultElement.innerText = `You scored ${score}/${quizData.length}`;
    if (score >= 6) {
        resultElement.style.color = 'green';
        resultElement.innerText += ' Congratulations!';
        document.body.appendChild(imageElement); 
        passSound.play()// Append the unlocked image
    } else {
        resultElement.style.color = 'red';
        resultElement.innerText += ' Try again!';
        failSound.play()
    }
}

// Start loading the first question
loadQuestion();
