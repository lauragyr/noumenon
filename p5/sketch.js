//data-stuff
let gegebenAntworten;
let data;
let surveyData = [];

//parameter-stuff
let possibleParameters;
let lastQuestionAnswered = false;

possibleParameters = {}

function resetAllParameters() {
  possibleParameters = {
    colorR: 0,
    colorG: 0,
    colorB: 0,
    angle: 1,
    pos: 60,
    npoints: 25,
    radius: 60,
    distance: 0.1,
    bgColor: "#ffffff",
    generalAngle: 1,
    alpha: 50,
    alphaStep: 2
  }

  lastQuestionAnswered = false;
}
resetAllParameters();

//video-stuff
let ctracker;
let videoInput

//--------------//

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  noStroke();
  /*
    videoInput = createCapture(VIDEO);
    videoInput.size(800, 600);
    videoInput.position(0, 0);
    videoInput.hide();

    // setup tracker
    ctracker = new clm.tracker();
    ctracker.init();
    ctracker.start(videoInput.elt)
  */
}

// which one is the last object
function drawData(data) {
  if (gegebenAntworten != Object.keys(data).length) {
    gegebenAntworten = Object.keys(data).length;
    possibleParameters.alpha = 50;
    //let lastAnswer = data[Object.keys(data)[gegebenAntworten - 1]];
  }

  surveyData = [
    data.antwort1,
    data.antwort2,
    data.antwort3,
    data.antwort4,
    data.antwort5,
    data.antwort6,
    data.antwort7,
    data.antwort8,
    data.antwort9,
    data.antwort10,
    data.antwort11,
    data.antwort12,
    data.antwort13,
    data.antwort14,
  ];
}

function draw() {
  frameRate(3);
  //video-tracking übergabe aufgabe on face-detection
  /*if (ctracker.getCurrentPosition()[0]) {
console.log("chabis")
  } else {
console.log("nix")
  }*/
  translate(width / 2, height / 2);
  loadJSON("data.json", drawData);

  //clearing canvas after generating visual
  if (surveyData[0] === 0) {
    window.printed = false
    resetAllParameters();
    return clear();
  }

  if (surveyData[0] === -1) {
    window.printed = false
    resetAllParameters();
    return;
  }

  if (surveyData[0] === -2) {
    if (window.printed) return
    window.printed = true

    var dataURL = document.querySelector('.p5Canvas').toDataURL("image/png");
    document.getElementById('image').value = dataURL;
    var fd = new FormData(document.forms["form1"]);

    document.forms["form1"].submit()

    resetAllParameters();
    return;
  }

  if (surveyData[13] != undefined) {
    setTimeout(function () {
      lastQuestionAnswered = true;
    }, 5000);
  }

  overwriteEachAnswer();
  visualize();

  //console.log(possibleParameters);
}

//create polygon
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function overwriteEachAnswer() {
  possibleParameters.generalAngle -= possibleParameters.distance;
  possibleParameters.alpha -= possibleParameters.alphaStep;
  if (possibleParameters.alpha < 0) {
    possibleParameters.alpha = 0;
  }

  surveyData.forEach(
    function handleAnswers(value, index, array) {
      if (typeof (value) != "undefined") {
        //console.log("surveyNumber " + index + " answer: " + value);
        changeValuesBasedOnSurvey(index, value);
      }
    }
  );
}

function setParams(obj) {
  if (typeof (obj.angle) != "undefined") {
    possibleParameters.angle = obj.angle;
  }
  if (typeof (obj.generalAngle) != "undefined") {
    possibleParameters.generalAngle = obj.generalAngle;
  }
  if (typeof (obj.pos) != "undefined") {
    possibleParameters.pos = obj.pos;
  }
  if (typeof (obj.npoints) != "undefined") {
    possibleParameters.npoints = obj.npoints;
  }
  if (typeof (obj.radius) != "undefined") {
    possibleParameters.radius = obj.radius;
  }
  if (typeof (obj.distance) != "undefined") {
    possibleParameters.distance = obj.distance;
  }
  if (typeof (obj.colorR) != "undefined") {
    possibleParameters.colorR = obj.colorR;
  }
  if (typeof (obj.colorG) != "undefined") {
    possibleParameters.colorG = obj.colorG;
  }
  if (typeof (obj.colorB) != "undefined") {
    possibleParameters.colorB = obj.colorB;
  }
  if (typeof (obj.bgColor) != "undefined") {
    possibleParameters.bgColor = obj.bgColor;
  }
  if (typeof (obj.alphaStep) != "undefined") {
    possibleParameters.alphaStep = obj.alphaStep;
  }
}

function visualize() {
  if (lastQuestionAnswered) {
    return;
  }

  document.body.style.background = possibleParameters.bgColor;

  fill
    (
      possibleParameters.colorR,
      possibleParameters.colorG,
      possibleParameters.colorB,
      possibleParameters.alpha
    );
  rotate(possibleParameters.generalAngle);

  polygon
    (
      possibleParameters.pos,
      possibleParameters.pos,
      possibleParameters.radius,
      possibleParameters.npoints
    );
}

function changeValuesBasedOnSurvey(surveyNumber, answerNumber) {
  let changedParams = {};

  switch (surveyNumber + 1) // 1 - 17
  {
    case 1:
      switch (answerNumber) // 1 - 4 oder 6
      {
        case 1:
          changedParams.pos = 140;
          changedParams.radius = 140;
          //violet
          changedParams.colorR = random(100, 120);
          changedParams.colorG = random(20, 40);
          changedParams.colorB = random(110, 130);
          blendMode(BLEND);
          break;
        case 6:
          changedParams.pos = 40;
          changedParams.radius = 40;
          //rot
          changedParams.colorR = random(200, 220);
          changedParams.colorG = random(20, 40);
          changedParams.colorB = random(20, 40);
          blendMode(BLEND);
          break;
        case 2:
          changedParams.pos = 60;
          changedParams.radius = 120;
          //blau
          changedParams.colorR = 0;
          changedParams.colorG = random(170, 190);
          changedParams.colorB = random(230, 250);
          blendMode(BLEND);
          break;
        case 5:
          changedParams.pos = 120;
          changedParams.radius = 60;
          //pink
          changedParams.colorR = random(230, 250);
          changedParams.colorG = 0;
          changedParams.colorB = random(90, 110);
          blendMode(BLEND);
          break;
      }
      break;
    case 2:
      changedParams.alphaStep = 4;

      switch (answerNumber) // 0 - 4 oder 6
      {
        case 1:
          changedParams.pos = 150;
          changedParams.radius = 100;

          blendMode(DODGE);

          //violet
          changedParams.colorR = random(120, 140);
          changedParams.colorG = random(30, 50);
          changedParams.colorB = random(110, 130);
          break;
        case 2:
          changedParams.pos = 130;
          changedParams.radius = 90;

          blendMode(OVERLAY);

          //blau
          changedParams.colorG = random(140, 160);
          changedParams.colorB = random(230, 250);
          changedParams.colorR = 0;
          break;
        case 3:
          changedParams.pos = 110;
          changedParams.radius = 80;

          blendMode(BLEND);

          //grün
          changedParams.colorG = random(230, 250);
          changedParams.colorB = 0;
          changedParams.colorR = random(100, 120);
          break;
        case 4:
          changedParams.pos = 90;
          changedParams.radius = 70;

          blendMode(BLEND);

          //gelb
          changedParams.colorB = 0;
          changedParams.colorR = random(235, 255);
          changedParams.colorG = random(220, 240);
          break;
        case 5:
          changedParams.pos = 70;
          changedParams.radius = 60;

          blendMode(DIFFERENCE);

          //pink
          changedParams.colorG = 0;
          changedParams.colorR = random(230, 250);
          changedParams.colorB = random(100, 120);
          break;
        case 6:
          changedParams.pos = 50;
          changedParams.radius = 50;

          blendMode(MULTIPLY);

          //rot
          changedParams.colorG = random(20.40);
          changedParams.colorB = random(20, 40);
          changedParams.colorR = random(235, 255);
          break;
      }
      break;
    case 3:
      changedParams.bgColor = "#000000";
      changedParams.alphaStep = 0.5;

      switch (answerNumber) // 0 - 4 oder 6
      {
        case 1:
          changedParams.pos = 135;
          blendMode(DODGE)
          changedParams.difference = 0.3;
          break;
        case 2:
          changedParams.pos = 115;
          blendMode(DODGE)
          changedParams.difference = 0.27;
          break;
        case 3:
          changedParams.pos = 95;
          blendMode(LIGHTEST)
          changedParams.difference = 0.24;
          break;
        case 4:
          changedParams.pos = 75;
          blendMode(DARKEST)
          changedParams.difference = 0.21;
          break;
        case 5:
          changedParams.pos = 55;
          blendMode(MULTIPLY)
          changedParams.difference = 0.18;
          break;
        case 6:
          changedParams.pos = 35;
          blendMode(EXCLUSION)
          changedParams.difference = 0.15;
          break;
      }
      break;
    case 4:
      switch (answerNumber) // 1 - 4 oder 6
      {
        case 5:
          changedParams.pos = 50;
          changedParams.radius = 60;

          blendMode(MULTIPLY)
          break;
        case 6:
          changedParams.pos = 40
          changedParams.radius = 40;

          blendMode(EXCLUSION)
          break;
        case 2:
          changedParams.pos = 90
          changedParams.radius = 120;

          blendMode(SCREEN)
          break;
        case 1:
          changedParams.pos = 1
          changedParams.radius = 140;

          blendMode(DODGE)
          break;
      }
      break;
    case 5:
      switch (answerNumber) // 0 - 4 oder 6
      {
        case 1:
          changedParams.pos = 160;
          changedParams.npoints = 50;

          blendMode(DODGE)
          break;
        case 2:
          changedParams.pos = 135;
          changedParams.npoints = 30;

          blendMode(OVERLAY)
          break;
        case 3:
          changedParams.pos = 110;
          changedParams.npoints = 15;
          blendMode(LIGHTEST)
          break;
        case 4:
          changedParams.pos = 85;
          changedParams.npoints = 8;
          blendMode(DARKEST)
          break;
        case 5:
          changedParams.pos = 60;
          changedParams.npoints = 5;

          blendMode(MULTIPLY)
          break;
        case 6:
          changedParams.pos = 35;
          changedParams.npoints = 3;

          blendMode(EXCLUSION)
          break;
      }
      break;
    case 6:
      changedParams.bgColor = "#2D2D2D";

      changedParams.colorG = 255;
      changedParams.colorR = 255;
      changedParams.colorB = 255;

      switch (answerNumber) // 0 - 4 oder 6
      {
        case 1:
          changedParams.pos = 140;
          blendMode(DODGE);

          changedParams.difference = 0.1;
          break;
        case 2:
          changedParams.pos = 120;
          blendMode(DODGE);

          changedParams.difference = 0.1;
          break;
        case 3:
          changedParams.pos = 100;
          blendMode(DODGE);

          changedParams.difference = 0.1;
          break;
        case 4:
          changedParams.pos = 80;
          blendMode(DODGE);

          changedParams.difference = 0.1;
          break;
        case 5:
          changedParams.pos = 60;
          blendMode(DODGE);

          changedParams.difference = 0.1;
          break;
        case 6:
          changedParams.pos = 40;
          blendMode(DODGE);

          changedParams.difference = 0.1;
          break;
      }
      break;
    case 7:
      switch (answerNumber) // 0 - 4 oder 6
      {
        case 1:
          blendMode(DODGE);
          changedParams.pos = 133;
          changedParams.radius = 110;

          //violet
          changedParams.colorR = random(100, 120);
          changedParams.colorG = random(30, 50);
          changedParams.colorB = random(110, 130);
          break;
        case 2:
          blendMode(OVERLAY);
          changedParams.pos = 122
          changedParams.radius = 100;

          //blau
          changedParams.colorG = random(150, 170);
          changedParams.colorB = random(230, 250);
          changedParams.colorR = 0;
          break;
        case 5:
          changedParams.pos = 88;
          changedParams.radius = 70;
          blendMode(MULTIPLY)

          //pink
          changedParams.colorG = 0;
          changedParams.colorR = random(230, 250);
          changedParams.colorB = random(100, 120);
          break;
        case 6:
          changedParams.pos = 77;
          blendMode(EXCLUSION)
          changedParams.radius = 60;

          //rot
          changedParams.colorG = random(20, 40);
          changedParams.colorB = random(30, 50);
          changedParams.colorR = random(235, 255);
          break;
      }
      break;
    case 8:
      switch (answerNumber) // 0 - 4 oder 6
      {
        case 6:
          changedParams.pos = 66;
          changedParams.npoints = 3;

          blendMode(MULTIPLY);
          break;
        case 1:
          changedParams.pos = 122;
          changedParams.npoints = 40;

          blendMode(DODGE);
          break;
        case 5:
          changedParams.pos = 77;
          changedParams.npoints = 6;

          blendMode(EXCLUSION);
          break;
        case 2:
          changedParams.pos = 111;
          changedParams.npoints = 20;

          blendMode(SCREEN);
          break;
      }
      break;
    case 9:
      changedParams.bgColor = "#ffffff";
      switch (answerNumber) // 0 - 4 oder 6
      {
        case 1:

          changedParams.pos = 1
          changedParams.radius = 110;

          //violet
          changedParams.colorR = 120;
          changedParams.colorG = 30;
          changedParams.colorB = 110;
          break;
        case 2:
          changedParams.pos = 1
          changedParams.radius = 90;

          //blau
          changedParams.colorR = 0;
          changedParams.colorG = 150;
          changedParams.colorB = 250;
          break;
        case 3:
          changedParams.pos = 12
          changedParams.radius = 70;

          //grün
          changedParams.colorR = 120;
          changedParams.colorG = 250;
          changedParams.colorB = 0;
          break;
        case 4:
          changedParams.pos = 11
          changedParams.radius = 50;

          //gelb
          changedParams.colorR = 255;
          changedParams.colorG = 220;
          changedParams.colorB = 0;
          break;
        case 5:
          changedParams.pos = 10
          changedParams.radius = 30;

          //pink
          changedParams.colorR = 250;
          changedParams.colorG = 0;
          changedParams.colorB = 100;
          break;
        case 6:
          changedParams.pos = 98
          changedParams.radius = 10;

          //rot
          changedParams.colorR = 255;
          changedParams.colorG = 20;
          changedParams.colorB = 30;
          break;
      }
      break;
    case 10:
      switch (answerNumber) // 0 - 4 oder 6
      {
        case 1:
          changedParams.pos = 135;
          blendMode(DODGE);
          changedParams.radius = 130;

          changedParams.distance = 0.3;
          break;
        case 2:
          changedParams.pos = 115;
          blendMode(SCREEN);
          changedParams.radius = 110;

          changedParams.distance = 0.27;
          break;
        case 3:
          changedParams.pos = 95;
          blendMode(LIGHTEST);
          changedParams.radius = 90;

          changedParams.distance = 0.24;
          break;
        case 4:
          changedParams.pos = 75;
          blendMode(DARKEST);
          changedParams.radius = 70;

          changedParams.distance = 0.21;
          break;
        case 5:
          changedParams.pos = 55;
          blendMode(MULTIPLY);
          changedParams.radius = 50;

          changedParams.distance = 0.18;
          break;
        case 6:
          changedParams.pos = 35;
          blendMode(BURN);
          changedParams.radius = 30;

          changedParams.distance = 0.15;
          break;
      }

      break;
    case 11:
      changedParams.bgColor = "#2D2D2D";
      switch (answerNumber) // 0 - 4 oder 6
      {
        case 1:
          changedParams.pos = 142;
          changedParams.radius = 115;

          changedParams.distance = 0.3;
          blendMode(DODGE);
          break;
        case 2:
          changedParams.pos = 122;
          changedParams.radius = 105;

          changedParams.distance = 0.27;
          blendMode(SCREEN);
          break;
        case 3:
          changedParams.pos = 102;
          changedParams.radius = 95;

          changedParams.distance = 0.24;
          blendMode(LIGHTEST);
          break;
        case 4:
          changedParams.pos = 82;
          changedParams.radius = 85;

          changedParams.distance = 0.21;
          blendMode(BURN);
          break;
        case 5:
          changedParams.pos = 62;
          changedParams.radius = 75;

          changedParams.distance = 0.18;
          blendMode(MULTIPLY);
          break;
        case 6:
          changedParams.pos = 42;
          changedParams.radius = 65;

          changedParams.distance = 0.15;
          blendMode(EXCLUSION);
          break;
      }
      break;
    case 12:
      changedParams.colorR = 255;
      changedParams.colorG = 255;
      changedParams.colorB = 255;

      switch (answerNumber) // 0 - 4 oder 6
      {
        case 1:
          changedParams.pos = 153;
          changedParams.npoints = 50;
          changedParams.radius = 100;

          blendMode(BLEND);

          changedParams.distance = 0.1;
          break;
        case 6:
          changedParams.pos = 53;
          changedParams.npoints = 3;
          changedParams.radius = 40;

          blendMode(BLEND);

          changedParams.distance = 0.1;
          break;
        case 2:
          changedParams.pos = 135;
          changedParams.npoints = 25;
          changedParams.radius = 80;

          blendMode(BLEND)

          changedParams.distance = 0.1;
          break;
        case 5:
          changedParams.pos = 73;
          changedParams.npoints = 5;
          changedParams.radius = 60;

          blendMode(BLEND)

          changedParams.distance = 0.1;
          break;
      }
      break;
    case 13:
      changedParams.bgColor = "#ffffff";
      switch (answerNumber) // 0 - 4 oder 6
      {
        case 1:
          //violet
          changedParams.colorR = random(100, 120);
          changedParams.colorG = random(30, 50);
          changedParams.colorB = random(100, 120);
          blendMode(DODGE);

          changedParams.pos = 128;
          break;
        case 2:
          //blau
          changedParams.colorG = random(170, 190);
          changedParams.colorB = random(230, 250);
          changedParams.colorR = 0;
          blendMode(OVERLAY);

          changedParams.pos = 108;
          break;
        case 3:
          //grün
          changedParams.colorG = random(210, 230);
          changedParams.colorB = 0;
          changedParams.colorR = random(120, 140);
          blendMode(LIGHTEST);

          changedParams.pos = 88;
          break;
        case 4:
          //gelb
          changedParams.colorB = 0;
          changedParams.colorR = random(235, 255);
          changedParams.colorG = random(200, 220);
          blendMode(DARKEST);

          changedParams.pos = 68;

          break;
        case 5:
          //pink
          changedParams.colorG = 0;
          changedParams.colorR = random(230, 250);
          changedParams.colorB = random(80, 100);
          blendMode(MULTIPLY);

          changedParams.pos = 48;
          break;
        case 6:
          //rot
          changedParams.colorG = random(20, 40);
          changedParams.colorB = random(30, 50);
          changedParams.colorR = random(200, 220);
          blendMode(BURN);

          changedParams.pos = 28;
          break;
      }
      break;
    case 14:
      switch (answerNumber) // 0 - 4 oder 6
      {
        case 1:
          changedParams.pos = 144;
          blendMode(DODGE);
          break;
        case 2:

          changedParams.pos = 124;
          blendMode(DODGE);
          break;
        case 5:

          changedParams.pos = 64;
          blendMode(BURN);
          break;
        case 6:

          changedParams.pos = 44;
          blendMode(BURN);
          break;
      }
      break;
    default:
      break;
  }
  setParams(changedParams);
}
