let gegebenAntworten;
let data;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Load external json file; set drawData as callback function
  data = loadJSON("../data.json", drawData);
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
  let a2 = data.antwort2;
  //console.log(data.antwort1);
  //console.log(data.antwort2);

  if (a1 === 1) {
    fill(255,0,0);
    ellipse(200,200,200,200);
  }
  else if (a1 === 2) {
    fill(0);
    ellipse(200,200,200,200);
  }

  else if (a1 === 3) {
    fill(0,0,255);
    ellipse(200,200,200,200);
  }

  else if (a1 === 4) {
    fill(0,255,0);
    ellipse(200,200,200,200);
  }

  else if (a1 === 5) {
    fill(255,0,255);
    ellipse(200,200,200,200);
  }

  else if (a1 === 6) {
    fill(255,255,0);
    ellipse(200,200,200,200);
  }
}

  function draw() {
    //frameRate(0.5);
    loadJSON("data.json", drawData);

    }

  // Iterate over the data object, look at JSON filestructure
  console.log("zeichne das alte - mach nichts");

  //window.print();
