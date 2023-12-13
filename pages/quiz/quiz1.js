const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
        question: '২+২?',
        answers: [
            {text:'৯', correct: false},
            {text:'৮', correct: false},
            {text:'৪', correct: true},
            {text:'১০', correct: false},
        ]
    },

    {
        question: 'What is ৮x২?',
        answers: [
            {text:'১৬', correct: false},
            {text:'২০', correct: false},
            {text:'৮', correct: true},
            {text:'১৪', correct: false},
        ]
    },
    {
        question: 'What is ৬x2?',
        answers: [
            {text:'৬', correct: false},
            {text:'১০', correct: false},
            {text:'১৬', correct: false},
            {text:'১২', correct: true},
        ]
    },

    {
        question: 'What is ৭x৩?',
        answers: [
            {text:'২৭', correct: false},
            {text:'১৫', correct: false},
            {text:'২১', correct: true},
            {text:'১৮', correct: false},
        ]
    },
    {
        question: 'What is ১০/২?',
        answers: [
            {text:'২', correct: false},
            {text:'৬', correct: false},
            {text:'১', correct: false},
            {text:'৫', correct: true},
        ]
    }
    ,

    {
        question: 'What is ৩*৭?',
        answers: [
            {text:'৯', correct: false},
            {text:'১৩', correct: false},
            {text:'১০', correct: true},
            {text:'৫', correct: false},
        ]
    },
    {
        question: 'What is ৯/৩?',
        answers: [
            {text:'৭', correct: false},
            {text:'৫', correct: false},
            {text:'১', correct: false},
            {text:'৩', correct: true},
        ]
    },

    {
        question: 'What is ৯+২?',
        answers: [
            {text:'১০', correct: false},
            {text:'৯', correct: false},
            {text:'১১', correct: true},
            {text:'১৫', correct: false},
        ]
    },
    {
        question: 'What is ২/২?',
        answers: [
            {text:'০', correct:  true},
            {text:'২', correct: false},
            {text:'৪', correct: false},
            {text:'১', correct:false},
        ]
    }
    
]