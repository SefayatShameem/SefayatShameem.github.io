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
            {text:'কাজী কাদের নেওয়াজ ', correct: true},
            {text:'সুকুমার রায়', correct: false},
            {text:'সুফিয়া কামাল', correct: false},
            {text:'কাজী নজরুল ইসলাম', correct: false},
        ]
    },
    {
        question: 'বাংলাদেশের স্বাধীনতা দিবস কবে?',
        answers: [
          {text:'৪ নভেম্বর', correct: false},
          {text:'২৬শে মার্চ', correct: true},
          {text:'২১শে ফেব্রুয়ারি', correct: false},
          {text:'১৬ ডিসেম্বর', correct: false},
        ]
    },
    {
      question: 'বাংলাদেশের বিজয় দিবস কবে?',
      answers: [
          {text:'১৫ই আগষ্ট', correct: false},
          {text:'২৬শে মার্চ', correct: false},
          {text:'২১শে ফেব্রুয়ারি', correct: false},
          {text:'১৬ ডিসেম্বর', correct: true},
      ]
  },
  {
    question: 'আয়তনে বাংলাদেশের সবচেয়ে ছোট বিভাগ কোনটি?',
    answers: [
        {text:'ময়মনসিংহ', correct: false},
        {text:'রংপুর', correct: false},
        {text:'খুলনা', correct: false},
        {text:'সিলেট', correct: true},
    ]
},
{
  question: 'তিনবিঘা করিডোর কোন নদীর তীরে অবস্থিত?',
  answers: [
      {text:'পদ্মা', correct: false},
      {text:'মেঘ্না', correct: false},
      {text:'করতোয়া', correct: false},
      {text:'তিস্তা', correct: true},
  ]
},
{
  question: 'কোন পাখি উড়তে পারে না?',
  answers: [
      {text:'মুরগী', correct: false},
      {text:'ময়ূর', correct: false},
      {text:'উটপাখি', correct: false},
      {text:'হাঁস', correct: true},
  ]
},
{
  question: 'জাতীয় স্মৃতিসৌধের উচ্চতা কত?',
  answers: [
      {text:'১৪৮ফুট', correct: false},
      {text:'১৫০ ফুট', correct: true},
      {text:'১৫৫', correct: false},
      {text:'১৬০ ফুট', correct: false},
  ]
},
{
  question: 'বাংলাদেশের প্রথম নারী প্যারাট্রুপার কে?',
  answers: [
      {text:'ক্যাপ্টেন জান্নাতুল ফেরদৌস ', correct: true},
      {text:'ক্যাপ্টেন আনোয়ারা বেগম', correct: false},
      {text:'ক্যাপ্টেন নুসরাত বৃষ্টি', correct: false},
      {text:'ক্যাপ্টেন আফরিন আহমেদ', correct: false},
  ]
},
{
  question: 'বর্তমানে বাংলাদেশের বৃহত্তম যুদ্ধ জাহাজ কোনটি?',
  answers: [
      {text:'বানৌজা নবযাত্রা এস১৬১', correct: false},
      {text:'সমুদ্র অভিযান', correct: true},
      {text:'বানৌজা জয়যাত্রা এস১৬২', correct: false},
      {text:' বানৌজা বঙ্গবন্ধু এফ২৫', correct: false},
  ]
},
{
  question: ' ঢাকা বর্তমানে বিশ্বের কততম জনবহুল শহর?',
  answers: [
      {text:' ৯তম', correct: false},
      {text:' ৬তম', correct: false},
      {text:'১৪তম ', correct: false},
      {text:'১১তম', correct: true},
  ]
},
{
  question: 'ঢাকা প্রথম বিভাগ ফুটবল লীগ শুরু হয় কত সালে?',
  answers: [
      {text:'১৯৩৩ সালে', correct: false},
      {text:'১৯১১ সালে', correct: false},
      {text:'১৯২৫ সালে', correct: false},
      {text:'১৯১৫ সালে', correct: true},
  ]
},
{
  question: 'বাংলাদেশ আন্তর্জাতিক ক্রিকেটে প্রথম অংশ নেয় কত সালে?',
  answers: [
      {text:'১৯৮৩ সালে', correct: false},
      {text:'১৯৭৩ সালে', correct: true},
      {text:'১৯৭৫ সালে ', correct: false},
      {text:' ১৯৮৩ সালে', correct: false},
  ]
},
{
  question: 'বাংলাদেশ টেস্ট স্ট্যাটাস লাভ করে কত সালে?',
  answers: [
      {text:'২৬ জুন, ২০০০ সালে', correct: true},
      {text:'০৩ নভেম্বর, ১৯৯৭ সালে', correct: false},
      {text:'০৫জুন, ১৯৯৬ সালে ', correct: false},
      {text:'১৮ অক্টোবর, ২০০০ সালে', correct: false},
  ]
},
{
  question: 'বাংলাদেশ টেস্ট ক্রিকেটে কততম স্থানে আছে?',
  answers: [
      {text:'১১তম ', correct: false},
      {text:'৮তম', correct: false},
      {text:'১০তম', correct: true},
      {text:'৬তম', correct: false},
  ]
},
{
  question: 'বাংলাদেশ ক্রিকেট দলের প্রথম অধিনায়ক ছিলেন?',
  answers: [
      {text:'শামীম কবির ', correct: true},
      {text:'হাবীবুল বাসার', correct: false},
      {text:'মুশফিকুর রহীম', correct: false},
      {text:'আমিনুল ইসলাম বুলবুল', correct: false},
  ]
}
    
]