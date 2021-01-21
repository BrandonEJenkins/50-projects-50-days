const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborghinis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0; // will be reassigned
let score = 0;

loadQuiz();

// create function to get current quiz data
function loadQuiz() {

  // need to deselect answer choice prior to loading in new quiz question and answers when submit clicked
  deselectAnswers();
  
  // use currentQuiz as the index to get each quiz from the quizData array
  const currentQuizData = quizData[currentQuiz];
  
  // display question and answers in browser
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer;

  // loop through each answer element to see which one is checked
  answerEls.forEach(answerEl => {
    if(answerEl.checked) {
      answer = answerEl.id;
    }
  })
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  // console.log(answer);

  // match selected with the correct answer
  if(answer) {
    // check if answer equals the correct answer
    if(answer === quizData[currentQuiz].correct) {

      // increment score by 1 if correct
      score++;
    }

    // increment currentQuiz by 1 to proceed to next quiz
    currentQuiz++;

    // if we're not at the end of the array then load another quiz question
    if(currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // if we are at the end of the quiz question array then run the 
      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>

        <button onclick="location.reload()">Reload</button>

      `
    }
  }

})