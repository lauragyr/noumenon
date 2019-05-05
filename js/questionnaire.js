// select all elements (HTML)
const start = document.getElementById("start");
const question = document.getElementById("question");
const questionContainer = document.getElementById("questionContainer");
let choices = document.getElementsByClassName("choices");
let nextButton = document.getElementById("nextButton");
let homescreen = document.getElementById("homescreen");


// create questions
let questionLibrary = [
    {
        question: "Du probierst gerne neue Dinge aus.",
        choice1: "Ja aber voll",
        choice2: "Ja schon",
    },
    {
        question: "Du bist jemand, der sich an einem Gespräch mit Freunden beteiligt und nicht nur zuhört.",
        choice1: "Ja aber voll",
        choice2: "Ja schon",
    }
]


//start quiz
start.onclick = function() {
    console.log(questionLibrary[0].question);
    homescreen.style.display = "none";
    questionContainer.style.display = "block";
    question.append(questionLibrary[0].question);
}

// looping questions
function questionLoop() {
for(let i=0; i < question.length; i++) {
}
}

//get score on click (dots)
function score(i) {
    let score = 0;
    score = 0 + i;
    console.log(score);
}

/*
nextButton.onclick = function() {
    for(let i=0; i < question.length; i++) {
    question.append(questionLibrary[i].question);
    }
    //console.log("it works");
}*/
