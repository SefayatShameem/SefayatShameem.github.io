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
        question: 'সকলেই বলে রহিমের আখলাক ভালো, আখলাক অর্থ?',
        answers: [
            {text:'(ক) সদাচার', correct: false},
            {text:'(খ) মহৎ গুণ', correct: true},
            {text:'(গ) হিংসা', correct: false},
            {text:'(ঘ) সাধারণ গুণ', correct: false},
        ]
    },

    {
        question: 'মানুষ হিসেবে ভালোবাসা ও শ্রদ্ধা পাবে যার আছে ভালো-',
        answers: [
            {text:'(ক) চরিত্র', correct: true},
            {text:'(খ) চেহারা', correct: false},
            {text:'(গ) সম্পদ', correct: false},
            {text:'(ঘ) শরীর', correct: false},
        ]
    },
    {
        question: 'তুমি আল্লাহর ইবাদত করবে, কারণ ইবাদত করলে --',
        answers: [
            {text:'(ক) আল্লাহ সন্তুষ্ট হন', correct: true},
            {text:'(খ) দুনিয়ায় বিখ্যাত হওয়া যায়', correct: false},
            {text:'(গ) আখিরাতে নেতা হওয়া যায়', correct: false},
            {text:'(ঘ) নামাজের শিক্ষা পাওয়া যায়', correct: false},
        ]
    },
    {
        question: 'নিমুর নানা হজ পালনের ক্ষেত্রে সর্বপ্রথম কোন কাজটি করবেন?',
        answers: [
            {text:'(ক) ইহরাম বাঁধা', correct: true},
            {text:'(খ) পাথর নিক্ষেপ', correct: false},
            {text:'(গ) কাবাঘর প্রদক্ষিণ ', correct: false},
            {text:'(ঘ) জমজমের পানি পান', correct: false},
        ]
    },
    {
        question: ' আল্লাহ মানবজাতিকে ইবাদতের জন্যই সৃষ্টি করেছেন কারণ --',
        answers: [
            {text:'(ক) মানুষের হাত-পা আছে', correct: false},
            {text:'(খ) মানুষ মসজিদ বানাতে পারে', correct: false},
            {text:'(গ) মানুষের জ্ঞান ও বিবেক আছে ', correct: true},
            {text:'(ঘ) মানুষ সব প্রাণীকে নিয়ন্ত্রণ করতে পারে', correct: false},
        ]
    },
    {
        question: '  সাওম পালনের ফলে --',
        answers: [
            {text:'(ক) হানাহানি দূর হয় ', correct: false},
            {text:'(খ) হিংসা-বিদ্বেষ দূর হয়', correct: false},
            {text:'(গ) তাকওয়া অর্জন হয়', correct: false},
            {text:'(ঘ) ধনী-গরিবের সেতুবন্ধ', correct: true},
        ]
    },
    {
        question: 'সায়েম সালাত আদায়ের জন্য প্রস্তুতি নিচ্ছে। তার সালাত আদায়ের জন্য কোনটি প্রয়োজন?',
        answers: [
            {text:'(ক) দামি পোশাক', correct: false},
            {text:'(খ) কাপড় পাক হওয়া', correct: true},
            {text:'(গ) পরিবেশ নির্জন থাকা ', correct: false},
            {text:'(ঘ) পোশাক সুগন্ধযুক্ত হওয়া', correct: false},
        ]
    },
    {
        question: 'বিশ্ব মুসলিমের মহাসম্মেলন’ উক্তিটি কিসের সঙ্গে সম্পর্কযুক্ত বলে তুমি মনে করো?',
        answers: [
            {text:'(ক)  ইসলামী জলসা', correct: false},
            {text:'(খ) বিশ্ব ইজতেমা', correct: false},
            {text:'(গ) হজ', correct: true},
            {text:'(ঘ) ঈদের নামাজ', correct: false},
        ]
    },
    {
        question: 'কুরবানি করতে হবে --',
        answers: [
            {text:'(ক) ত্যাগের মনোভাব নিয়ে', correct: true},
            {text:'(খ) গর্বের মনোভাব নিয়ে', correct: false},
            {text:'(গ) দুঃখের মনোভাব নিয়ে', correct: false},
            {text:'(ঘ) ভয়ের মনোভাব নিয়ে', correct: false},
        ]
    },
    {
        question: 'প্রাকৃতিক দুর্যোগে কেন দুর্গতদের সাহায্য করব?',
        answers: [
            {text:'(ক) নৈতিকতার কারণে', correct: true},
            {text:'(খ) অর্থ আয়ের আশায়', correct: false},
            {text:'(গ) প্রতিদান পাওয়ার আশায়', correct: false},
            {text:'(ঘ) প্রশংসা পাওয়ার আশায়', correct: false},
        ]
    }
    
]