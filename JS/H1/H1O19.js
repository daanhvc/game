var p = 100;
var snelheid = 0.5; // Snelheid van de groene en rode lijn

function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent('processing');
  frameRate(50);
}

function draw() {
  background('snow');
  p += snelheid; // Beweeg p met snelheid
  if (p > width) {
    noLoop();
  }
  tekenRechthoek(p);
  tekenVierkant(p);
  tekenLijnen(p);
}

function tekenRechthoek(p) {
  push();
  translate(width / 2, height / 2);
  rotate(PI / -5); // Draai 45 graden
  strokeWeight(1);
  stroke('green');
  noFill();
  var rechthoekBreedte = width - 3* p;
  var rechthoekHoogte = height - 4* p;
  rect(-rechthoekBreedte / 2, -rechthoekHoogte /2, rechthoekBreedte, rechthoekHoogte);
  pop();
}

function tekenVierkant(p) {
  push();
  translate(width / 2, height / 2);
  strokeWeight(1);
  stroke('red');
  noFill();
  var vierkantGrootte = width - 4 * p;
  rotate(PI / 6); // Draai 30 graden
  rectMode(CENTER); // Zet de modus op CENTER voor het tekenen van het vierkant
  rect(0, 0, vierkantGrootte, vierkantGrootte);
  pop();
}

function tekenLijnen(p) {
  push();
  strokeWeight(1);
  stroke('grey');
  line(0, p, width, p);               // Groene lijn met dezelfde p-waarde als in draw()
  line(0, height - p, width, height - p); // Rode lijn met dezelfde p-waarde als in draw()
  pop();
}