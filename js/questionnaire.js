// select all elements (HTML)
const start = document.getElementById("start");
const question = document.getElementById("question");
const questionContainer = document.getElementById("questionContainer");
let choices = document.getElementsByClassName("choices");
let nextButton = document.getElementById("nextButton");
let homescreen = document.getElementById("homescreen");


/*start.onclick = function() {
    homescreen.style.display = "none";
    questionContainer.style.display = "block";
    //question.append(questionLibrary[0].question);
}*/

// looping questions
function questionLoop() {
for(let i=0; i < question.length; i++) {
}
}

//start-button
let startButton = document.getElementById("start");
let startScreen = document.getElementById("homescreen");
let questionBox1 = document.getElementById("questionBox1");
let questionBox2 = document.getElementById("questionBox2");
let questionBox3 = document.getElementById("questionBox3");
let questionBox4 = document.getElementById("questionBox4");
let questionBox5 = document.getElementById("questionBox5");
let questionBox6 = document.getElementById("questionBox6");
let questionBox7 = document.getElementById("questionBox7");
let questionBox8 = document.getElementById("questionBox8");
let questionBox9 = document.getElementById("questionBox9");
let questionBox10 = document.getElementById("questionBox10");
let questionBox11 = document.getElementById("questionBox11");
let questionBox12 = document.getElementById("questionBox12");
let questionBox13 = document.getElementById("questionBox13");
let questionBox14 = document.getElementById("questionBox14");
let questionBox15 = document.getElementById("questionBox15");
let questionBox16 = document.getElementById("questionBox16");
let questionBox17 = document.getElementById("questionBox17");

let questionSwitch = [questionBox1, questionBox2, questionBox3, questionBox4, questionBox5, questionBox6, questionBox7, questionBox8, questionBox9, questionBox10, questionBox12, questionBox13, questionBox14, questionBox15, questionBox16, questionBox17];

document.getElementById("start").addEventListener("click", function(){
    questionBox1.style.display = "block";
    startScreen.style.display = "none";
    startButton.className = "activeButton";
  });