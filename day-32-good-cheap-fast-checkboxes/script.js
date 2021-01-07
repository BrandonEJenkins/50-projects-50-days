const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

// when adding an event listener to a checkbox, use 'change' not 'click'
toggles.forEach(toggle => toggle.addEventListener('change', (evt) => doTheTrick(evt.target)));

function doTheTrick(theClickedOne) {
  // use '.checked' to access whether a checkbox is checked or not in the dom; result will be true or false
  if(good.checked && cheap.checked && fast.checked) {
    if(good === theClickedOne) {
      fast.checked = false;
    }
    if(cheap === theClickedOne) {
      good.checked = false;
    }
    if(fast === theClickedOne) {
      cheap.checked = false;
    }
  }
}