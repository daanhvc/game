const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const bird = {
  x: 50,
  y: 150,
  width: 32,
  height: 32,
  speed: 0,
  gravity: 0.5,
  jump: -10,
};

const pipes = [];
const gapSize = 100;

function drawBird() {
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
}

function drawPipes() {
  ctx.fillStyle = '#771717';
  for (let i = 0; i < pipes.length; i++) {
    const pipe = pipes[i];
    ctx.fillRect(pipe.x, pipe.y, 20, pipe.height);
    ctx.fillRect(pipe.x, pipe.y + pipe.height + gapSize, 20, canvas.height - pipe.y - pipe.height - gapSize);
  }
}

function updateBird() {
  bird.speed += bird.gravity;
  bird.y += bird.speed;

  if (bird.y + bird.height > canvas.height || bird.y < 0) {
    restartGame();
  }
}

function updatePipes() {
  for (let i = 0; i < pipes.length; i++) {
    const pipe = pipes[i];
    pipe.x -= 2;

    if (pipe.x + 20 < bird.x && pipe.removed === undefined) {
      pipe.removed = true;
    }

    if (pipe.x + 20 < 0) {
      pipes.shift();
    }
  }

  if (Math.random() < 0.2 && pipes.length < 6) {
    pipes.push({
      x: canvas.width,
      y: Math.floor(Math.random() * (canvas.height - gapSize - 100)) + 100,
      height: Math.floor(Math.random() * (canvas.height - gapSize - 200)) + 100,
      removed: undefined,
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBird();
  drawPipes();
}

function update() {
  updateBird();
  updatePipes();
}

function restartGame() {
  bird.y = canvas.height / 2;
  bird.speed = 0;
  pipes.length = 0;
}

function handleKeyDown(e) {}
 