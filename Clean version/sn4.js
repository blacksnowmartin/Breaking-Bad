// Load correct and wrong sound files
const correctSound = new Audio('audio/correct-156911.mp3');
const wrongSound = new Audio('audio/wrong-buzzer-6268.mp3');
const passSound = new Audio('audio/congratulations.mp3')
const failSound = new Audio('audio/fail.mp3')

// Unlock image element
const imageElement = document.createElement('img');
imageElement.src = 'images/season 4.jpg'; // Path to the unlocked image
imageElement.alt = 'Unlocked Image';
imageElement.style.maxWidth = '650px';

// Array of quiz questions
const quizData = [
    {
        question: "What is the name of the new superlab built for Walter and Jesse?",
        choices: ["The Blue Room", "The Crystal Palace", "The Superlab", "The Meth Dungeon"],
        correct: "The Superlab"
    },
    {
        question: "Who becomes Gus Fring's new right-hand man?",
        choices: ["Mike Ehrmantraut", "Jesse Pinkman", "Tyrus Kitt", "Saul Goodman"],
        correct: "Mike Ehrmantraut"
    },
    {
        question: "What new method of distribution does Walter introduce in Season 4?",
        choices: ["Selling directly to street dealers", "Selling online", "Using a network of fast-food restaurants", "Selling at music festivals"],
        correct: "Using a network of fast-food restaurants"
    },
    {
        question: "What is the name of the exterminator company that Walter uses as a front for meth production?",
        choices: ["A1 Pest Control", "Vamonos Pest", "Bug Off Exterminators", "No More Pests Inc."],
        correct: "Vamonos Pest"
    },
    {
        question: "How does Walter manipulate Jesse into helping him eliminate Gus Fring?",
        choices: ["By appealing to Jesse's sense of loyalty", "By threatening Jesse's life", "By convincing Jesse that Gus poisoned Brock", "By promising Jesse a larger share of the profits"],
        correct: "By convincing Jesse that Gus poisoned Brock"
    },
    {
        question: "What does Walter use to kill Gus Fring?",
        choices: ["Poisoned ricin", "A car bomb", "A gun", "Strangulation"],
        correct: "A gun"
    },
    {
        question: "Who ultimately kills Gus Fring's henchman, Tyrus Kitt?",
        choices: ["Walter White", "Mike Ehrmantraut", "Jesse Pinkman", "Saul Goodman"],
        correct: "Mike Ehrmantraut"
    },
    {
        question: "What is the name of the cartel leader who orders an attack on Gus Fring?",
        choices: ["Tuco Salamanca", "Hector Salamanca", "Don Eladio", "Marco Salamanca"],
        correct: "Don Eladio"
    },
    {
        question: "How does Skyler get involved in Walt's meth operation in Season 4?",
        choices: ["She becomes his cook", "She starts laundering money for him", "She becomes his distributor", "She becomes his lawyer"],
        correct: "She starts laundering money for him"
    },
    {
        question: "What prompts Walter to finally kill Gustavo Fring?",
        choices: ["Gus threatens his family", "Gus discovers Walter's plan", "Gus visits Hector Salamanca in the nursing home", "Gus tries to kill him at Gale's apartment"],
        correct: "Gus visits Hector Salamanca in the nursing home"
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

        const nextLevelButton = document.createElement('button');
        nextLevelButton.innerText = 'Proceed to Next Level';
        nextLevelButton.addEventListener('click', () => {
            window.location.href = 'sn5.html'; // Redirect to next level
        });
        resultElement.appendChild(nextLevelButton);
    } else {
        resultElement.style.color = 'red';
        resultElement.innerText += ' Try again!';
        failSound.play()

        const nextLevelButton = document.createElement('button');
        nextLevelButton.innerText = 'Try again';
        nextLevelButton.addEventListener('click', () => {
            window.location.href = 'sn2.html'; // Redirect to next level
        });
        resultElement.appendChild(nextLevelButton);
    }
}

// Start loading the first question
loadQuestion();