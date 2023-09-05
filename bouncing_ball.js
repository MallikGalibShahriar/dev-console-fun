/*  1. Right Click on webpage and click Inspect
    2. Click on Console
    3. Paste this code (modify as you want)
    4. Hit Enter, and click on web view area and scroll down.
    5. You'll see the ball. Click and Play (with keyboard arrow)
*/
    
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 15,
  speed: 5,
  dx: 0, 
  dy: 0, 
};

ctx.fillStyle = 'green'; // Change color as your wish 

function handleKeyDown(e) {
  switch (e.key) {
    case 'ArrowLeft':
      ball.dx = -ball.speed;
      ball.dy = 0;
      break;
    case 'ArrowRight':
      ball.dx = ball.speed;
      ball.dy = 0;
      break;
    case 'ArrowUp':
      ball.dx = 0;
      ball.dy = -ball.speed;
      break;
    case 'ArrowDown':
      ball.dx = 0;
      ball.dy = ball.speed;
      break;
  }
}

document.addEventListener('keydown', handleKeyDown);

function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.dx = -ball.dx;
  }

  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.dy = -ball.dy;
  }

  ball.x += ball.dx;
  ball.y += ball.dy;

  requestAnimationFrame(drawBall);
}

drawBall();
