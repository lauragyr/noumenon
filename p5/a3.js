function antwort3() {
  if (a3 == 1) {
    distance = 0.25;
    pos=40;
    angle= 1;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  }
  else if (a3 == 2) {
    distance = 0.2;
    pos=60;
    angle= 2;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  }
  else if (a3 == 3) {
    distance = 0.15;
    pos=80;
    angle= 3;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  } 
  else if (a3 == 4) {
    distance = 0.1;
    pos=100;
    angle= 4;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  } 
  else if (a3 == 5) {
    distance = 0.05;
    pos=120;
    angle= 5;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  } 
  else if (a3 == 6) {
    distance = 0.01;
    pos=140;
    angle= 6;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  }
}