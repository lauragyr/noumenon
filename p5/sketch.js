//data-stuff
let gegebenAntworten;
let data;

let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17;

//canvas-stuff
let angle = 1;
let generalAngle = 5.4; //start of circle draw

//polygon-stuff
let pos = 80;

let npoints = 10;
let radius = 10;
let distance = 0.1;

//color-stuff
let colorR = 0;
let colorG = 0;
let colorB = 0;
let a = 100;

//video-stuff
var ctracker;
var videoInput

//--------------//

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();
  fill(colorR, colorG, colorB, a);

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
    let lastAnswer = data[Object.keys(data)[gegebenAntworten - 1]];
  }
  a1 = data.antwort1;
  a2 = data.antwort2;
  a3 = data.antwort3;
  a4 = data.antwort4;
  a5 = data.antwort5;
  a6 = data.antwort6;
  a7 = data.antwort7;
  a8 = data.antwort8;
  a9 = data.antwort9;
  a10 = data.antwort10;
  a11 = data.antwort11;
  a12 = data.antwort12;
  a13 = data.antwort13;
  a14 = data.antwort14;
  a15 = data.antwort15;
  a16 = data.antwort16;
  a17 = data.antwort17;
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
  if(a1 === 0) return clear();
  if(a1 === -1) return;

  antwort1(a1);
  antwort2(a2);
  antwort3(a3);
  antwort4(a4);
  antwort5(a5);
  antwort6(a6);
  antwort7(a7);
  antwort8(a8);
  antwort9(a9);
  antwort10(a10);
  antwort11(a11);
  antwort12(a12);
  antwort13(a13);
  antwort14(a14);
  antwort15(a15);
  antwort16(a16);
  antwort17(a17);
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



function filterMode() {
  //a
  if (keyCode === 65) {
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
    blendMode(MULTIPLY);
  }

  // s
  else if (keyCode === 83) {
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
    blendMode(LIGHTEST);
  }

  //d
  else if (keyCode === 68) {
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
    blendMode(DIFFERENCE);
  }

  //m
  else if (keyCode === 77) {
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
    blendMode(SCREEN);
  }
}



function verschiebung() {
  // u
  if (keyCode === 85) {
    pos = 200;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  }

  //i
  else if (keyCode === 73) {
    pos = 150;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  }

  //o
  else if (keyCode === 79) {
    pos = 50;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  }

  // p
  else if (keyCode === 80) {
    pos = 80;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  }
}