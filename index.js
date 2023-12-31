const questions = [
  {
    question: "What is my sister's name?",
    answers: [
      {text: "Anya", correct:"true"},
      {text: "Tanya", correct:"false"},
      {text: "Vanya", correct:"false"},
      {text: "Petr", correct:"false"}
    ]
  },

  {
    question: "What is my sister's name?",
    answers: [
      {text: "Anya", correct:"true"},
      {text: "Tanya", correct:"false"},
      {text: "Vanya", correct:"false"},
      {text: "Petr", correct:"false"}
    ]
  },

  {
    question: "What is my sister's name?",
    answers: [
      {text: "Anya", correct:"true"},
      {text: "Tanya", correct:"false"},
      {text: "Vanya", correct:"false"},
      {text: "Petr", correct:"false"}
    ]
  },

  {
    question: "What is my sister's name?",
    answers: [
      {text: "Anya", correct:"true"},
      {text: "Tanya", correct:"false"},
      {text: "Vanya", correct:"false"},
      {text: "Petr", correct:"false"}
    ]
  }
];

const questionElement = document.querySelector("#question");
const answersElement = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn");

let questionIndex = 0;
let score = 0;


function startQuiz() {
  questionIndex = 0;
  score = 0;
  showQuestion();
  showAnswers();
}

function showQuestion() {
  let currentQuestion = questions[questionIndex];
  let questionNo = questionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`; 
}

function showAnswers() {
  let currentQuestion = questions[questionIndex];
  resetStyle();
  for(let i = 0; i < currentQuestion.answers.length; i++){
    let answerButton = document.createElement("button");
    answerButton.classList.add("btn");
    answerButton.innerHTML = currentQuestion.answers[i].text;
    answersElement.appendChild(answerButton);
    if(currentQuestion.answers[i].correct){
      answerButton.dataset.correct = currentQuestion.answers[i].correct;
      answerButton.addEventListener("click", selectAnswer);
    }
  }
}

const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answersElement.children).forEach(button => {
    if(button.dataset.correct === "true")
      button.classList.add("correct");
    button.disabled = "true";  
    })
    nextButton.style.display = "block";  
}

function resetStyle() {
  nextButton.style.display = "none";
  answersElement.innerHTML = "";
}

function handleNextButton() {
  questionIndex++;
  if(questionIndex < questions.length) {
    showQuestion();
    showAnswers();
  } else {
    showScore();
  }
}

function showScore() {
  resetStyle();
  questionElement.innerHTML = `You scored ${score} points of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if(questionIndex < questions.length) {
    handleNextButton();
  } else {
      startQuiz();
  }
})

startQuiz();