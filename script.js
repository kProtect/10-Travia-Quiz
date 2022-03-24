var start = document.querySelector("#start")
var startbtn = document.querySelector("button")
var question = document.querySelector("#question-container")
var nextbtn = document.querySelector("button")
var highscores = document.querySelector("#highscores")
var highbtn = document.querySelector("button")
var viewhigh = document.querySelector("#view-highscroes")
var time = document.querySelector("#time")
var question = document.querySelector("#question")
var answer = document.querySelector("#answer")

var HIDE = "hide";
var question = [
{
    question: "In which continent are Chile, Argentina and Brazil?",
    answer: ["North America","South America", "Europe", "Australasia"],
    answer: 1
},
{
    question: "Which brand of soup featured in one of Andy Warhols most famous pop art pieces?",
    answer: ["Heinz","Campbells", "Baxters", "Knorr"],
    answer: 1
},
{
    question: "The Mad Hatter and the Cheshire Cat are characters in which famous book?",
    answer: ["Winne-the-Pooh", "Charlotte's Web", "Charlie and the Chocolate Factory",
    "Alice in Wonderland"],
    answer: 1
},
{
    question: "What measurement scale is used to determine wind speed?",
    answer: ["Beaufort scale", "Richter scale", "Synoptic scale", "Gusting scale"],
    answer: 1

},
{
    question: "In which city were the 1992 Summer Olympics held?",
    answer: ["Atlanta", "Barcelona", "Sydney", "Seoul"],
    answer: 1
},
{
    question: "What other country, besides the US, uses the US dollar as its official currency?",
    answer: ["Ecuador", "Canada", "Mexico", "United Kingdom"],
    answer: 1
},
{
    question: "How many sides does a Dodecahedron have??",
    answer: ["12", "24", "14", "20"],
    answer: 1
},
{
    question: "The Statue of Liberty was a gift to the United States from which European country?",
    answer: ["Belgium" ,  "Germany" ,  "Spain" ,  "France"],
    answer: 1
},
{
    question: "Which traditional Spanish dance originated in Andalusia and is recognised by UNESCO as a heritage of humanity?",
    answer: ["Sardana",  "Tango", "Flamenco", "Paso Doble"],
    answer: 1
},
{
    question: "The human body is made up of approximately how much water?",
    answer: ["40%", "50%", "60%", "70%"],
    answer: 1
},
]

var cureentQuestions = 0;

var All = [
    start,
    question,
    highscores,
    viewhigh,
    time
];

function init() {
    setEventListeners();
}

function setState(state) {
    switch (state) {
    case 1:
        populateQuestion();
        break;
        default:
        break;
    }
}

All.forEach(function (ele) {
    var possibleStatesAttr = ele.getAttribute("data-states");
    var possibleStates = JSON.parse(possibleStatesAttr);
    if (possibleStates.incldues(state)) {
        ele.classList.remove(HIDE);
    } else {
     ele.classList.add(HIDE);
    }
});


