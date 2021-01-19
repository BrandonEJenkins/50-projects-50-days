const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', (evt) => {
  // console.log(evt.target);

  // if element being clicked on contains a class of .rating then do something...
  if(evt.target.parentNode.classList.contains('rating')) {
    // console.log(evt.target);
    removeActive();
    evt.target.parentNode.classList.add('active');
    
    // grab small tag value from sibling
    selectedRating = evt.target.nextElementSibling.innerHTML;
    // console.log(selectedRating);
  }
})

sendBtn.addEventListener('click', (evt) => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `
})

// loop through ratings node list and remove .active
function removeActive() {
  for(let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}



// Event bubbling and event propagation
// adding an event listener for a parent element (e.g., on button click) also fires off for any child element in its container
// using parentNode fires off event if parent element of image is clicked