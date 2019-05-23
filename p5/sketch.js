//data-stuff
let gegebenAntworten;
let data;
let surveyData = [];
let possibleParameters;
//let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17;

possibleParameters = {}
function resetAllParameters()
{
  possibleParameters =
  {
    colorR: 0,
    colorG: 0,
    colorB: 0,
    angle: 1,
    generalAngle: 5.4,
    pos: 120,
    npoints: 25,
    radius: 50,
    distance: 0.15,
    a: 50
  }
}
resetAllParameters();

/*
//canvas-stuff
let angle = 1; //angle of form(polygon)
let generalAngle = 5.4; //start of circle draw

//polygon-stuff
let pos = 120; //anordnung im kreis (aussen oder innen)
let npoints = 25;
let radius = 50;
let distance = 0.15;

//color-stuff
let colorR = 0;
let colorG = 0;
let colorB = 0;
let a = 50;
//let filter = blendMode(BLEND);
*/

//video-stuff
let ctracker;
let videoInput

//--------------//

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();
  //fill(colorR, colorG, colorB, a);

  /*videoInput = createCapture(VIDEO);
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
    data.antwort15,
    data.antwort16,
    data.antwort17
  ];

  /*
  surveyData.a1 = data.antwort1;
  surveyData.a2 = data.antwort2;
  surveyData.a3 = data.antwort3;
  surveyData.a4 = data.antwort4;
  surveyData.a5 = data.antwort5;
  surveyData.a6 = data.antwort6;
  surveyData.a7 = data.antwort7;
  surveyData.a8 = data.antwort8;
  surveyData.a9 = data.antwort9;
  surveyData.a10 = data.antwort10;
  surveyData.a11 = data.antwort11;
  surveyData.a12 = data.antwort12;
  surveyData.a13 = data.antwort13; 
  surveyData.a14 = data.antwort14; 
  surveyData.a15 = data.antwort15; 
  surveyData.a16 = data.antwort16;
  surveyData.a17 = data.antwort17;
  */
}

function draw() {
  frameRate(2);
  //video-tracking übergabe aufgabe on face-detection
  /*if (ctracker.getCurrentPosition()[0]) {
console.log("chabis")
  } else {
console.log("nix")
  }*/

  translate(width / 2, height / 2);
  loadJSON("data.json", drawData);

  //clearing canvas after generating visual
  if(surveyData[0] === 0)
  {
    resetAllParameters();
    return clear();
  }

  if(surveyData[0] === -1)
  {
    resetAllParameters();
    return;
  }

  overwriteEachAnswer();
  visualize();
  console.log(possibleParameters);
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

function overwriteEachAnswer()
{
  possibleParameters.generalAngle += possibleParameters.distance;
  surveyData.forEach(
    function handleAnswers(value, index, array)
    {
      if (typeof(value) != "undefined")
      {
        //console.log("surveyNumber " + index + " answer: " + value);
        changeValuesBasedOnSurvey(index, value);
      }
    }
  );
}

function setParams(obj)
{
  if (typeof(obj.angle) != "undefined")
  {
    possibleParameters.angle = obj.angle;
  }
  if (typeof(obj.generalAngle) != "undefined")
  {
    possibleParameters.generalAngle = obj.generalAngle;
  }
  if (typeof(obj.pos) != "undefined")
  {
    possibleParameters.pos = obj.pos;
  }
  if (typeof(obj.npoints) != "undefined")
  {
    possibleParameters.npoints = obj.npoints;
  }
  if (typeof(obj.radius) != "undefined")
  {
    possibleParameters.radius = obj.radius;
  }
  if (typeof(obj.distance) != "undefined")
  {
    possibleParameters.distance = obj.distance;
  }
  if (typeof(obj.colorR) != "undefined")
  {
    possibleParameters.colorR = obj.colorR;
  }
  if (typeof(obj.colorG) != "undefined")
  {
    possibleParameters.colorG = obj.colorG;
  }
  if (typeof(obj.colorB) != "undefined")
  {
    possibleParameters.colorB = obj.colorB;
  }
  if (typeof(obj.a) != "undefined")
  {
    possibleParameters.a = obj.a;
  }
}

function visualize()
{
  fill
  (
    possibleParameters.colorR,
    possibleParameters.colorG,
    possibleParameters.colorB,
    possibleParameters.a
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

function changeValuesBasedOnSurvey(surveyNumber, answerNumber)
{
  let changedParams = {};

  switch(surveyNumber + 1) // 1 - 17
  {
    case 1:
        switch(answerNumber) // 1 - 4 oder 6
        {
          case 1:
            changedParams.colorR = random(140, 150);
            changedParams.colorG = random(10, 30);
            changedParams.colorB = random(120, 130);
          break;
          case 2:
              changedParams.colorR = random(0, 0);
              changedParams.colorG = random(10, 30);
              changedParams.colorB = random(120, 130);
          break;
          case 3:
          break;
          case 4:
          break;
          case 5:
          break;
          case 6:
          break;
        }
    break;
    case 2:
        switch(answerNumber) // 0 - 4 oder 6
        {
          case 1:
              changedParams.pos = 140;
              changedParams.radius = 140;
          break;
          case 2:
              changedParams.pos = 120;
              changedParams.radius = 120;
          break;
          case 3:
          break;
          case 4:
          break;
        }
    break;
    case 3:
    break;
    case 4:
    break;
    case 5:
    break;
    case 6:
      switch(answerNumber) // 0 - 4 oder 6
      {
        case 1:
          changedParams.colorR = random(0, 10);
          changedParams.colorG = random(10, 30);
          changedParams.colorB = random(200, 230);
        break;
        case 2:
            changedParams.colorR = random(90, 100);
            changedParams.colorG = random(100, 130);
            changedParams.colorB = random(120, 130);
        break;
        case 3:
        break;
        case 4:
        break;
        case 5:
        break;
        case 6:
        break;
      }
    break;
    default:
    break;
  }
  setParams(changedParams);
}

