const result = document.getElementById('result');
const filter = document.getElementById('filter');

const listItems = [];

getData();

// add listener to input filter element to read values when they're input
filter.addEventListener('input', (evt) => filterData(evt.target.value));

// fetch data
async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50');

  // destructure results fromt the data object
  const { results } = await res.json();
  // console.log(data);

  // Clear result
  result.innerHTML = '';

  // construct a list item for each user
  results.forEach(user => {
    const li = document.createElement('li');

    // push each li into the empty array
    listItems.push(li)

    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `

    result.appendChild(li);
  });
}

// create function to loop through inputs to search element and see if the random user results match 
function filterData(searchTerm) {
  // console.log(searchTerm);

  // in getData() function, fetched user data is pushed to the listItems array
  // which was initialized as an empty array at beginning of code
  listItems.forEach(item => {
    // remove .hide if fetched data matches search
    if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide')
    } else {
      // add .hide if fetched user data does not match the name or location
      item.classList.add('hide');
    }
  })


}