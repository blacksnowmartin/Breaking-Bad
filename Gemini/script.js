const questions = [
    {
        question: "What is Walter White's real name?",
        choices: ["Walter Hart", "Walter White", "Bryan Cranston", "None of the above"],
        answer: 2
    },
    {
        question: "What is the name of Walter White's partner in crime?",
        choices: ["Jesse Pinkman", "Hank Schrader", "Mike Ehrmantraut", "Gus Fring"],
        answer: 0
    },
    {
        question: "What type of cancer does Walter White have?",
        choices: ["Lung cancer", "Brain cancer", "Skin cancer", "Leukemia"],
        answer: 0
    },
    // Add more questions here...
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");

function displayQuestion() {
    const question = questions[currentQuestion];
    questionEl.textContent = question.question;

    choicesEl.innerHTML = "";
    question.choices.forEach((choice, index) => {
        const choiceEl = document.createElement("li");
        const inputEl = document.createElement("input");
        const labelEl = document.createElement("label");

        inputEl.type = "radio";
        inputEl.name = "choice";
        inputEl.value = index;
        inputEl.id = `choice-${index}`;

        labelEl.textContent = choice;
        labelEl.htmlFor = `choice-${index}`;

        choiceEl.appendChild(inputEl);
        choiceEl.appendChild(labelEl);

        choicesEl.appendChild(choiceEl);
    });
}

function displayResults() {
    questionEl.textContent = `You scored ${score} out of ${questions.length} questions.`;
    choicesEl.innerHTML = ""; // Clear choices
    nextBtn.style.display = "none"; // Hide next button
}

nextBtn.addEventListener("click", function() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');

    if (selectedChoice) {
        const answerIndex = parseInt(selectedChoice.value);
        if (answerIndex === questions[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            displayResults();
        }
    }
});

displayQuestion(); // Display the first question when the page loads
