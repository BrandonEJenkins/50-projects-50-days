const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn');
const game_container = document.getElementById('game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const message = document.getElementById('message');

let seconds = 0;
let score = 0;
let selected_insect = {};

start_btn.addEventListener('click', () => screens[0].classList.add('up'));

choose_insect_btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    selected_insect = { src, alt };

    screens[1].classList.add('up');

    setTimeout(createInsect, 1000);
    
    startGame();
  })
})

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60; // modulus operator

  // add "0" in front if less than 10 sec
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;

  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;
}

// insert into dom
function createInsect() {
  const insect = document.createElement('div');
  insect.classList.add('insect');

  // get x, y position from function; place in random location
  const { x, y } = getRandomLocation();

  insect.style.top = `${y}px`
  insect.style.left = `${x}px`

  // insert into dom; include transform property with random rotation
  insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)"/>`

  insect.addEventListener('click', catchInsect);

  // add to dom
  game_container.appendChild(insect);
}

// get x and y position
function getRandomLocation() {

  // get pixels of width
  const width = window.innerWidth;
  const height = window.innerHeight;

  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;

  return { x, y };
}

// increase score when insect clicked
function catchInsect() {
  
  increaseScore()
  // 'this' pertains to insect that was clicked on
  this.classList.add('caught');
  setTimeout(() => this.remove(), 2000);

  addInsects();
}

function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}

function increaseScore() {
  score++;

  // insert annoying message
  if(score > 19) {
    message.classList.add('visible');
  }
  scoreEl.innerHTML = `Score: ${score}`;
}