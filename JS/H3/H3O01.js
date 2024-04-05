var score = 0;
var balletjes = [];
var ballSize = 50;

function setup() {
  canvas = createCanvas(600, 450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);

  // genereer 4 balletjes bij laden pagina
  for (var i = 0; i < 4; i++) {
    balletjes.push({
      x: random(50, width - 50),
      y: random(50, height - 50),
      kleur: color(random(255), random(255), random(255))
    });
  }

  // maak knop voor opnieuw beginnen
  resetButton = createButton('Opnieuw beginnen');
  resetButton.position(620, 180);
  resetButton.mousePressed(resetGame);
}

function draw() {
  background('lavender');
  fill('black');

  text("Score: " + score, 400, 20);

  // teken alle balletjes
  for (var i = 0; i < balletjes.length; i++) {
    push();
    translate(balletjes[i].x, balletjes[i].y);
    fill(balletjes[i].kleur);
    ellipse(0, 0, ballSize);
    pop();
  }

  // genereer een nieuw balletje als er geen balletjes meer is
  if (balletjes.length < 4) {
    balletjes.push({
      x: random(50, width - 50),
      y: random(50, height - 50),
      kleur: color(random(255), random(255), random(255))
    });
  }

  // restart the game if the ball size becomes 0
  if (ballSize == 0) {
    resetGame();
  }
}

function resetGame() {
  score = 0;
  balletjes = [];
  ballSize = 50;

  // genereer 4 nieuwe balletjes
  for (var i = 0; i < 4; i++) {
    balletjes.push({
      x: random(50, width - 50),
      y: random(50, height - 50),
      kleur: color(random(255), random(255), random(255))
    });
  }
}

function mousePressed() {
  for (var i = 0; i < balletjes.length; i++) {
    if (dist(mouseX, mouseY, balletjes[i].x, balletjes[i].y) < ballSize / 2) {
      score++;
      if (score % 50 == 0) {
        ballSize -= 5;
      }
      balletjes.splice(i, 1);
    }
  }
}

function balletje(x, y, kleur) {
  this.x = x;
  this.y = y;
  this.kleur = kleur;
}