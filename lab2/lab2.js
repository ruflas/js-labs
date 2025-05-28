// Inicialización
let score = 0;
let q = 0;

const questions = [
  ['What is the capital of France?', 'Paris'],
  ['2 + 2 = ?', '4'],
  ['What is the color of the sky on a clear day?', 'blue'],
  ['What programming language are we using?', 'JavaScript'],
  ['How many legs does a spider have?', '8']
];

// DOM Elements
const questionText = document.getElementById('question-text');
const answerInput = document.getElementById('answer-input');
const resultText = document.getElementById('result-text');

// Mostrar la primera pregunta
showQuestion();

function showQuestion() {
  if (q < questions.length) {
    questionText.textContent = questions[q][0];
    answerInput.value = '';
    answerInput.focus();
  } else {
    showFinalResult();
  }
}

function nextQuestion() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  testQuestion(questions[q], userAnswer);
  q++;
  showQuestion();
}

function testQuestion(question, answer) {
  if (answer === question[1].toLowerCase()) {
    score++;
  } else {
    alert(`Incorrect. Correct answer: ${question[1]}`);
  }
}

function showFinalResult() {
  questionText.textContent = '';
  answerInput.style.display = 'none';
  document.querySelector('button').style.display = 'none';
  resultText.innerHTML = `<strong>You scored ${score} out of ${questions.length}.</strong>`;
}
