const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  // set text to 0
  counter.innerText = '0';

  const updateCounter = () => {
    // convert data-target value to number
    const target = +counter.getAttribute('data-target'); // using '+' in front of counter converts the string into a number
    console.log(typeof target, target);
    
    // get data-target value as a number
    const c = +counter.innerText;


    // use increment to configure how the innerText counts up to the data-target value
    const increment = target / 200;
    console.log(increment);

    if(c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  }

  updateCounter();
})