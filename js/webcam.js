let video = document.querySelector("#inputVideo");

let ctracker = new clm.tracker();
  ctracker.init();
  ctracker.start(video);

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({
      video: true
    })
    .then(function(stream) {
      video.srcObject = stream;
    })
    .catch(function(err0r) {
      console.log("Something went wrong!");
    });
}

function positionLoop() {
  requestAnimationFrame(positionLoop);
  var positions = ctracker.getCurrentPosition();
  var detectionScore = ctracker.getScore();

  if (detectionScore > 0) {
    // get array of face marker positions [x, y] format
    var positions = ctracker.getCurrentPosition();

    var leftEyeX = positions[32][0];
    var leftEyeY = positions[32][1];

    var rightEyeX = positions[27][0];
    var rightEyeY = positions[27][1];

    var noseX = positions[62][0];
    var noseY = positions[62][1];
    
    var faceLeftX = positions[1][0];
    var faceLeftY = positions[1][1];
    var faceRightX = positions[13][0];
    var faceRightY = positions[13][1];
    
        var size = dist(faceLeftX,faceLeftY, faceRightX, faceRightY);
    
    //draw the face
    fill(255,100);
    noStroke();
    ellipse(noseX, noseY, size, size);
    }
}
positionLoop();
