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
    pos: 60,
    npoints: 25,
    radius: 60,
    distance: 0.1,
    a: 50,
    bgColor: "white"
  }
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
            bgColor ="black"
            document.body.style.background = bgColor;

            changedParams.pos = 140;
            changedParams.radius = 140;
            //violet
            changedParams.colorR = 120;
            changedParams.colorG = 30;
            changedParams.colorB = 110;
            blendMode(BLEND);
          break;
          case 6:
            bgColor ="black"
            document.body.style.background = bgColor;

            changedParams.pos = 40;
            changedParams.radius = 40;
            //rot
            changedParams.colorG = 20;
            changedParams.colorB = 30;
            changedParams.colorR = 200;
            blendMode(BLEND);
          break;
          case 2:
            bgColor ="black"
            document.body.style.background = bgColor;

            changedParams.pos = 60;
            changedParams.radius = 120;
            //blau
            changedParams.colorG = 180;
            changedParams.colorB = 240;
            changedParams.colorR = 0;
            blendMode(BLEND);
          break;
          case 5:
            bgColor ="black"
            document.body.style.background = bgColor;

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
            changedParams.pos = 150;
            changedParams.radius = 100;

            blendMode(LIGHTEST);

            //violet
            changedParams.colorR = 120;
            changedParams.colorG = 30;
            changedParams.colorB = 110;
          break;
          case 2:
            changedParams.pos = 130;
            changedParams.radius = 90;

            blendMode(DIFFERENCE);

            //blau
            changedParams.colorG = 150;
            changedParams.colorB = 250;
            changedParams.colorR = 0;
          break;
          case 3:
            changedParams.pos = 110;
            changedParams.radius = 80;

            blendMode(BLEND);

            //grün
            changedParams.colorG = 250;
            changedParams.colorB = 0;
            changedParams.colorR = 120;
          break;
          case 4:
            changedParams.pos = 90;
            changedParams.radius = 70;

            blendMode(BLEND);

            //gelb
            changedParams.colorB = 0;
            changedParams.colorR = 255;
            changedParams.colorG = 220;
          break;
          case 5:
            changedParams.pos = 70;
            changedParams.radius = 60;

            blendMode(MULTIPLY);

            //pink
            changedParams.colorG = 0;
            changedParams.colorR = 250;
            changedParams.colorB = 100;
          break;
          case 6:
            changedParams.pos = 50;
            changedParams.radius = 50;

            blendMode(MULTIPLY);

            //rot
            changedParams.colorG = 20;
            changedParams.colorB = 30;
            changedParams.colorR = 255;
          break;
        }
    break;
    case 3:
        switch(answerNumber) // 0 - 4 oder 6
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
            blendMode(LIGHTEST)
            changedParams.difference = 0.21;
          break;
          case 5:
            changedParams.pos = 55;
            blendMode(DARKEST)
            changedParams.difference = 0.18;
          break;
          case 6:
            changedParams.pos = 35;
            blendMode(DARKEST)
            changedParams.difference = 0.15;
          break;
        }
    break;
    case 4:
        switch(answerNumber) // 1 - 4 oder 6
        {
          case 5:
            changedParams.pos = 50;
             changedParams.a = 150;
             changedParams.radius = 60;
 
            blendMode(DARKEST)
          break;
          case 6:
            changedParams.pos = 40;
            changedParams.a = 200;
            changedParams.radius = 40;

            blendMode(MULTIPLY)
          break;
          case 2:
            changedParams.pos = 90;
            changedParams.a = 100;
            changedParams.radius = 120;

            blendMode(LIGHTEST)
          break;
          case 1:
            changedParams.pos = 100;
            changedParams.a = 50;
            changedParams.radius = 140;

            blendMode(DODGE)
          break;
        }
    break;
    case 5:
        switch(answerNumber) // 0 - 4 oder 6
        {
          case 1:
            changedParams.pos = 160;
            changedParams.npoints = 50;

            changedParams.a = 50;
            blendMode(DODGE)
          break;
          case 2:
            changedParams.pos = 135;
            changedParams.npoints = 30;

            changedParams.a = 100;
            blendMode(LIGHTEST)
          break;
          case 3:
            changedParams.pos = 110;
            changedParams.npoints = 15;
            blendMode(BLEND)
          break;
          case 4:
            changedParams.pos = 85;
            changedParams.npoints = 8;
            blendMode(DIFFERENCE)
          break;
          case 5:
            changedParams.pos = 60;
            changedParams.npoints = 5;

            changedParams.a = 150;
            blendMode(MULTIPLY)
          break;
          case 6:
            changedParams.pos = 35;
            changedParams.npoints = 3;

            changedParams.a = 200;
            blendMode(DARKEST)
          break;
        }
    break;
    case 6:
        switch(answerNumber) // 0 - 4 oder 6
        {
          case 1:
            changedParams.pos = 140;

            changedParams. a = 255;
            changedParams.colorG = 255;
            changedParams.colorR = 255;
            changedParams.colorB = 255;
            blendMode(DIFFERENCE);

            changedParams.difference = 0.1;
          break;
          case 2:
            changedParams.pos = 120;

            changedParams. a = 255;
            changedParams.colorG = 255;
            changedParams.colorR = 255;
            changedParams.colorB = 255;
            blendMode(DIFFERENCE);

            changedParams.difference = 0.1;
          break;
          case 3:
            changedParams.pos = 100;

            changedParams.colorG = 255;
            changedParams.colorR = 255;
            changedParams.colorB = 255;
            blendMode(DIFFERENCE);

            changedParams.difference = 0.1;
          break;
          case 4:
            changedParams.pos = 80;

            changedParams.colorG = 255;
            changedParams.colorR = 255;
            changedParams.colorB = 255;
            blendMode(MULTIPLY);

            changedParams.difference = 0.1;
          break;
          case 5:
            changedParams.pos = 60;

            changedParams.colorG = 255;
            changedParams.colorR = 255;
            changedParams.colorB = 255;
            blendMode(MULTIPLY);

            changedParams.difference = 0.1;
          break;
          case 6:
            changedParams.pos = 40;

            changedParams.colorG = 255;
            changedParams.colorR = 255;
            changedParams.colorB = 255;
            blendMode(MULTIPLY);

            changedParams.difference = 0.1;
          break;
        }
    break;
    case 7:
        switch(answerNumber) // 0 - 4 oder 6
        {
          case 1:
            blendMode(DODGE);
            changedParams.pos = 133;
            changedParams.radius = 110;

            //violet
            changedParams. a = 50;
            changedParams.colorR = 120;
            changedParams.colorG = 30;
            changedParams.colorB = 110;
          break;
          case 2:
            blendMode(DIFFERENCE);
            changedParams.pos = 122
            changedParams.radius = 100;

            //blau
            changedParams. a = 50;
            changedParams.colorG = 150;
            changedParams.colorB = 250;
            changedParams.colorR = 0;
          break;
          case 5:
            changedParams.pos = 88;
            changedParams.radius = 70;
            blendMode(MULTIPLY)

            //pink
            changedParams. a = 50;
            changedParams.colorG = 0;
            changedParams.colorR = 250;
            changedParams.colorB = 100;
          break;
          case 6:
            changedParams.pos = 77;
            blendMode(DARKEST)
            changedParams.radius = 60;

            //rot
            changedParams. a = 50;
            changedParams.colorG = 20;
            changedParams.colorB = 30;
            changedParams.colorR = 255;
          break;
        }
    break;
    case 8:
        switch(answerNumber) // 0 - 4 oder 6
        {
          case 6:
            changedParams.pos = 66;
            changedParams.npoints = 3;

            blendMode(DARKEST);
          break;
          case 1:
            changedParams.pos = 122;
            changedParams.npoints = 40;

            blendMode(DODGE);
          break;
          case 5:
            changedParams.pos = 77;
            changedParams.npoints = 6;

            blendMode(MULTIPLY);
          break;
          case 2:
            changedParams.pos = 111;
            changedParams.npoints = 20;

            blendMode(LIGHTEST);
          break; 
        }
    break;
    case 9:
        switch(answerNumber) // 0 - 4 oder 6
        {
          case 1:
            changedParams.pos = 138;
            changedParams.a = 60;
            changedParams.radius = 110;

            //violet
            changedParams.colorR = 120;
            changedParams.colorG = 30;
            changedParams.colorB = 110;
          break;
          case 2:
            changedParams.pos = 130;
            changedParams.a = 80;
            changedParams.radius = 90;

            //blau
            changedParams.colorG = 150;
            changedParams.colorB = 250;
            changedParams.colorR = 0;
          break;
          case 3:
            changedParams.pos = 122;
            changedParams.a = 100;
            changedParams.radius = 70;

            //grün
            changedParams.colorG = 250;
            changedParams.colorB = 0;
            changedParams.colorR = 120;
          break;
          case 4:
            changedParams.pos = 114;
            changedParams.a = 120;
            changedParams.radius = 50;

            //gelb
            changedParams.colorB = 0;
            changedParams.colorR = 255;
            changedParams.colorG = 220;
          break; 
          case 5:
            changedParams.pos = 106;
            changedParams.a = 140;
            changedParams.radius = 30;

            //pink
            changedParams.colorG = 0;
            changedParams.colorR = 250;
            changedParams.colorB = 100;
          break; 
          case 6:
            changedParams.pos = 98;
            changedParams.a = 140;
            changedParams.radius = 10;

            //rot
            changedParams.colorG = 20;
            changedParams.colorB = 30;
            changedParams.colorR = 255;
          break; 
        }
    break;
    case 10:
        switch(answerNumber) // 0 - 4 oder 6
        {
          case 1:
            changedParams.pos = 135;
            blendMode(DODGE);
            changedParams.radius = 130;

            changedParams.a = 30;
            changedParams.distance = 0.3;
          break;
          case 2:
            changedParams.pos = 115;
            blendMode(LIGHTEST);
            changedParams.radius = 110;

            changedParams.a = 50;
            changedParams.distance = 0.27;
          break;
          case 3:
            changedParams.pos = 95;
            blendMode(SCREEN);
            changedParams.radius = 90;

            changedParams.a = 70;
            changedParams.distance = 0.24;
          break;
          case 4:
            changedParams.pos = 75;
            blendMode(MULTIPLY);
            changedParams.radius = 70;

            changedParams.a = 90;
            changedParams.distance = 0.21;
          break;
          case 5:
            changedParams.pos = 55;
            blendMode(DARKEST);
            changedParams.radius = 50;

            changedParams.a = 110;
            changedParams.distance = 0.18;
          break;
          case 6:
            changedParams.pos = 35;
            blendMode(BURN);
            changedParams.radius = 30;

            changedParams.a = 130;
            changedParams.distance = 0.15;
          break;
        }
      
    break;
    case 11:
        switch(answerNumber) // 0 - 4 oder 6
        {
          case 1:
            changedParams.pos = 142;
            changedParams.radius = 115;

            changedParams.distance = 0.3;
            blendMode(LIGHTEST);
          break;
          case 2:
            changedParams.pos = 122;
            changedParams.radius = 105;

            changedParams.distance = 0.27;
            blendMode(DIFFERENCE);
          break;
          case 3:
            changedParams.pos = 102;
            changedParams.radius = 95;

            changedParams.distance = 0.24;
            blendMode(SCREEN);
          break;
          case 4:
            changedParams.pos = 82;
            changedParams.radius = 85;

            changedParams.distance = 0.21;
            blendMode(SCREEN);
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
            blendMode(DARKEST);
          break;
        }
    break;
    case 12:
        switch(answerNumber) // 0 - 4 oder 6
        {
          case 1:
            document.body.style.backgroundColor = rgb(255,0,0);
            changedParams.pos = 153;
            changedParams.npoints = 50;
            changedParams.radius = 30;

            changedParams.colorG = 255;
            changedParams.colorR = 255;
            changedParams.colorB = 255;

            changedParams.distance = 0.1;
          break;
          case 6:
            changedParams.pos = 53;
            changedParams.npoints = 3;
            changedParams.radius = 30;

            changedParams.colorG = 255;
            changedParams.colorR = 255;
            changedParams.colorB = 255;

            changedParams.distance = 0.1;
          break;
          case 2:
            changedParams.pos = 135;
            changedParams.npoints = 25;
            changedParams.radius = 30;

            changedParams.colorG = 255;
            changedParams.colorR = 255;
            changedParams.colorB = 255;

            changedParams.distance = 0.1;
          break; 
          case 5:
            changedParams.pos = 73;
            changedParams.npoints = 5;
            changedParams.radius = 30;

            changedParams.colorG = 255;
            changedParams.colorR = 255;
            changedParams.colorB = 255;

            changedParams.distance = 0.1;
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
            blendMode(DODGE);

            changedParams.pos = 128;
          break;
          case 2:
            //blau
            changedParams.colorG = 180;
            changedParams.colorB = 240;
            changedParams.colorR = 0;
            blendMode(LIGHTEST);

            changedParams.pos = 108;
          break;
          case 3:
            //grün
            changedParams.colorG = 220;
            changedParams.colorB = 0;
            changedParams.colorR = 120;
            blendMode(DIFFERENCE);

            changedParams.pos = 88;
          break;
          case 4:
            //gelb
            changedParams.colorB = 0;
            changedParams.colorR = 255;
            changedParams.colorG = 210;
            blendMode(MULTIPLY);

            changedParams.pos = 68;

          break;
          case 5:
            //pink
            changedParams.colorG = 0;
            changedParams.colorR = 239;
            changedParams.colorB = 90;
            blendMode(DARKEST);

            changedParams.pos = 48;
          break;
          case 6:
            //rot
            changedParams.colorG = 20;
            changedParams.colorB = 30;
            changedParams.colorR = 200;
            blendMode(BURN);
          
            changedParams.pos = 28;
          break;
        }
    break;
    case 14:
        switch(answerNumber) // 0 - 4 oder 6
        {
          case 1:
            bgColor ="white"
            document.body.style.background = bgColor;

            changedParams.pos = 144;
            blendMode(DODGE);
          break;
          case 2:
            bgColor ="white"
            document.body.style.background = bgColor;

            changedParams.pos = 124;
            blendMode(DODGE);
          break; 
          case 5:
            bgColor ="white"
            document.body.style.background = bgColor;

            changedParams.pos = 64;
            blendMode(DARKEST);
          break;
          case 6:
            bgColor ="white"
            document.body.style.background = bgColor;

            changedParams.pos = 44;
            blendMode(DARKEST);
          break;
        }
    break;
    default:
    break;
  }
  setParams(changedParams);
}