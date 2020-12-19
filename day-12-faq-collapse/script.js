// Bring in toggle buttons (querySelectorAll)
// Loop through nodelist (forEach)
// Add click event (addEventListener)
// Toggle the active class on the parent node (.parentNode & classList.toggle())

const toggleBtn = document.querySelectorAll('.faq-toggle');

toggleBtn.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});