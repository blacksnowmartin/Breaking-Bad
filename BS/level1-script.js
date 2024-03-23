document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit-btn");

    // Load audio files
    const correctSound = new Audio('correct.mp3');
    const incorrectSound = new Audio('incorrect.mp3');

    // Add event listener for submit button click
    submitButton.addEventListener("click", function() {
        // Get selected answer
        const selectedAnswer = document.querySelector('input[name="q1"]:checked');

        if (selectedAnswer) {
            const selectedValue = selectedAnswer.value;

            // Check if the selected answer is correct
            if (selectedValue === "C") {
                correctSound.play(); // Play correct answer sound
                alert("Correct answer!"); // Change this to your desired behavior
            } else {
                incorrectSound.play(); // Play incorrect answer sound
                alert("Wrong answer!"); // Change this to your desired behavior
            }
        } else {
            alert("Please select an answer!"); // Change this to your desired behavior
        }
    });
});
