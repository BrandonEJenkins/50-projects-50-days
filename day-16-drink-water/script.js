const smallCups = document.querySelectorAll('.cup-small'); // querySelectorAll creates nodelist which allows the use of forEach
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
  console.log(idx);
  cup.addEventListener('click', () => highlightCups(idx));
})

function highlightCups(idx) {

  if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx--
  };

  console.log(idx);
  smallCups.forEach((cup, idx2) => {
    if(idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  })

  updateBigCup();
}

function updateBigCup() {

  // in querySelector and querySelectorAll you can pass in any css selector
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if(fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${fullCups / totalCups * 330}px`;
    percentage.innerText = `${fullCups / totalCups * 100}%`;
  }

  if(fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
  }

}