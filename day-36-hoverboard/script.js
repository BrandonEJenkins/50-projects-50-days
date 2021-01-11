const container = document.getElementById('container');

var colors;

const colorArr1 = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22'];
const colorArr2 = ['#f15123', '#3491dd', '#f4b138', '#3d57a7'];

const SQUARES = 500;

for(let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  // console.log(element);
  // console.log(color);

  colors = colorArr1;

  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  // console.log('moved out');

  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}