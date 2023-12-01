var xJager = 50;
var yJager = 50;
var xProoi = 800;
var yProoi = 175;

function setup() {
  canvas = createCanvas(1000, 400);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(140);
  noStroke();
  frameRate(50);
}

function draw() {
  background('olive');

  // Bewegingen jager
  if (keyIsDown(LEFT_ARROW)) {
    xJager -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xJager += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    yJager -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yJager += 5;
  }

  // Begrenzing jager
  xJager = constrain(xJager, 0, width - 100);
  yJager = constrain(yJager, 0, height - 100);

  // Bewegingen prooi (tweede speler)
  if (keyIsDown(65)) {
    // 'a' toets
    xProoi -= 5;
  }
  if (keyIsDown(68)) {
    // 'd' toets
    xProoi += 5;
  }
  if (keyIsDown(87)) {
    // 'w' toets
    yProoi -= 5;
  }
  if (keyIsDown(83)) {
    // 's' toets
    yProoi += 5;
  }

  // Begrenzing prooi
  xProoi = constrain(xProoi, 0, width - 75);
  yProoi = constrain(yProoi, 0, height - 50);

  // Kleuring prooi
  if (xJager + 100 >= xProoi && xJager <= xProoi + 75 && yJager + 100 >= yProoi && yJager <= yProoi + 50) {
    fill('chartreuse');
  } else {
    fill('darkkhaki');
  }

  // Prooi tekenen
  rect(xProoi, yProoi, 75, 50);

  // Jager tekenen
  fill('moccasin');
  rect(xJager, yJager, 100, 100);

  // Controleren of jager prooi raakt
  if (xJager + 100 >= xProoi && xJager <= xProoi + 75 && yJager + 100 >= yProoi && yJager <= yProoi + 50) {
    eindScherm();
  }
}

function eindScherm() {
  background('white');
  fill('black');
  text("GEVANGEN!", 75, 250);
  noLoop();
}
