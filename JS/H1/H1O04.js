function setup() {
  canvas = createCanvas(450,400);
  background('cornflowerblue');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // teken de grond
  noStroke();
  fill('wheat');
  rect(0,350,450,100);
  // teken het huis
  strokeWeight(4);
  stroke('darkgrey');
  fill('lightgray');
  rect(100,280,100,100);
  fill('gray');

  strokeWeight(4);
  stroke('darkgray');
  fill('gray');
  beginShape();
  vertex(100,280);
  vertex(200,280);
  vertex(150,200);
  vertex(150,200);
  endShape(CLOSE)
  // teken de deur
  noStroke();
  // PAS ONDERSTAANDE REGEL AAN zodat de deur op de juiste plaats staat
  rect(120,330,30,50);
  noStroke();
  fill('Khaki');
  ellipse(350,100,150);
  

  fill('sienna');
  rect(300,250,40,130);
  fill('olive');
 
  ellipse(320,230,100,150);
  
  // VERVANG DEZE REGEL door een regel die het groen van de boom tekent met behulp van ellipse
  // Als je een cirkel wilt tekenen met diameter 300 kun je ellipse(0,0,300) gebruiken.
  // Als je een ellipse wilt maken met breedte 300 en hoogte 500, dan moet je een parameter toevoegen: ellipse(0,0,300,500).
}
