// Load correct and wrong sound files
const correctSound = new Audio('audio/correct-156911.mp3');
const wrongSound = new Audio('audio/wrong-buzzer-6268.mp3');
const passSound = new Audio('audio/congratulations.mp3')
const failSound = new Audio('audio/fail.mp3')

// Unlock image element
const imageElement = document.createElement('img');
imageElement.src = 'images/season 5.jpg'; // Path to the unlocked image
imageElement.alt = 'Unlocked Image';
imageElement.style.maxWidth = '650px';

//A logic to open the next level

const quizData = [
    {
        question: "How does Walter White initially evade capture at the start of Season 5?",
        choices: ["He goes into hiding under a new identity", "He flees to Mexico", "He surrenders to the DEA", "He confronts Hank and confesses"],
        correct: "He goes into hiding under a new identity"
    },
    {
        question: "What alias does Walter adopt during his initial escape?",
        choices: ["Lambert", "Flynn", "Mr. Mayhew", "Kevin"],
        correct: "Lambert"
    },
    {
        question: "Who replaces Hank Schrader as head of the DEA office in Albuquerque?",
        choices: ["Steven Gomez", "Hank remains in charge", "George Merkert", "ASAC Ramey"],
        correct: "ASAC Ramey"
    },
    {
        question: "To keep his methylamine supply flowing, Walter convinces Lydia to source it from:",
        choices: ["A rival drug cartel", "The Czech Republic", "A hidden lab he sets up", "Stealing from local suppliers"],
        correct: "The Czech Republic"
    },
    {
        question: "How does Jesse attempt to cope with the guilt of his actions?",
        choices: ["He seeks therapy", "He turns himself in", "He throws himself into work", "He seeks revenge on Todd"],
        correct: "He turns himself in"
    },
    {
        question: "Who becomes Walter's new business partner after Gus Fring's death?",
        choices: ["Mike Ehrmantraut", "Todd Alquist", "Saul Goodman", "Lydia Rodarte-Quayle"],
        correct: "Todd Alquist"
    },
    {
        question: "To throw suspicion off himself, what does Walter plant in Hank's office?",
        choices: ["A recording device", "A hidden camera", "A copy of Leaves of Grass with Gale's inscription", "A threatening note"],
        correct: "A copy of Leaves of Grass with Gale's inscription"
    },
    {
        question: "What tactic does Walter use to manipulate Jesse back into the business?",
        choices: ["Offering him a larger share of the profits", "Appealing to his loyalty", "Threatening his life", "Reminding him of Gus's cruelty"],
        correct: "Appealing to his loyalty"
    },
    {
        question: "What event ultimately convinces Walter to consider leaving the drug trade?",
        choices: ["The DEA closing in", "The death of Mike Ehrmantraut", "The murder of Drew Sharp", "Skyler's disapproval"],
        correct: "The murder of Drew Sharp"
    },
    {
        question: "Before disappearing, what does Walter leave behind for his family?",
        choices: ["Instructions on money laundering", "A video confession", "Hidden cash in a storage unit", "A letter explaining his actions"],
        correct: "A video confession"
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

//Unlock the final gift
const nextLevelButton = document.createElement('button');
nextLevelButton.innerText = 'Unlock the Completion Grand Prize';
nextLevelButton.addEventListener('click', () => {
    window.location.href = 'grandprize-video.html'; // Redirect to next level
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
