const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

// creates a custom 'dblclick' style event listener that sets a time threshold between clicks
loveMe.addEventListener('click', (event) => {
  if(clickTime === 0) {
    clickTime = new Date().getTime()
  } else {
    if((new Date().getTime() - clickTime) < 800) {
      createHeart(event);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
})

const createHeart = (event) => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = event.clientX;
  const y = event.clientY;

  const leftOffset = event.target.offsetLeft;
  const topOffset = event.target.offsetTop;

  const xInsideImage = x - leftOffset;
  const yInsideImage = y - topOffset;

  // console.log(xInsideImage, yInsideImage);

  heart.style.top = `${yInsideImage}px`;
  heart.style.left = `${xInsideImage}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++timesClicked;

  setTimeout(() => heart.remove(), 2000);
}