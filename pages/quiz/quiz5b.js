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
        question: 'বাংলাদেশের জাতীয় সঙ্গীত কে লিখছেন?',
        answers: [
            {text:'সুকুমার রায়', correct: false},
            {text:'কাজী নজরুল ইসলাম', correct: false},
            {text:'রবীন্দ্রনাথ ঠাকুর', correct: true},
            {text:'রাহাদ আল ফারহান', correct: false},
        ]
    },

    {
        question: ' "শিক্ষা গুরুর" মর্যাদা কে লিখেছেন?',
        answers: [
            {text:'রবীন্দ্রনাথ ঠাকুর', correct: false},
            {text:'সুকুমার রায়', correct: false},
            {text:'কাজী কাদের নেওয়াজ', correct: true},
            {text:'জসীমঅউদ্দিন', correct: false},
        ]
    },
    {
        question: 'দেশ স্বাধীন হবার পর বুদ্ধিজীবীদের লাশ পাওয়া যায় --',
        answers: [
            {text:'রাউএরবাজার বদ্ধভূমিতে', correct: true},
            {text:'ঢাকা বিস্ববিদ্যালয়ে', correct: false},
            {text:'সৌহরাওয়ার্দী উদ্যানে', correct: false},
            {text:'সংসদ ভবনে', correct: false},
        ]
    },

    {
        question: 'আনন্দপুরে কখন মেলা বসে?',
        answers: [
            {text:'ষোলই ডিসেম্বর', correct: false},
            {text:'একিশে ফেব্রুয়ারি', correct: false},
            {text:'পহেলা ফাল্গুন', correct: true},
            {text:'পৌষ সংক্রান্তি', correct: false},
        ]
    },
    {
        question: 'আমাদের সবচেয়ে প্রাচীণ শিল্প?',
        answers: [
            {text:'চারুশিল্প', correct:false },
            {text:'কারুশিল্প', correct: false},
            {text:'তাতশিল্প', correct: true},
            {text:'শিল্প-বাণিজ্য', correct: false},
        ]
    },

    {
        question: ' "কুমার সম্প্রদায় কিসের কাজ করে?',
        answers: [
            {text:'ইটের কাজ', correct: false},
            {text:'বাশের কাজ', correct: false},
            {text:'মাটির কাজ', correct: true},
            {text:'কাঠের কাজ', correct: false},
        ]
    },
    {
        question: 'পোড়ামাটির ফলকের অন্য নাম --',
        answers: [
            {text:'টেরাকোটা', correct: true},
            {text:'পুতুল', correct: false},
            {text:'হাড়ি', correct: false},
            {text:'ইট', correct: false},
        ]
    }
    
]