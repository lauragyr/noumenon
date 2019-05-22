  function antwort1() {
    if (a1 == 1) {
    let colorR = random(140, 150);
    let colorG = random(20, 30);
    let colorB = random(120, 130);
    fill(colorR, colorG, colorB, a);
    pos=40;
    angle= 2;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  }

  else if (a1 == 2) {
    let colorR = 0;
    let colorG = random(180, 190);
    let colorB = random(230, 240);
    fill(colorR, colorG, colorB, a);
    pos=60;
    angle= 3;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  }

  else if (a1 == 3) {
    let colorR = random(60,70);
    let colorG = random(180, 190);
    let colorB = random(160, 170);
    fill(colorR, colorG, colorB, a);
    pos=80;
    angle= 3;
    rotate(-generalAngle);
    polygon(pos, pos, radius, npoints);
    generalAngle = generalAngle + distance;
  }

else if (a1 == 4) {
  let colorR = random(120, 130);
  let colorG = random(180, 190);
  let colorB = random(30, 40);
  fill(colorR, colorG, colorB, a);
  pos=100;
  angle= 4;
  rotate(-generalAngle);
  polygon(pos, pos, radius, npoints);
  generalAngle = generalAngle + distance;
}

else if (a1 == 5) {
  let colorR = random(240, 250);
  let colorG = random(140, 150);
  let colorB = 0;
  fill(colorR, colorG, colorB, a);
  pos=120;
  angle= 5;
  rotate(-generalAngle);
  polygon(pos, pos, radius, npoints);
  generalAngle = generalAngle + distance;
}

else if (a1 == 6) {
  let colorR = random(180, 190);
  let colorG = random(20, 30);
  let colorB = random(30, 40);
  fill(colorR, colorG, colorB, a);
  pos=140;
  angle= 6;
  rotate(-generalAngle);
  polygon(pos, pos, radius, npoints);
  generalAngle = generalAngle + distance;
}
}