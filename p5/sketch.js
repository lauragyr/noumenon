let gegebenAntworten;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Load external json file; set drawData as callback function
  loadJSON("data.json", drawData);
  frameRate(0.5);

}

function draw() {
    loadJSON("data.json", drawData);
}


function drawData(data) {
  if (gegebenAntworten != Object.keys(data).length) {
    gegebenAntworten = Object.keys(data).length;
    console.log("zeichne was neues");
    let lastAnswer = data[Object.keys(data)[gegebenAntworten-1]];
    console.log(lastAnswer);
/*
    for (var key in data) {
      console.log(key + " : "+  data[key]);
      let meineAnwort = data[key];
      console.log("zeichne das alte");
    }
    */
  }
  
  // Iterate over the data object, look at JSON filestructure
  
  console.log("zeichne das alte - mach nichts");
 

}
