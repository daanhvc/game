var straal = 0x14;
var xPositie;
var yPositie;
var xSnelheid = 0x8;
var ySnelheid = 0x5;
var onderlingeAfstand;

function setup() {
    var canvas = createCanvas(0x3e8, 0x12c);
    canvas.parent('processing');
    frameRate(0x32);
    colorMode(RGB, 0xff, 0xff, 0xff, 0x1);
    background(0x0, 0x0, 0x4b, 0x1);
    noStroke();
    textFont('Verdana');
    textSize(0x8c);
    xPositie = straal;
    yPositie = height / 0x2;
}

function draw() {
    background(0x0, 0x0, 0x4b, 0.05);
    fill(0x0, 0x0, 0xff, 0x1);
    ellipse(0x226, height - straal, 0x2 * straal);
    xPositie += xSnelheid;
    yPositie += ySnelheid;
    fill(0xff, 0xff, 0xff, 0x1);
    ellipse(xPositie, yPositie, 0x2 * straal);
    onderlingeAfstand = round(dist(0x226, height - straal, xPositie, yPositie)) - 0x2 * straal;
    if (onderlingeAfstand <= 0x0) {
        eindScherm();
        noLoop();
    }
    gebruikBesturing();
    if (yPositie < straal || yPositie > height - straal) {
        ySnelheid *= -0x1;
    }
    if (xPositie < straal || xPositie > width - straal) {
        xSnelheid *= -0x1;
    }
}

function gebruikBesturing() {
    if (keyIsDown(LEFT_ARROW)) {
        xSnelheid += 0x1;
        ySnelheid += 0x1;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        xSnelheid -= 0x1;
        ySnelheid -= 0x1;
    }
}

function eindScherm() {
    background('white');
    fill('black');
    text('GEVANGEN!', 0x4b, 0xc8);
    noLoop();
}