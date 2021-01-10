const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

// get each individual image by creating a node list
const img = document.querySelectorAll('#imgs img');

console.log(img);

// use let since it will be reassigned
let idx = 0;

// create interval so func will keep running
let interval = setInterval(run, 2000);

function run() {
  idx++;

  changeImage();
}

function changeImage() {
  // create func to change the image by shifting it 500px, i.e., the width of the image
  // you can achieve this by changing the translateX() value

  // check to see if carousel is at the beginning or last image using the node list index
  // recall that img is a node list since you used querySelectorAll
  if(idx > img.length - 1) {
    idx = 0
  } else if(idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;

}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
})

leftBtn.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
})