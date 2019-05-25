//data-stuff
let gegebenAntworten;
let data;
let surveyData = [];
let possibleParameters;

possibleParameters = {}
function resetAllParameters()
{
  possibleParameters =
  {
    colorR: 0,
    colorG: 0,
    colorB: 0,
    angle: 1,
    generalAngle: 1,
    pos: 120,
    npoints: 25,
    radius: 50,
    distance: 0.1,
    a: 50,
  }
}
resetAllParameters();

//video-stuff
let ctracker;
let videoInput

//--------------//

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
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
  possibleParameters.generalAngle -= possibleParameters.distance;
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
            changedParams.pos = 140;
            changedParams.radius = 140;
            //violet
            changedParams.colorR = 120;
            changedParams.colorG = 30;
            changedParams.colorB = 110;
            blendMode(BLEND);

          break;
          case 6:
            changedParams.pos = 40;
            changedParams.radius = 40;
            //rot
            changedParams.colorG = 20;
            changedParams.colorB = 30;
            changedParams.colorR = 200;
            blendMode(BLEND);

          break;
          case 2:
            changedParams.pos = 60;
            changedParams.radius = 120;
            //blau
            changedParams.colorG = 180;
            changedParams.colorB = 240;
            changedParams.colorR = 0;
            blendMode(BLEND);

          break;
          case 5:
            changedParams.pos = 120;
            changedParams.radius = 60;
            //pink
            changedParams.colorG = 0;
            changedParams.colorR = 239;
            changedParams.colorB = 90;
            blendMode(BLEND);

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
            changedParams.pos = 120;
          break;
          case 3:
            changedParams.pos = 100;
            changedParams.pos = 100;
            changedParams.a = 45;
          break;
          case 4:
            changedParams.pos = 80;
            changedParams.pos = 80;
          break;
          case 5:
            changedParams.pos = 60;
            changedParams.pos = 60;
          break;
          case 6:
            changedParams.pos = 40;
            changedParams.pos = 40;
          break;
        }
    break;
    case 3:
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
            changedParams.pos = 100;
            changedParams.radius = 100;
          break;
          case 4:
            changedParams.pos = 80;
            changedParams.radius = 80;
          break;
          case 5:
            changedParams.pos = 60;
            changedParams.radius = 60;
          break;
          case 6:
            changedParams.pos = 40;
            changedParams.radius = 40;
          break;
        }
    break;
    case 4:
        switch(answerNumber) // 1 - 4 oder 6
        {
          case 5:
            changedParams.pos = 120;
            changedParams.radius = 120;
          break;
          case 6:
            changedParams.pos = 40;
            changedParams.radius = 40;
          break;
          case 2:
            changedParams.pos = 60;
            changedParams.radius = 60;
          break;
          case 1:
            changedParams.pos = 140;
            changedParams.radius = 140;
          break;
        }
    break;
    case 5:
        switch(answerNumber) // 0 - 4 oder 6
        {
          case 1:
            changedParams.pos = 140;
            changedParams.radius = 140;
            changedParams.npoints = 50;
            blendMode(DIFFERENCE);
          break;
          case 2:
            changedParams.pos = 120;
            changedParams.radius = 120;
            changedParams.npoints = 30;
            blendMode(LIGHTEST);

            changedParams.colorR = 255;
            changedParams.colorG = 255;
            changedParams.colorB = 255;
          break;
          case 3:
            changedParams.pos = 100;
            changedParams.radius = 100;
            changedParams.npoints = 15;
            blendMode(DIFFERENCE);
          break;
          case 4:
            changedParams.pos = 80;
            changedParams.radius = 80;
            changedParams.npoints = 8;
            blendMode(DIFFERENCE);
          break;
          case 5:
            changedParams.pos = 60;
            changedParams.radius = 60;
            changedParams.npoints = 5;
            blendMode(DIFFERENCE);
          break;
          case 6:
            changedParams.pos = 40;
            changedParams.radius = 40;
            changedParams.npoints = 3;
            blendMode(DIFFERENCE);
          break;
        }
    break;
    case 6:
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
            changedParams.pos = 100;
            changedParams.radius = 100;
          break;
          case 4:
            changedParams.pos = 80;
            changedParams.radius = 80;
          break;
          case 5:
            changedParams.pos = 60;
            changedParams.radius = 60;
          break;
          case 6:
            changedParams.pos = 40;
            changedParams.radius = 40;
          break;
        }
    break;
    case 7:
        switch(answerNumber) // 0 - 4 oder 6
        {
          case 1:
            //violet
            changedParams.colorR = 120;
            changedParams.colorG = 30;
            changedParams.colorB = 110;
            blendMode(LIGHTEST);

          break;
          case 2:
            //blau
            changedParams.colorG = 180;
            changedParams.colorB = 240;
            changedParams.colorR = 0;
            blendMode(LIGHTEST);
          break;
          case 3:
            //grün
            changedParams.colorG = 220;
            changedParams.colorB = 0;
            changedParams.colorR = 120;
            blendMode(LIGHTEST);
          break;
          case 4:
            //gelb
            changedParams.colorB = 0;
            changedParams.colorR = 255;
            changedParams.colorG = 210;
            blendMode(MULTIPLY);
          break;
          case 5:
            //pink
            changedParams.colorG = 0;
            changedParams.colorR = 239;
            changedParams.colorB = 90;
            blendMode(MULTIPLY);
          break;
          case 6:
            //rot
            changedParams.colorG = 20;
            changedParams.colorB = 30;
            changedParams.colorR = 200;
            blendMode(MULTIPLY);
          break;
        }
    break;
    case 8:
        switch(answerNumber) // 0 - 4 oder 6
        {
          case 6:
            changedParams.pos = 40;
            changedParams.npoints = 3;
          break;
          case 1:
            changedParams.pos = 140;
            changedParams.npoints = 50;
          break;
          case 5:
            changedParams.pos = 60;
            changedParams.npoints = 5;
          break;
          case 2:
            changedParams.pos = 120;
            changedParams.npoints = 30;
          break; 
        }
    break;
    case 9:
        switch(answerNumber) // 0 - 4 oder 6
        {
          case 1:
            changedParams.pos = 140;
          break;
          case 2:
            changedParams.pos = 120;
          break;
          case 3:
            changedParams.pos = 100;
          break;
          case 4:
            changedParams.pos = 80;
          break; 
          case 5:
            changedParams.pos = 60;
          break; 
          case 6:
            changedParams.pos = 40;
          break; 
        }
    break;
    case 10:
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
            changedParams.pos = 100;
            changedParams.radius = 100;
          break;
          case 4:
            changedParams.pos = 80;
            changedParams.radius = 80;
          break;
          case 5:
            changedParams.pos = 60;
            changedParams.radius = 60;
          break;
          case 6:
            changedParams.pos = 40;
            changedParams.radius = 40;
          break;
        }
      
    break;
    case 11:
        switch(answerNumber) // 0 - 4 oder 6
        {
          case 1:
            changedParams.pos = 140;
          break;
          case 2:
            changedParams.pos = 120;
          break;
          case 3:
            changedParams.pos = 100;
          break;
          case 4:
            changedParams.pos = 80;
          break;
          case 5:
            changedParams.pos = 60;
          break;
          case 6:
            changedParams.pos = 40;
          break;
        }
    break;
    case 12:
        switch(answerNumber) // 0 - 4 oder 6
        {
          case 1:
            changedParams.pos = 140;
            changedParams.npoints = 50;
          break;
          case 6:
            changedParams.pos = 40;
            changedParams.npoints = 3;
          break;
          case 2:
            changedParams.pos = 120;
            changedParams.npoints = 30;
          break; 
          case 5:
            changedParams.pos = 60;
            changedParams.npoints = 5;
          break;
        }
    break;
    case 13:
        switch(answerNumber) // 0 - 4 oder 6
        {
          case 1:
            //violet
            changedParams.colorR = 120;
            changedParams.colorG = 30;
            changedParams.colorB = 110;
            blendMode(SCREEN);
          break;
          case 2:
            //blau
            changedParams.colorG = 180;
            changedParams.colorB = 240;
            changedParams.colorR = 0;
            blendMode(SCREEN);
          break;
          case 3:
            //grün
            changedParams.colorG = 220;
            changedParams.colorB = 0;
            changedParams.colorR = 120;
            blendMode(SCREEN);
          break;
          case 4:
            //gelb
            changedParams.colorB = 0;
            changedParams.colorR = 255;
            changedParams.colorG = 210;
            blendMode(MULTIPLY);

          break;
          case 5:
            //pink
            changedParams.colorG = 0;
            changedParams.colorR = 239;
            changedParams.colorB = 90;
            blendMode(MULTIPLY);
          break;
          case 6:
            //rot
            changedParams.colorG = 20;
            changedParams.colorB = 30;
            changedParams.colorR = 200;
            blendMode(MULTIPLY);
          break;
        }
    break;
    case 14:
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
          case 5:
            changedParams.pos = 60;
            changedParams.radius = 60;
          break;
          case 6:
            changedParams.pos = 40;
            changedParams.radius = 40;
          break;
        }
    break;
    default:
    break;
  }
  setParams(changedParams);
}