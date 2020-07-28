const startButton = document.getElementById("start-btn") 
const nextButton = document.getElementById("next-btn") 
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
var score = 0;

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++ 
    setNextQuestion()
})


function startGame() { 
console.log("Started")
startButton.style.display="none" 
shuffledQuestions = questions.sort(() => Math.random() - .5) 
currentQuestionIndex = 0
questionContainerElement.style.display="block" 
setNextQuestion()
} 
 
function setNextQuestion() { 
resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}  

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text 
        button.classList.add("btn")  
        if (answer.correct) {
            button.dataset.correct = answer.correct 
            score++;
        } else {
            score--;
        }
        button.addEventListener("click", selectAnswer) 
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer(e) {
const selectedButton = e.target 
const correct = selectedButton.dataset.correct 
setStatusClass(document.body, correct) 
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
}) 
if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide") 
} else (
startButton.innerText = "Restart"
)
}  

function resetState() {
    nextButton.classList.add("hide") 
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild 
        (answerButtonsElement.firstChild)
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
        if (correct) {
           element.classList.add("correct")    
        } 
        else {
            element.classList.add("wrong")    
         }
}

function clearStatusClass(element) {
    element.classList.remove("correct") 
    element.classList.remove("wrong")
}

const questions = [
    {
        question: "1+1",
        answers: [
{ text: "2", correct: true}, 
{ text: "11", correct: false}, 
{ text: "10", correct: false}, 
{ text: "1", correct: false}
        ]
    }, 
    {
        question: "1+5", 
        answers: [
{ text: "15", correct: false }, 
{ text: "4", correct: false}, 
{ text: "8", correct: false}, 
{ text: "6", correct: true}
        ]
    }, 
    {
        question: "2*5", 
        answers: [
{ text: "25", correct: false},
{ text: "10", correct: true}, 
{ text: "7", correct: false}, 
{ text: "20", correct: false}
        ]
    }, 
    {
        question: "7+8", 
        answers: [
            { text: "15", correct: true }, 
            { text: "56", correct: false }, 
            { text: "14", correct: false }, 
            { text: "18", correct: false } 
        ]
    }, 
    {
        question: "4*6",
        answers: [
            { text: "30", correct: false}, 
            { text: "25", correct: false}, 
            { text: "24", correct: true}, 
            { text: "21", correct: false}
        ]
    }, 
    {
        question: "7*8",
        answers: [
{ text: "64", correct: false}, 
{ text: "56", correct: true}, 
{ text: "46", correct: false}, 
{text: "58", correct: false}
        ]
    }, 
    {
        question: "(6*6)+6",
        answers: [
{ text: "39", correct: false}, 
{ text: "49", correct: false}, 
{ text: "56", correct: false}, 
{text: "42", correct: true}
        ]
    }, 
    {
        question: "(14-5)*7",
        answers: [
{ text: "64", correct: false}, 
{ text: "49", correct: false}, 
{ text: "63", correct: true}, 
{text: "59", correct: false}
        ]
    },  
    {
        question: "(8*6)/12",
        answers: [
{ text: "12", correct: false}, 
{ text: "4", correct: true}, 
{ text: "18", correct: false}, 
{text: "16", correct: false}
        ]
    },
    {
        question: "50/(5*5)",
        answers: [
{ text: "4", correct: false}, 
{ text: "10", correct: false}, 
{ text: "5", correct: false}, 
{text: "2", correct: true}
        ]
    },   
    {
        question: "(7*6)+(3*8)",
        answers: [
{ text: "49", correct: false}, 
{ text: "66", correct: true}, 
{ text: "64", correct: false}, 
{text: "56", correct: false}
        ]
    },
    {
        question: "(2*3)^2",
        answers: [
{ text: "36", correct: true}, 
{ text: "12", correct: false}, 
{ text: "42", correct: false}, 
{text: "26", correct: false}
        ]
    },     {
        question: "144/(12*3)",
        answers: [
{ text: "8", correct: false}, 
{ text: "12", correct: false}, 
{ text: "4", correct: true}, 
{text: "16", correct: false}
        ]
    }, 
    {
        question: "[(6*8)/(32/8)]^2",
        answers: [
{ text: "121", correct: false}, 
{ text: "144", correct: true}, 
{ text: "156", correct: false}, 
{text: "136", correct: false}
        ]
    },  
    {
        question: "[(4*9)/12]*3",
        answers: [
{ text: "9", correct: true}, 
{ text: "15", correct: true}, 
{ text: "12", correct: false}, 
{text: "18", correct: false}
        ]
    },    {
        question: "(72/6)+24",
        answers: [
{ text: "41", correct: false}, 
{ text: "60", correct: false}, 
{ text: "36", correct: true}, 
{text: "32", correct: false}
        ]
    }, 
    {
        question: "3^3",
        answers: [
{ text: "21", correct: false}, 
{ text: "27", correct: true}, 
{ text: "9", correct: false}, 
{text: "24", correct: false}
        ]
    }, 
    {
        question: "(6/3)*(12/4)",
        answers: [
{ text: "6", correct: true}, 
{ text: "12", correct: false}, 
{ text: "8", correct: false}, 
{text: "10", correct: false}
        ]
    }, 
    {
        question: "(9^2)-(5*4)",
        answers: [
{ text: "71", correct: false}, 
{ text: "20", correct: false}, 
{ text: "81", correct: false}, 
{text: "61", correct: true}
        ]
    }, 
    {
        question: "[(7*8)+25]/9",
        answers: [
{ text: "9", correct: true}, 
{ text: "8", correct: false}, 
{ text: "11", correct: false}, 
{text: "12", correct: false}
        ]
    }, 
    {
        question: "(6*5)/3",
        answers: [
{ text: "6", correct: false}, 
{ text: "10", correct: true}, 
{ text: "9", correct: false}, 
{text: "4", correct: false}
        ]
    }, 
    {
        question: "(4*12)/6",
        answers: [
{ text: "8", correct: true}, 
{ text: "16", correct: false}, 
{ text: "4", correct: false}, 
{text: "12", correct: false}
        ]
    }, 
 ] 