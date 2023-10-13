var diameter = 300;
var speed = 2;
var xPos1 = 0;
var xPos2 = 0;

function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent('processing');
  colorMode(RGB, 255, 255, 255, 1);
  noStroke();
}

function draw() {
  background(255, 255, 255, 1);

  fill(255, 0, 0, 0.5);
  ellipse(width / 2 + xPos1, height / 2, diameter);

  fill(0, 0, 255, 0.5);
  ellipse(width / 2 - xPos2, height / 2, diameter);

  // Beweeg de bollen
  xPos1 += speed;
  xPos2 += speed;

  // Als de bol de rechterkant bereikt, reset de positie
  if (xPos1 > width) {
    xPos1 = 0;
  }

  // Als de bol de linkerkant bereikt, reset de positie
  if (xPos2 > width) {
    xPos2 = 0;
  }
}