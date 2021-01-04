const API_URL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// get request to get user //
async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);
  
    // console.log(data);
    createUserCard(data);
    getRepos(username);
  } catch(err) {
    if(err.response.status == 404) {
      createErrorCard('No profile with this username');
    }
    // console.log(err);
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(API_URL + username + '/repos?sort=created'); // sorted by most recently created repo
  
    // console.log(data);
    addReposToCard(data);
  } catch(err) {
      createErrorCard('Problem fetching repos');
  }

}

function createUserCard(user) {
  const cardHTML = `
  <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>

        <ul>
          <li>${user.followers}<strong>Followers</strong></li>
          <li>${user.following}<strong>Following</strong></li>
          <li>${user.public_repos}<strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>

      </div>
    </div>
  `
  main.innerHTML = cardHTML;

}

function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
      <h1>${msg}</h1>
    </div>
  `

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');

  repos
    .slice(0, 5) // reduces the repos array to the first 5 elements
    .forEach(repo => {
      const repoEl = document.createElement('a');
      repoEl.classList.add('repo');
      repoEl.href = repo.html_url; // assigns href the value of the repo url from the user/repos response object
      repoEl.target = '_blank'; // opens in a new window
      repoEl.innerText = repo.name; // sets text inside link to repo name
      reposEl.appendChild(repoEl); // inserts each repo element to the dom
    })
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