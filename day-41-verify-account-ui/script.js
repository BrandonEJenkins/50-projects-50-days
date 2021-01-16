const codes = document.querySelectorAll('.code'); // creates a node list

// on page load puts cursor in first code input element
// grab first item in node list
codes[0].focus();

// loop through each input element, add listener 
codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    // check to see if the value of the key in event object is greater than 0, less than 9
    // then use focus() to move to the next input element after number between 0 - 9 is entered
    if(e.key >= 0 && e.key <= 9) {
      codes[idx].value = '';
      // force cursor to start in first input element
      setTimeout(() => codes[idx + 1].focus(), 10)
    } else if(e.key === 'Backspace') {
      // go back to previous input element on backspace
      setTimeout(() => codes[idx - 1].focus(), 10)
    }
  })
})