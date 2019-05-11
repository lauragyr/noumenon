//var fs = require('file-system');
// select all elements (HTML)
const start = document.getElementById("start");
const question = document.getElementById("question");
const questionContainer = document.getElementById("questionContainer");
let choices = document.getElementsByClassName("choices");
let nextButton = document.getElementById("nextButton");
let homescreen = document.getElementById("homescreen");

let a1;

var q1a1 = document.getElementById('q1a1'); // grab a reference to your element
q1a1.addEventListener('click', function(){setQ1Value(1)});
var q1a2 = document.getElementById('q1a2'); // grab a reference to your element
q1a2.addEventListener('click', function(){setQ1Value(2)});
var q1a3 = document.getElementById('q1a3'); // grab a reference to your element
q1a3.addEventListener('click', function(){setQ1Value(3)});
var q1a4 = document.getElementById('q1a4'); // grab a reference to your element
q1a4.addEventListener('click', function(){setQ1Value(4)});
var q1a5 = document.getElementById('q1a5'); // grab a reference to your element
q1a5.addEventListener('click', function(){setQ1Value(5)});
var q1a6 = document.getElementById('q1a6'); // grab a reference to your element
q1a6.addEventListener('click', function(){setQ1Value(6)});

function setQ1Value(value){

    var elements = document.getElementsByClassName('activeCircle');
    if(elements.length > 0){
        for(let i = 0; i < elements.length; i++){
            elements[i].className ="circle";
        }
    }

    switch (value){
        case 1:
            a1 = 1;
            q1a1.className = "circle activeCircle";
        break;

        case 2:
            a1 = 2;
            q1a2.className = "circle activeCircle";
        break;

        case 3:
            a1 = 3;
            q1a3.className = "circle activeCircle";
        break;

        case 4:
            a1 = 4;
            q1a4.className = "circle activeCircle";
        break;

        case 5:
            a1 = 5;
            q1a5.className = "circle activeCircle";
        break;

        case 6:
            a1 = 6;
            q1a6.className = "circle activeCircle";
        break;
    }

}


//start quiz
start.onclick = function() {
    homescreen.style.display = "none";
    questionContainer.style.display = "block";
    //question.append(questionLibrary[0].question);
}

// looping questions
function questionLoop() {
for(let i=0; i < question.length; i++) {
}
}


/*
nextButton.onclick = function() {
    for(let i=0; i < question.length; i++) {
    question.append(questionLibrary[i].question);
    }
    //console.log("it works");
}*/
