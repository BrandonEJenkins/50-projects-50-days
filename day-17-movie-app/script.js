const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4ed5a9580cc9a5c9311cc19bd1036ee5&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=4ed5a9580cc9a5c9311cc19bd1036ee5&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  // console.log(data.results);
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    // construct divs containing the data and display in the dom
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `

    main.appendChild(movieEl);
  })
}

function getClassByRate(vote) {
  if(vote >= 8) {
    return 'green'
  } else if(vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  // get search input value
  const searchTerm = search.value;

  if(searchTerm && searchTerm !== '') {
    // concatenate search value
    getMovies(SEARCH_API + searchTerm);
    
    search.value = ''
  } else {
    // reload the page if nothing in the search field
    window.location.reload();
  }
} )