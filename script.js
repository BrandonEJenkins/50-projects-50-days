const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', (event) => {
  const html = document.querySelector('html');
  if(html.classList.contains('light')) {
    html.classList.remove('light');
    event.target.innerHTML = 'Light Mode'
  } else {
    html.classList.add('light');
    event.target.innerHTML = 'Dark Mode'
  }
})