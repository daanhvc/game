var xJOS = 225;
var yJOS = 375;
var snelheidJOS = 17; // Stap 77: Declareer de variabele snelheidJOS en geef deze de waarde 17

function setup() {
  canvas = createCanvas(450, 450);
  canvas.parent('processing');
  textFont("Verdana");
  textSize(14);
  frameRate(20);
}

function draw() {
  background('lavender');
  fill('black');

  // Stap 75: Haal de opmerkingstekens weg van de regel // yJOS--;
  // Stap 78: Pas de regel aan zodat JOS met stapjes van 17 naar boven beweegt
  yJOS -= snelheidJOS;

  // Stap 77: Voeg een nieuwe regel toe om de snelheid van JOS bij elke loop van de draw te laten afnemen met 0,5
  snelheidJOS -= 0.5;

  // Stap 80: Voeg een regel toe om de snelheid bovenin te tonen naast x en y
  text("x = " + round(xJOS) + " y = " + yJOS + " snelheid = " + snelheidJOS.toFixed(2), 10, 40);

  xJOS = constrain(xJOS, 75, width - 75);
  yJOS = constrain(yJOS, 75, height - 75);
  text("x = " + round(xJOS) + " y = " + yJOS, 10, 20);

  translate(xJOS, yJOS);

  // in de volgende regels wordt JOS getekend
  push();
  scale(1);
  noStroke();
  fill('indianred');
  ellipse(0, 0, 150);
  fill('slategray');
  ellipse(-20, -30, 50);
  ellipse(20, -30, 50);
  fill('white');
  ellipse(-20, -25, 20, 40);
  ellipse(20, -25, 20, 40);
  fill('orange');
  ellipse(0, 10, 50);
  stroke('slategray');
  strokeWeight(10);
  fill('white');
  arc(0, 40, 80, 40, 0, PI, CHORD);
  pop();
  // einde tekenen JOS
}
 // einde tekenen JOS