document.addEventListener("DOMContentLoaded", displayQuestion);

const questions = [
    ['How many moons does the Earth have?', 1],
    ['How many moons has Saturn?', 62],
    ['How many moons does Venus have?', 0]
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    if (currentQuestion < questions.length) {
        const qDiv = document.getElementById('quiz-container');
        qDiv.innerHTML = `
            <p>${questions[currentQuestion][0]}</p>
            <input type="number" id="answer" />
            <button onclick="checkAnswer()">Submit</button>
        `;
    } else {
        document.getElementById('quiz-container').innerHTML = '';
        document.getElementById('quiz-result').innerText = `Quiz finished. Score: ${score}/${questions.length}`;
    }
}

function checkAnswer() {
    const answer = parseInt(document.getElementById('answer').value);
    if (answer === questions[currentQuestion][1]) {
        alert('Correct answer!');
        score++;
    } else {
        alert(`Wrong. The correct answer is ${questions[currentQuestion][1]}`);
    }
    currentQuestion++;
    displayQuestion();
}

window.onload = displayQuestion;
