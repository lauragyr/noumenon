//Answers
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

//a2
let a2;

var q2a1 = document.getElementById('q2a1'); // grab a reference to your element
q2a1.addEventListener('click', function(){setQ2Value(1)});
var q2a2 = document.getElementById('q2a2'); // grab a reference to your element
q2a2.addEventListener('click', function(){setQ2Value(2)});
var q2a3 = document.getElementById('q2a3'); // grab a reference to your element
q2a3.addEventListener('click', function(){setQ2Value(3)});
var q2a4 = document.getElementById('q2a4'); // grab a reference to your element
q2a4.addEventListener('click', function(){setQ2Value(4)});

function setQ2Value(value){

    var elements = document.getElementsByClassName('activeImage');
    if(elements.length > 0){
        for(let i = 0; i < elements.length; i++){
            elements[i].className ="choiceImage";
        }
    }

    switch (value){
        case 1:
            a2 = 1;
            q2a1.className = "choiceImage activeImage";
        break;

        case 2:
            a2 = 2;
            q2a2.className = "choiceImage activeImage";
        break;

        case 3:
            a2 = 3;
            q2a3.className = "choiceImage activeImage";
        break;

        case 4:
            a2 = 4;
            q2a4.className = "choiceImage activeImage";
        break;
    }
}

