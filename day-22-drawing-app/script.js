const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20;
let isPressed = false; // isPressed is when mouse is down; will togggle using event listener
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (event) => {
  isPressed = true;

  x = event.offsetX;
  y = event.offsetY;

  // console.log(isPressed, x, y);
})

canvas.addEventListener('mousemove', (event) => {
  if(isPressed) {
    // store mouse position when mouse button held down and moved
    const x2 = event.offsetX;
    const y2 = event.offsetY;

    // console.log(x2, y2);

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
})

canvas.addEventListener('mouseup', (event) => {
  isPressed = false;

  x = undefined;
  y = undefined;

  // console.log(isPressed, x, y);
})

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();

  // draw line
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);

  // draw a color
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

// deal with drag and drop mouse events