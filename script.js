const toggle = document.querySelector('.toggle');
const imgCollapseBtn = document.getElementById('img-collapse');

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

imgCollapseBtn.addEventListener('click', (e) => toggleCardImage(e));

function toggleCardImage(e) {
  var x = document.querySelectorAll('.card-img');

  var i;

  for (i = 0; i < x.length; i++) {

    if(x[i].style.display === "none") {
      x[i].classList.add('show');
      x[i].classList.remove('hide');
      x[i].style.display = "block";
      e.target.innerHTML = 'Hide Images';
    } else {
      x[i].classList.add('hide');
      x[i].classList.remove('show');
      x[i].style.display = "none";
      e.target.innerHTML = 'Show Images';
    }

  }

}