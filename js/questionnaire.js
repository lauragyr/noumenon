//start-button
let startButton = document.getElementById("start");
let startScreen = document.getElementById("homescreen");

//  questionSwitch
let questionSwitch = [];

for (let i = 1; i < 19; i++)
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

function end() {
    socket.emit('answers', -1);
    //socket.emit('answers', 0); //clear server
    location.reload()
     } 

function drucken(){
    socket.emit('print');
}

document.getElementById("start").addEventListener("click", function(){
    setTimeout(function() {
    socket.emit('answers', 0);
    questionBox1.style.display = "block";
    startScreen.style.display = "none";
    }, 500);
    start.className = "button activeButton";
})

document.getElementById("end").addEventListener("click", function(){
    
    socket.emit('answers', -1);
    startScreen.style.display = "block";
    questionBox18.style.display = "none";
    location.reload()
    })