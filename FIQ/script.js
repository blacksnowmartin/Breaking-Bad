document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".topic-selection .option");
    const quizStartBtn = document.querySelector(".take-quiz-btn");
    const answers = document.querySelectorAll(".answers .option");
    const confirmAnsBtn = document.querySelector(".confirm-answer");
    const nextQuesBtn = document.querySelector(".next-ques");
    const welcomePage = document.querySelector(".welcome");
    const homeBtn = document.querySelector(".home");
    const resultPage = document.querySelector(".result");
    const quizTitle = document.querySelector(".quiz-title");
    const questionPage = document.querySelector(".question-section");
    const themeSwitch = document.querySelector("#themeSwitcher");
    const body = document.querySelector("body");

    let questions;
    let score = 0;
    let currentQuestionIndex = 0;
    let currentQuestion;
    let answerSubmitted = false;

    const resetAnswers = () => {
        answers.forEach(option => {
            option.classList.remove("option-selected");
            option.classList.remove("correct-answer");
            option.classList.remove("incorrect-answer");
            option.style.cursor = "pointer";
        })
        document.querySelectorAll(".option-selected").forEach(option => {
            option.classList.remove("option-selected");
        })
    }

    const resetButtons = () => {
        confirmAnsBtn.style.display = "block";
        confirmAnsBtn.style.visibility = "hidden";
        nextQuesBtn.style.visibility = "hidden";
        nextQuesBtn.style.display = "none";
        nextQuesBtn.style.opacity = "0";
        quizStartBtn.style.visibility = "hidden";
        quizStartBtn.style.opacity = "0";
    }

    const resetQuiz = () => {
        answerSubmitted = false;
        welcomePage.classList.remove("oldPage");
        welcomePage.style.display = "flex";
        questions = {};
        score = 0;
        currentQuestionIndex = 0;
        currentQuestion = "";
        quizTitle.textContent = "";
        answerSubmitted = false;
        resultPage.style.display = "none";
        resetAnswers();
        resetButtons();
    }

    themeSwitch.addEventListener("change", () => {
        if (themeSwitch.checked) {
            body.classList.remove("light")
        } else {
            body.classList.add("light");
        }
    })

    homeBtn.addEventListener("click", resetQuiz);

    categories.forEach(option => {
        option.addEventListener("click", () => {
            categories.forEach(opt => {
                opt.classList.remove("option-selected");
            });
            option.classList.toggle("option-selected");
            quizStartBtn.style.visibility = "visible";
            quizStartBtn.style.opacity = "1";
        })
    })

    quizStartBtn.addEventListener("click", () => {

        welcomePage.classList.add("oldPage");
        questionPage.classList.add("newPage");
        setTimeout(() => {
            welcomePage.style.display = "none";
            questionPage.style.display = "flex";
        }, 300);

        const selectedTopic = document.querySelector(".option-selected");

        quizTitle.style.visibility = "visible";
        let topic = selectedTopic.dataset.name;
        if (topic === "classics") {
            quizTitle.innerHTML = `<i class="fa-solid fa-film"></i><span>Timeless Classics</span>`;
            quizTitle.classList.add("option-1");
        } else if (topic === "hits") {
            quizTitle.innerHTML = `<i class="fa-solid fa-gun"></i><span>Blockbuster Hits</span>`;
            quizTitle.classList.add("option-2");
        } else if (topic === "quotes") {
            quizTitle.innerHTML = `<i class="fa-solid fa-comment-dots"></i><span>Movie quotes</span>`;
            quizTitle.classList.add("option-3");
        } else if (topic === "directors") {
            quizTitle.innerHTML = `<i class="fa-solid fa-clapperboard"></i><span>Director's cut</span>`;
            quizTitle.classList.add("option-4");
        }


        fetch(`./assets/quiz_data/${topic}.json`)
            .then(response => response.json())
            .then(data => {
                questions = data;
                console.log("In fetch:");
                console.log(questions.questions[0]);
                showNextQuestion();
            })
            .catch(e => console.log("Error while fetching questions!", e));
    })

    answers.forEach(option => {
        option.addEventListener("click", () => {
            if (!answerSubmitted) {
                answers.forEach(opt => {
                    opt.classList.remove("option-selected");
                });
                option.classList.toggle("option-selected");
                confirmAnsBtn.style.visibility = "visible";
                confirmAnsBtn.style.opacity = "1";
            }
        })
    })

    confirmAnsBtn.addEventListener("click", () => {
        answerSubmitted = true;
        answers.forEach(opt => {
            opt.style.cursor = "not-allowed";
        });
        confirmAnsBtn.style.display = "none";
        nextQuesBtn.style.visibility = "visible";
        nextQuesBtn.style.display = "block";
        nextQuesBtn.style.opacity = "1";

        const answer = document.querySelector(".answers .option-selected");

        if (answer.textContent === currentQuestion.answer) {
            answer.classList.add("correct-answer");
            score++;
        } else {
            answer.classList.add("incorrect-answer");
            answers.forEach(option => {
                if (option.textContent === currentQuestion.answer) {
                    option.classList.add("correct-answer");
                }
            })
        }
    })

    nextQuesBtn.addEventListener("click", () => {
        if (currentQuestionIndex + 1 === questions.questions.length) {
            questionPage.style.display = "none";
            resultPage.style.display = "flex";
            resultPage.style.visibility = "visible";
            document.querySelector(".score").textContent = score;
            return;
        }
        currentQuestionIndex++;
        resetButtons();
        answerSubmitted = false;
        answers.forEach(opt => {
            opt.style.cursor = "pointer";
        });
        showNextQuestion();
    })

    const showNextQuestion = () => {
        resetAnswers();
        if (questions && questions.questions.length > currentQuestionIndex) {
            questionHeading = document.querySelector(".question-section .heading-section h3 span");
            questionHeading.textContent = `${currentQuestionIndex + 1}/${questions.questions.length}`;
            currentQuestion = questions.questions[currentQuestionIndex];
            document.querySelector(".question-text").textContent = currentQuestion.question;
            const options = document.querySelectorAll(".answers .option");

            currentQuestion.options.forEach((option, index) => {
                options[index].textContent = option;
            });
        } else {
            console.log("No more questions!");
        }
    }
})