function transparenz() {
  if (a2 == 1) {
    a = 10;
    fill(colorR, colorG, colorB, a);
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  }
  else if (a2 == 2) {
    a = 15;
    fill(colorR, colorG, colorB, a);
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  }
  else if (a2 == 3) {
    a = 30;
    fill(colorR, colorG, colorB, a);
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  } 
  else if (a2 == 4) {
    a = 45;
    fill(colorR, colorG, colorB, a);
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  } 
  else if (a2 == 5) {
    a = 60;
    fill(colorR, colorG, colorB, a);
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  } 
  else if (a2 == 6) {
    a = 85;
    fill(colorR, colorG, colorB, a);
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  }
}
