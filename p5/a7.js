function antwort7() {
  if (a7 == 1) {
    let colorR = random(140, 150);
    let colorG = random(20, 30);
    let colorB = random(120, 130);
    fill(colorR, colorG, colorB, a);
    blendMode(MULTIPLY);

  } else if (a7 == 2) {
    let colorR = 0;
    let colorG = random(180, 190);
    let colorB = random(230, 240);
    fill(colorR, colorG, colorB, a);
    blendMode(LIGHTEST);

  } else if (a7 == 3) {
    let colorR = random(60, 70);
    let colorG = random(180, 190);
    let colorB = random(160, 170);
    fill(colorR, colorG, colorB, a);
    blendMode(LIGHTEST);


  } else if (a7 == 4) {
    let colorR = random(120, 130);
    let colorG = random(180, 190);
    let colorB = random(30, 40);
    fill(colorR, colorG, colorB, a);
    blendMode(DIFFERENCE);


  } else if (a7 == 5) {
    let colorR = random(240, 250);
    let colorG = random(140, 150);
    let colorB = 0;
    fill(colorR, colorG, colorB, a);
    blendMode(SCREEN);

  } else if (a7 == 6) {
    let colorR = random(180, 190);
    let colorG = random(20, 30);
    let colorB = random(30, 40);
    fill(colorR, colorG, colorB, a);
    blendMode(SCREEN);
  }
}
