const container = document.querySelector('.container');

const unsplashURL = 'https://source.unsplash.com/random/';

// 10 rows of images with 3 images in each row
const rows = 10;

for(let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = `${unsplashURL}${getRandomSize()}`

  container.appendChild(img);
}

// console.log(getRandomSize());

function getRandomSize() {
  return `${getRandomNum()}x${getRandomNum()}`
}

// console.log(getRandomNum())

// get random number between 300 and 310
function getRandomNum() {
  return Math.floor(Math.random() * 10) + 300;
}