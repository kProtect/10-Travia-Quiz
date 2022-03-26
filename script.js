const question = document.getElementById("question");
const choices = Array.from(document.querySelector(".choice-text"));
console.log(choices);

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0 ;
let availableQuestion = [];

let questions = [
    {
        question: "In which continent are Chile, Argentina and Brazil?",
        choice1: "<North America>",
        choice2: "<South America>",
        choice3: "<Europe>",
        choice4: "<Australasia>",
        answer: 2
    },
    {
        question: "Which brand of soup featured in one of Andy Warhols most famous pop art pieces?",
        choice1: "<Heinz>",
        choice2: "<Campbells>",
        choice3: "<Baxters>",
        choice4: "<Knorr>",
        answer: 2
    },
    {
        question: "The Mad Hatter and the Cheshire Cat are characters in which famous book?",
        choice1: "<Winne-the-Pooh>",
        choice2: "<Charlotte's Web>",
        choice3: "<Charlie and the Chocolate Factory>",
        choice4: "<Alice in Wonderland>",
        answer: 4
    },
    {
        question: "What measurement scale is used to determine wind speed?",
        choice1: "<Beaufort scale>",
        choice2: "<Richter scale>",
        choice3: "<Synoptic scale>", 
        choice4: "<Gusting scale>",
        answer: 1
    
    },
    {
        question: "In which city were the 1992 Summer Olympics held?",
        choice1: "<Atlanta>",
        choice2: "<Barcelona>", 
        choice3: "<Sydney>",
        choice4: "<Seoul>",
        answer: 2
    },
    {
        question: "What other country, besides the US, uses the US dollar as its official currency?",
        choice1: "<Ecuador>",
        choice2: "<Canada>", 
        choice3:"<Mexico>", 
        choice4:"<United Kingdom>",
        answer: 1
    },
    {
        question: "How many sides does a Dodecahedron have??",
        choice1: "<12>",
        choice2: "<24>",
        choice3: "<14>",
        choice4: "<20>",
        answer: 1
    },
    {
        question: "The Statue of Liberty was a gift to the United States from which European country?",
        choice1: "<Belgium>" , 
        choice2: "<Germany>" , 
        choice3: "<Spain>" , 
        choice4: "<France>",
        answer: 4
    },
    {
        question: "Which traditional Spanish dance originated in Andalusia and is recognised by UNESCO as a heritage of humanity?",
        choice1: "<Sardana>",
        choice2:  "<Tango>",
        choice3: "<Flamenco>",
        choice4: "<Paso Doble>",
        answer: 3
    },
    {
        question: "The human body is made up of approximately how much water?",
        choice1: "<40%>",
        choice2: "<50%>",
        choice3: "<60%>",
        choice4: "<70%>",
        answer: 3
    },
]

const CORRECT_BONUS = 1;
const MAX_QUESTION = 1;

startGame = () => {
    questionCounter =0;
    score = 0;
    availableQuestion = [questions];
    console.log(availableQuestion)
    getNewQuestion();
};

getNewQuestion = () => {

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestion.length);
        currentQuestion = availableQuestion[questionIndex];
        question.innerText = currentQuestion.question;

        choices.forEach (choice => {
            const number = choice.dataset['number'];
            choice.innerText = currentQuestion['choice' + number];
        })
        availableQuestion.splice(questionIndex, 1);

        acceptingAnswers = true;
};

choices.forEach(choice => {
    choices.addEventListener('click', e =>{
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestion();
    });
});

startGame();
     



