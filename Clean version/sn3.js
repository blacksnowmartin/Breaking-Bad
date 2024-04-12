// Load correct and wrong sound files
const correctSound = new Audio('audio/correct-156911.mp3');
const wrongSound = new Audio('audio/wrong-buzzer-6268.mp3');
const passSound = new Audio('audio/congratulations.mp3')
const failSound = new Audio('audio/fail.mp3')

// Unlock image element
const imageElement = document.createElement('img');
imageElement.src = 'images/season 3.jpg'; // Path to the unlocked image
imageElement.alt = 'Unlocked Image';
imageElement.style.maxWidth = '650px';

// Add a home button
const homeButton = document.createElement('button');
homeButton.innerText = 'Quit';
homeButton.addEventListener('click', () => {
    window.location.href = 'start.html';
});
document.body.appendChild(homeButton);

// Array of quiz questions
const quizData = [
        {
            question: "What nickname does Hank Schrader give to Gale Boetticher?",
            choices: ["Genius", "Artist", "Chemist", "Brainiac"],
            correct: "Genius"
        },
        {
            question: "What is the name of the new drug dealer introduced in Season 3?",
            choices: ["Gus Fring", "Hector Salamanca", "Tuco Salamanca's cousins", "Hector Salamanca's nephews"],
            correct: "Hector Salamanca's nephews"
        },
        {
            question: "Who is the manager of the Los Pollos Hermanos franchise?",
            choices: ["Jesse Pinkman", "Saul Goodman", "Gustavo Fring", "Mike Ehrmantraut"],
            correct: "Gustavo Fring"
        },
        {
            question: "What does Walter White buy for his son's 16th birthday?",
            choices: ["A car wash", "A Pontiac Aztek", "A Dodge Challenger", "A Rolex watch"],
            correct: "A Dodge Challenger"
        },
        {
            question: "How does Gus Fring convince Walter to continue cooking meth?",
            choices: ["By threatening his family", "By offering him a partnership", "By blackmailing him", "By paying him a large sum of money"],
            correct: "By offering him a partnership"
        },
        {
            question: "Who becomes the main distributor of Walter and Jesse's meth?",
            choices: ["Krazy-8", "Tuco Salamanca", "Saul Goodman", "Gustavo Fring"],
            correct: "Gustavo Fring"
        },
        {
            question: "What does Hank Schrader find hidden in Gale Boetticher's apartment?",
            choices: ["A map of Walter White's house", "A recording of Walter confessing", "A notebook with lab notes", "A gun"],
            correct: "A notebook with lab notes"
        },
        {
            question: "Who is the first person to discover Walter's secret identity as Heisenberg?",
            choices: ["Jesse Pinkman", "Hank Schrader", "Gustavo Fring", "Skyler White"],
            correct: "Skyler White"
        },
        {
            question: "What causes the rift between Jesse Pinkman and Walter White in Season 3?",
            choices: ["Jesse's addiction issues", "Walter's manipulation", "Gus Fring's interference", "Skyler's disapproval"],
            correct: "Walter's manipulation"
        },
        {
            question: "What event leads to the DEA raiding the industrial laundry where the superlab is located?",
            choices: ["A tip-off from an informant", "A fire at the superlab", "An anonymous call reporting suspicious activity", "Hank's investigation into Gus Fring"],
            correct: "An anonymous call reporting suspicious activity"
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
            window.location.href = 'sn4.html'; // Redirect to next level
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
