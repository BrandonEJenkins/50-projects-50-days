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
  var cardImage = document.querySelectorAll('.card-img');

  var i;

  for (i = 0; i < cardImage.length; i++) {

    if(cardImage[i].style.display === "none") {
      cardImage[i].classList.add('show');
      cardImage[i].classList.remove('hide');
      cardImage[i].style.display = "block";
      e.target.innerHTML = 'Hide Images';
    } else {
      cardImage[i].classList.add('hide');
      cardImage[i].classList.remove('show');
      cardImage[i].style.display = "none";
      e.target.innerHTML = 'Show Images';
    }

  }

}