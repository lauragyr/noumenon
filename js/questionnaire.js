//start-button
let startButton = document.getElementById("start");
let startScreen = document.getElementById("homescreen");

//questionsSwitch
let questionSwitch = [];

for (let i = 1; i < 18; i++)
{
    let questionString = "questionBox" + i;
    let obj = document.getElementById(questionString);
    questionSwitch.push(obj);
}

questionSwitch.forEach(function (questionBox, index, arr)
{
    let possibleButtons = [];
    possibleButtons = possibleButtons.concat([].slice.call(questionBox.getElementsByClassName("circle")));
    possibleButtons = possibleButtons.concat([].slice.call(questionBox.getElementsByClassName("choiceImage")));
    possibleButtons = possibleButtons.concat([].slice.call(questionBox.getElementsByClassName("choiceAnswer")));
    possibleButtons = possibleButtons.concat([].slice.call(questionBox.getElementsByClassName("choiceColor")));

    possibleButtons.forEach(function (button, buttonArrIndex)
    {
        if (index < arr.length)
        {
            button.addEventListener("click", function()
            {
                setTimeout(function() {
                    arr[index].style.display = "none";
                    arr[index + 1].style.display = "block";
                }, 500);
                
            });
        }
    });
});
 function myfunction() {
 }

document.getElementById("start").addEventListener("click", function(){
    setTimeout(function() {
        questionBox1.style.display = "block";
    startScreen.style.display = "none";
    }, 500);
    start.className = "button activeButton";
  });