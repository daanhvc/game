var straalWit = 20;
var xPositieWit;
var yPositieWit;
var xSnelheidWit = 15;
var ySnelheidWit = 10;
var stuiterFactor = 1.5; // Verhoogde stuiteringsfactor

var straalBlauw = 20;
var xPositieBlauw;
var yPositieBlauw;

function setup() {
  canvas = createCanvas(1000, 300);
  canvas.parent('processing');
  frameRate(50);
  colorMode(RGB, 255, 255, 255, 1);
  background(0, 0, 75, 1);
  noStroke();
  textFont("Verdana");
  textSize(20);
  xPositieWit = straalWit;
  yPositieWit = height / 2;
 
  xPositieBlauw = width / 2;
  yPositieBlauw = height - straalBlauw;
}

function draw() {
  background(0, 0, 75, 0.05);
 
  // Blauw balletje
  fill(0, 0, 255, 1);
  ellipse(xPositieBlauw, yPositieBlauw, 2 * straalBlauw);
 
  // Witte bewegende bal
  fill(255, 255, 255, 1);
  ellipse(xPositieWit, yPositieWit, 2 * straalWit);

  // Onderlinge afstand berekenen met de dist-functie
  var onderlingeAfstand = dist(xPositieWit, yPositieWit, xPositieBlauw, yPositieBlauw);

  if (onderlingeAfstand <= straalWit + straalBlauw) {
    eindScherm();
    noLoop();
  }

  gebruikBesturing();

  // Aantrekkingskracht van zijkanten
  if (xPositieWit < width / 2) {
    xSnelheidWit -= 0.5 * stuiterFactor; // Keer de aantrekkingskracht om en verhoog de stuiteringsfactor
  } else {
    xSnelheidWit += 0.5 * stuiterFactor; // Keer de aantrekkingskracht om en verhoog de stuiteringsfactor
  }

  // Harde terugstuitering bij de zijkanten voor de witte bal
  if (xPositieWit < straalWit || xPositieWit > width - straalWit) {
    xSnelheidWit *= -1 * stuiterFactor; // Verhoog de stuiteringsfactor voor snelheid
  }

  if (yPositieWit < straalWit || yPositieWit > height - straalWit) {
    ySnelheidWit *= -1 * stuiterFactor; // Verhoog de stuiteringsfactor voor snelheid
  }
 
  // Beweging witte bal
  xPositieWit += xSnelheidWit;
  yPositieWit += ySnelheidWit;
}

function gebruikBesturing() {
  if (keyIsDown(LEFT_ARROW)) {
    xSnelheidWit += 0.5 * stuiterFactor; // Keer de aantrekkingskracht om en verhoog de stuiteringsfactor
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xSnelheidWit -= 0.5 * stuiterFactor; // Keer de aantrekkingskracht om en verhoog de stuiteringsfactor
  }
}

function eindScherm() {
  background('white');
  fill('black');
  text("GEPAKT!", width/2 - 50, height/2);
  noLoop();
}