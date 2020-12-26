const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
  button.addEventListener('click', function (event) {
    // get position where click occurs in viewport
    const x = event.clientX;
    const y = event.clientY;

    // get position of the button
    const buttonTop = event.target.offsetTop;
    const buttonLeft = event.target.offsetLeft;

    //calculate position of the mouse click in the button element
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    // create span with top and left position inline style based on position of mouse click 
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  })
})