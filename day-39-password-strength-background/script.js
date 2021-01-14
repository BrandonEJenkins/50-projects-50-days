const password = document.getElementById('password');
const background = document.getElementById('background');

// add listener to get input characters in password input element
password.addEventListener('input', (e) => {
  const input = e.target.value;
  // console.log(input);

  // get length of input value
  const length = input.length;
  // console.log(length);

  // decrease background image blur by 2px for each character typed in password input element
  // console.log(20 - length * 2);
  const blurValue = 20 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
})