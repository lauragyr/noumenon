// socket stuff
let ip = "10.155.112.134"; // laura's ip-adresse wlan

var socket = io(ip + ':3000'); //IP-Adresse WLAN
socket.on('connect', function () {
  console.log("connected");
});
socket.on('event', function (data) {
  console.log("event triggered");
});
socket.on('disconnect', function () {
  console.log("disconnected");
});


//  questionSwitch
let questionSwitch = [];

for (let i = 0; i < 15; i++) {
  let questionString = "questionBox" + (i + 1);
  let obj = document.getElementById(questionString);
  questionSwitch.push(obj);
}

questionSwitch.forEach(function (questionBox, index, arr) {
  let possibleButtons = [];
  possibleButtons = possibleButtons.concat([].slice.call(questionBox.getElementsByClassName("circle")));
  possibleButtons = possibleButtons.concat([].slice.call(questionBox.getElementsByClassName("choiceImage")));
  possibleButtons = possibleButtons.concat([].slice.call(questionBox.getElementsByClassName("choiceAnswer")));

  possibleButtons.forEach(function (button, buttonArrIndex) {
    if (index < arr.length) {
      button.addEventListener("click", function () {
        setTimeout(function () {
          arr[index].style.display = "none";
          arr[index + 1].style.display = "block";
        }, 500);

      });
    }
  });
});

function end() {
  socket.emit('answers', -1);
  location.reload()
}

//reload all content
document.addEventListener("DOMContentLoaded", function () {
  socket.emit('answers', 0);
});


//start-button on homescreen
document.getElementById("start").addEventListener("click", function () {
  setTimeout(function () {
    socket.emit('answers', 0);
    questionBox1.style.display = "block";
    homescreen.style.display = "none";
  }, 500);
  start.className = "button activeButton";
})

//restart-button on last page
document.getElementById("backto").addEventListener("click", function () {
  setTimeout(function end() {
    startScreen.style.display = "block";
    questionBox15.style.display = "none";
  }, 500);
  backto.style.border = "none";
  backto.className = "endButton activeEnd";
  start.className = "button";
})

//print-button switch to screen active print
document.getElementById("drucken").addEventListener("click", function () {
  setTimeout(function () {
    socket.emit('answers', -2);
    questionBox15.style.display = "none";
    printBox.style.display = "block";
  }, 500);
  drucken.style.border = "none";
  drucken.className = "printButton activeEnd";
})
