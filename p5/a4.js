// eckig oder rund
function form() {
    //q
    if (keyCode === 81) {
      rotate(-generalAngle);
      npoints = 50;
      polygon(pos, pos, radius, npoints);
      generalAngle = generalAngle + distance;
    } else if (keyCode === 87) {
      rotate(-generalAngle);
      npoints = 10;
      polygon(pos, pos, radius, npoints);
      generalAngle = generalAngle + distance;
    }
  
    //e
    else if (keyCode === 69) {
      rotate(-generalAngle);
      npoints = 3;
      polygon(pos, pos, radius, npoints);
      generalAngle = generalAngle + distance;
    }
  
    //r
    else if (keyCode === 82) {
      rotate(-generalAngle);
      npoints = 5;
      polygon(pos, pos, radius, npoints);
      generalAngle = generalAngle + distance;
    }
  
    //t
    else if (keyCode === 84) {
      rotate(-generalAngle);
      npoints = 30;
      polygon(pos, pos, radius, npoints);
      generalAngle = generalAngle + distance;
    }
  }