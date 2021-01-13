const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item, idx) => {

  // querySelectorAll returns a node list; forEach(item) is referencing each element in the node list array
  // listItems.forEach(item => console.log(item));  // prints each item in the node list array to the console

  item.addEventListener('click', () => {
    hideAllContents();
    hideAllItems();

    // add .active to the item that is clicked on; add .show to the corresponding image
    item.classList.add('active')
    contents[idx].classList.add('show')
  })
})

function hideAllContents() {
  // loop through each item in the node list array created by using querySelectorAll('.content')
  contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems() {
  // loop through each item in the node list array created by using querySelectorAll('.listItems')
  listItems.forEach(item => item.classList.remove('active'))
}