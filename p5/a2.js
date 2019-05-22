function antwort2() {
  if (a2 == 1) {
    radius = 30;
    pos=40;
    angle= 1;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;

  } else if (a2 == 2) {
    radius = 60;
    pos=60;
    angle= 2;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;

  } else if (a2 == 5) {
    radius = 90;
    pos=80;
    angle= 3;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;

  } else if (a2 == 6) {
    radius = 120;
    pos=100;
    angle= 4;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  }
}