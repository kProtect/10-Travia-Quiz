//All the elements 
var timeee = document.getElementById("time")
var startEl = document.getElementById("start")
var startButton = startEl.querySelector("button")
var question = document.getElementById("question-container")
var questionsEl = document.getElementById('question')
var answerEl = document.getElementById("answer-button")
var checkans = document.getElementById("answer-check")
var viewhighBtn = document.getElementById("view-highscores")
var homeBtn = document.getElementById("home")
var highscorepage = document.getElementById("highscores-page")
var submit = document.getElementById('submit')
var scorepage = document.getElementById('score-page')
var clearBtn = document.getElementById("clear")
var inputscore = document.getElementById("initials")


var timeEl;

let shuffledQuestions, currentQuestionIndex

//view highbtn
viewhighBtn.addEventListener("click", showHigh);

//go to home button
homeBtn.addEventListener('click', () => {
    window.location.reload();
})

//start button
startButton.addEventListener('click', startGame)

//click button 
answerEl.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
var sec = 55;
//timers for quiz time
function timers(){

    var timer = setInterval(function(){
        document.getElementById('time').innerHTML='Time: '+sec+" s";
        sec--;
        if (sec < 1) {
            clearInterval(timer)
        }
    },1000);
}


// function starts the game
function startGame() {
    startEl.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random()-0.5)
    currentQuestionIndex = 0
    question.classList.remove('hide')
    setNextQuestion()
    timers()
}

// gives score page
function scoreEl(){
    window.alert("Game Over!")
    question.classList.add('hide')
    clearInterval(timer)
}


//set next question
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    clearInterval(timers)
}

// showing question after click 
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
    
};

//reseting status
function resetState() {
    clearStatusClass(document.body)
    questionsEl.classList.add('hide')
    answerEl.classList.add('hide')
    while (answerEl.firstChild) {
        answerEl.removeChild
        (answerEl.firstChild)
    }
}
//selecitn answers, give user correct or wrong answer
function selectAnswers(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct

    answerEl.classList.remove("hide")

    if(correct) {
        alert("CORRECT")
    } else {
        alert("WRONG -5")
        if (sec <= 10){
            sec = 0;
            scoreEl()
        } else {
            sec -= 5;
        }
    }
    Array.from(answerEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if(shuffledQuestions.length > currentQuestionIndex + 1){
        answerEl.classList.remove("hide")
    } else {
        question.classList.add('hide')
        scorepage.classList.remove('hide')
        scoreEl()
        clearInterval(sec)
    }
}

// setting the status class
function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}


// savescore
function saveScore() {
    clearInterval(sec);
    sec.textContent = "Time: " + sec;
    setTimeout(function () {
    localStorage.setItem("score", JSON.stringify(score));
    question.classList.add("hide");
    document.getElementById("score-page").classList.remove("hide");
    document.getElementById("user-score").textContent = "User Score is " + sec;
    }, 1500)
   };

// clearing status
function clearStatusClass(element){
     element.classList.remove('correct')
     element.classList.remove('wrong')
}

//loading scores
var loadScores = function () {   
    if (!saveScore) {
    return false;
    }
 // Convert scores from stringfield format into array
    saveScore = JSON.parse(saveScore);
    var initials = document.querySelector("#initials").value;
    var newScore = {
    score: sec,
    initials: initials
    }
    saveScore.push(newScore);
   
    saveScore.forEach(score => {
    initialsField.innerText = score.initials
    scoreField.innerText = score.score
    })
   };

// give user highscore
 function showHigh(initial) {
    document.getElementById("highscores-page").classList.remove("hide")
    document.getElementById("score-page").classList.add("hide");
    startEl.classList.add("hide");
    question.classList.add("hide");
    if (typeof initial == "string") {
    var score = {
    initial, sec
    }
    score.push(score)
    }
   
    var highScoreEl = document.getElementById("highscore");
    highScoreEl.innerHTML = "";
   
    for (i = 0; i < score.length; i++) {
    var div1 = document.createElement("div");
    div1.setAttribute("class", "name-div");
    div1.innerText = score[i].initials;
    var div2 = document.createElement("div");
    div2.setAttribute("class", "score-div");
    div2.innerText = score[i].timeLeft;
   
    highScoreEl.appendChild(div1);
    highScoreEl.appendChild(div2);
    }
   
    localStorage.setItem("scores", JSON.stringify(score));
   
   };
   

// question element
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
        
    
