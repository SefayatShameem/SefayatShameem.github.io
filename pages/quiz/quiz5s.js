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
    startButton.innerText = 'পুনরায়'
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
      question: 'কোনটি দ্বিবীজপত্রী উদ্ভিদ?',
      answers: [
          {text:'(ক) ধান', correct: false},
          {text:'(খ) গম', correct: false},
          {text:'(গ) তাল', correct: false},
          {text:'(ঘ) ছোলা', correct: true},
      ]
  },

  {
      question: 'স্পাইরোগাইরা কোন জাতীয় উদ্ভিদ?',
      answers: [
          {text:'(ক) ছত্রাক', correct: false},
          {text:'(খ) শৈবাল', correct: true},
          {text:'(গ) মস', correct: false},
          {text:'(ঘ) ফার্ন', correct: false},
      ]
  },
  {
      question: 'নিচের কোন উদ্ভিদের ক্লোরোফিল নেই?',
      answers: [
          {text:'(ক) শৈবাল', correct: false},
          {text:'(খ) ছত্রাক', correct: true},
          {text:'(গ) মস', correct: false},
          {text:'(ঘ) ফার্ন', correct: false},
      ]
  },
  {
      question: 'কোনটি বৃক্ষ?',
      answers: [
          {text:'(ক) রঙ্গন', correct: false},
          {text:'(খ) মেহগনি', correct: true},
          {text:'(গ) মরিচ  ', correct: false},
          {text:'(ঘ) স্পাইরোগাইরা', correct: false},
      ]
  },
  {
      question: ' সাইকাস কোন ধরনের উদ্ভিদ?',
      answers: [
          {text:'(ক) আবৃতবীজী উদ্ভিদ ', correct: false},
          {text:'(খ) নগ্নবীজী উদ্ভিদ', correct: true},
          {text:'(গ) বিরুৎ জাতীয় উদ্ভিদ  ', correct: false},
          {text:'(ঘ) অপুষ্পক উদ্ভিদ', correct: false},
      ]
  },
  {
      question: '  বিরুৎ উদ্ভিদ কোনটি? --',
      answers: [
          {text:'(ক) আমগাছ  ', correct: false},
          {text:'(খ) লেবু ', correct: false},
          {text:'(গ) গোলাপ', correct: false},
          {text:'(ঘ) পুঁইশাক', correct: true},
      ]
  },
  {
      question: 'কোনটি গুল্ম জাতীয় উদ্ভিদ',
      answers: [
          {text:'(ক) গোলাপ', correct: true},
          {text:'(খ) সরিষা', correct: false},
          {text:'(গ) আম ', correct: false},
          {text:'(ঘ) কচু', correct: false},
      ]
  },
  {
      question: 'আকার ও কান্ডের প্রকৃতির ভিত্তিতে উদ্ভিদ কয় প্রকার?',
      answers: [
          {text:'(ক) দুই', correct: false},
          {text:'(খ) তিন', correct: true},
          {text:'(গ) চার', correct: false},
          {text:'(ঘ) পাঁচ', correct: false},
      ]
  },
  {
      question: 'কোনটি সপুষ্পক উদ্ভিদ?',
      answers: [
          {text:'(ক) মস', correct: false},
          {text:'(খ) ছত্রাক', correct: false},
          {text:'(গ) সাইকাস', correct: true},
          {text:'(ঘ) ফার্ন', correct: false},
      ]
  },
  {
      question: 'কোন উদ্ভিদের পাতার শিরা জালের মতো ছড়িয়ে থাকে?',
      answers: [
          {text:'(ক) আম', correct: true},
          {text:'(খ) নারকেল', correct: false},
          {text:'(গ) তাল', correct: false},
          {text:'(ঘ) ভুট্টা', correct: false},
      ]
  }
]