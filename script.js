const startEl = document.getElementById("start")
const startButton = startEl.querySelector("button")
const question = document.getElementById("question-container")
const questionsEl = document.getElementById('question')
const answerEl = document.getElementById("answer-button")

let timeEl = document.querySelector("time")


let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
answerEl.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startEl.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random()- .5)
    currentQuestionIndex = 0
    question.classList.remove('hide')
    setNextQuestion()
}


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionsEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
        button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswers)
        answerEl.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    answerEl.classList.remove('hide')
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild)
    }
}

function selectAnswers(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex +1){
        questionsEl.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
     element.classList.remove('correct')
     element.classList.remove('wrong')
}

const questions = [
    {
        question: "In which continent are Chile, Argentina and Brazil?",
        answers: 
        [ 
        {text:"North America", correct: false},
        {text:"South America" , correct: true},
        {text:"Europe" , correct:false},
        {text:"Australasia" , correct:false}
         ]
 },
    
    { 
        question: "Which brand of soup featured in one of Andy Warhols most famous pop art pieces?",

        answers:[
       { text: "Heinz" , correct:false},
        {text: "Campbells" , correct:true},
        {text: "Baxters" , correct:false},
        {text: "Knorr" , correct:false}
    ]
},
        
    {
        question: "The Mad Hatter and the Cheshire Cat are characters in which famous book?",
        answers:
         [ 
        {text: "Winne-the-Pooh" , correct:false},
        {text: "Charlotte's Web" , correct:false},
        {text: "Charlie and the Chocolate Factory" , correct:false},
        {text: "Alice in Wonderland" , correct:true}
    ]
        
    }
    ,
    {
        question: "What measurement scale is used to determine wind speed?",
        answers: 
       [ 
     {text: "Beaufort scale" , correct:true},
     {text: "Richter scale" , correct:false},
     {text: "Synoptic scale" , correct:false}, 
    { text: "Gusting scale" , correct:false}
    ]       
    }
    ,

    {
        question: "In which city were the 1992 Summer Olympics held?",
        answers: 
       [ 
        {text: "Atlanta" , correct:false},
        {text: "Barcelona" , correct:true}, 
        {text: "Sydney" , correct:false},
        {text: "Seoul" , correct:false}
    ]
        
    }
    ,
    {
        question: "What other country, besides the US, uses the US dollar as its official currency?",
        answers: 
        [
        {text: "Ecuador" , correct:true},
        {text: "Canada" , correct:false}, 
        {text:"Mexico" , correct:false}, 
        {text: "United Kingdom" , correct:false}
    ]
        
    },
    {
        question: "How many sides does a Dodecahedron have??",
        answers: 
        [
        {text: "12" , correct:true},
        {text: "24" , correct:false},
        {text: "14" , correct:false},
        {text: "20" , correct:false}
    ]
}
    ,
    {
        question: "The Statue of Liberty was a gift to the United States from which European country?",

        answers: 
        [
        {text: "Belgium" , correct:false} , 
        {text: "Germany" , correct:false} , 
        {text: "Spain" , correct:false} , 
        {text: "France" , correct:true}
    ]
        
    },
    {
        question: "Which traditional Spanish dance originated in Andalusia and is recognised by UNESCO as a heritage of humanity?",
        answers: 
       [ 
           {text: "Sardana" , correct:false},
        {text:  "Tango" , correct:false},
        {text: "Flamenco" , correct:true},
        {text: "Paso Doble" , correct:false}
    ]
        
    },
    {
        question: "The human body is made up of approximately how much water?",
        answers:
        [{text: "40%" , correct:false},
        {text: "50%" , correct:false},
        {text: "60%" , correct:true},
        {text: "70%" , correct:false}]
        
    },
]
        
    
