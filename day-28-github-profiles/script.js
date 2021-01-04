const API_URL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');

// function getUser(username) {
//   // defaults to axios.get()
//   axios(API_URL + username)
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))
// }

async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);
  
    console.log(data);
  } catch(err) {
    console.log(err);
  }
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const user = search.value;

  if(user) {
    // call getUser if value is input
    getUser(user);

    // clear search value
    search.value = '';
  }
})