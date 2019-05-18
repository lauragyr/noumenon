//data-stuff
let gegebenAntworten;
let data;

let a1, a2;

//canvas-stuff
let angle = 1;
let generalAngle = 5.4; //start of circle draw

//polygon-stuff
let pos = 80;

let npoints = 10;
let radius = 0;
let distance = 0.1;

//color-stuff
let colorR = 0;
let colorG = 0;
let colorB = 0;
let a = 100;

let points;

//--------------//

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  // Load external json file; set drawData as callback function
  // data = loadJSON("../data.json", drawData);
  
  //video stuff
  /*videoInput = createCapture(VIDEO);
  videoInput.size(windowWidth, windowHeight);
  videoInput.position(0, 0);
  
  videoInput.hide();

    // setup canvas
    var cnv = createCanvas(800, 600);
    cnv.position(0, 0);
    //image(videoInput,0,0,800,600);
  
    // setup tracker
    ctracker = new clm.tracker();
    ctracker.init(pModel);
    ctracker.start(videoInput.elt);*/
    points = 100;
}

// which one is the last object
function drawData(data) {
  if (gegebenAntworten != Object.keys(data).length) {
    gegebenAntworten = Object.keys(data).length;
    console.log("zeichne was neues");
    let lastAnswer = data[Object.keys(data)[gegebenAntworten-1]];
    //console.log(lastAnswer);
  }
  let a1 = data.antwort1;
let a2 = data.antwort2
}

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

function size() {
  if (keyCode === UP_ARROW) {
    radius = 10;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  } 
}


function draw() {
  if(points < 500){
    ellipse(points, points, 50,50);
    points += 10;
  }else{
    ellipse(points, points, 50,50);

  }
    
  // frameRate(0.5);
  // loadJSON("data.json", drawData);
}

  // Iterate over the data object, look at JSON filestructure
  console.log("zeichne das alte - mach nichts");