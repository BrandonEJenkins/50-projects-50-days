const nums = document.querySelectorAll('.nums span'); // bring in span elements within the .nums element
const counter = document.querySelector('.counter'); // querySelectorAll creates node list which is similar to an array
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

function resetDOM() {
  // call replay button that can restart counter
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');

  // loop through numbers again after button clicked
  nums.forEach((num) => {
    num.classList.value = ''
  })

  nums[0].classList.add('in');
}

function runAnimation() {
  nums.forEach((num,idx) => {
    // console.log(num, idx); // prints both the html element and the index to the console
    
    // store next to last value
    const nextToLast = nums.length - 1;

    // create event listener to fire when the animation ends
    num.addEventListener('animationend', (e) => {
      // check to see if the animation that is ending is named goIn
      // check to see if the index is NOT the last
      if(e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
        // check to see if there is a next sibling before adding the class of .in
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in')
      } else {
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    })

  })
}

replay.addEventListener('click', () => {
  resetDOM();
  runAnimation();
})