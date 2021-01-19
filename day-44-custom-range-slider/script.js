const range = document.getElementById('range');

// input event fires when range is dragged
range.addEventListener('input', (e) => {
  // use + to convert the value to a number
  const value = +e.target.value

  // add the slider value to the label in the browser; min, max set in html
  const label = e.target.nextElementSibling;
  
  // calculate value that corresponds to the position of the range thumb; range element width is 300px in css
  // getComputedStyle() lets you target an html element; getPropertyValue() tells app which property you want to target
  const range_width = getComputedStyle(e.target).getPropertyValue('width');
  const label_width = getComputedStyle(label).getPropertyValue('width');

  // remove 'px' from range_width, label_width variables; subtract 2 because you want to remove the two last characters, i.e., 'px'
  const num_width = +range_width.substring(0, range_width.length - 2)
  const num_label_width = +label_width.substring(0, label_width.length - 2)
  
  // console.log(range_width, label_width, num_width, num_label_width);

  // get min, max values from html
  const max =+e.target.max;
  const min =+e.target.min;
  // console.log(min, max);

  const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);
  // console.log(left);

  // apply left variable value to the left css property of the label
  label.style.left = `${left}px`

  
  label.innerHTML = value;
})

// use scale function to map a range of numbers to another range of numbers
// allows you position the slider label directly over the thumb as it moves; otherwise the label will be off by about 10px at far left position and far right position
const scale = (num, in_min, in_max, out_min, out_max) => { 
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}