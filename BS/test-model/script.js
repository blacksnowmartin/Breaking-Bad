const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Rome"],
        correct: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Mars", "Saturn", "Jupiter", "Neptune"],
        correct: "Jupiter"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        choices: ["China", "Japan", "India", "South Korea"],
        correct: "Japan"
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correct: "Leonardo da Vinci"
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "CO2", "O2", "NaCl"],
        correct: "H2O"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Venus", "Mars", "Mercury", "Pluto"],
        correct: "Mars"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
        correct: "William Shakespeare"
    },
    {
        question: "Which mammal can fly?",
        choices: ["Bat", "Mouse", "Rat", "Cat"],
        correct: "Bat"
    },
    {
        question: "What is the tallest mammal?",
        choices: ["Elephant", "Giraffe", "Horse", "Kangaroo"],
        correct: "Giraffe"
    },
    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        choices: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
        correct: "Nitrogen"
    }
];


let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');

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

function showResult() {
    resultElement.innerText = `You scored ${score}/${quizData.length}`;
    if (score >= 6) {
        resultElement.style.color = 'green';
        resultElement.innerText += ' Congratulations!';
        // Unlock image code here
    } else {
        resultElement.style.color = 'red';
        resultElement.innerText += ' Try again!';
    }
}

loadQuestion();
