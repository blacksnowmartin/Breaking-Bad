// Load correct and wrong sound files
const correctSound = new Audio('audio/correct-156911.mp3');
const wrongSound = new Audio('audio/wrong-buzzer-6268.mp3');
const passSound = new Audio('audio/congratulations.mp3')
const failSound = new Audio('audio/fail.mp3')

// Unlock image element
const imageElement = document.createElement('img');
imageElement.src = 'images/season2.jpg'; // Path to the unlocked image
imageElement.alt = 'Unlocked Image';

// Array of quiz questions
const quizData = [
    {
        question: "What does Walter White buy to store his earnings?",
        choices: ["Storage unit", "Car wash", "Bank account", "Underground bunker"],
        correct: "Car wash"
    },
    {
        question: "Who becomes Walter's new business partner?",
        choices: ["Hank Schrader", "Saul Goodman", "Gustavo Fring", "Tuco Salamanca"],
        correct: "Gustavo Fring"
    },
    {
        question: "Where does Walter and his family go for a weekend getaway?",
        choices: ["Las Vegas", "The countryside", "A luxury hotel", "A remote cabin"],
        correct: "A luxury hotel"
    },
    {
        question: "What new type of meth does Jesse try to produce?",
        choices: ["Blue Sky", "Green Dream", "Chili P", "Pink Magic"],
        correct: "Chili P"
    },
    {
        question: "Who becomes suspicious of Walter's activities?",
        choices: ["Hank Schrader", "Marie Schrader", "Skyler White", "Walter Jr."],
        correct: "Hank Schrader"
    },
    {
        question: "What does Saul Goodman suggest as a front for Walter's drug money?",
        choices: ["Nail salon", "Car dealership", "Laser tag facility", "Coffee shop"],
        correct: "Laser tag facility"
    },
    {
        question: "What causes Hank's panic attacks?",
        choices: ["PTSD from a shootout", "Fear of flying", "Fear of spiders", "Fear of heights"],
        correct: "PTSD from a shootout"
    },
    {
        question: "What job does Jesse's friend, Combo, take up?",
        choices: ["Pizza delivery", "Ice cream truck driver", "Selling drugs", "Construction work"],
        correct: "Selling drugs"
    },
    {
        question: "How does Jane die?",
        choices: ["Overdose", "Car accident", "Suicide", "Homicide"],
        correct: "Overdose"
    },
    {
        question: "Who discovers Jane's death?",
        choices: ["Walter White", "Jesse Pinkman", "Skyler White", "Saul Goodman"],
        correct: "Jesse Pinkman"
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
