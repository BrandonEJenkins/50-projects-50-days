const poke_container = document.getElementById('poke-container');
const pokemon_count = 150;
const colors = {
  fire: '#fddfdf',
  grass: '#defde0',
  electric: '#fcf7de',
  water: '#def3fd',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#f5f5f5',
  fighting: '#e6e0d4',
  normal: '#f5f5f5'
};

const main_types = Object.keys(colors);
console.log(main_types);

// fetch data from pokeapi by looping through index set by pokemon_count whenever getPokemon func is called
// need async await because the fetch method in getPokemon func returns a promise
const fetchPokemons = async () => {
  for(let i =1; i <= pokemon_count; i++) {
    await getPokemon(i)
  }
}

// func fetches data from pokeapi site
// need to await res.json() to return the json data
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  
  // console.log(data);

  createPokemonCard(data);
}

// for each data response fetched app will create a card
const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  // with a string you can use an index, similar to an array
  // sets the first letter of the name to uppercase
  // also concatenates name after the first letter
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  
  // pad the id with zeros
  // toString() converts it to a string
  // padStart() lets you pad the beginning with certain characters starting at a position you specify
  const id = pokemon.id.toString().padStart(3, '0');

  // type is an array of objects
  // console.log(pokemon.types);
  
  // get the name of the type of pokemon
  // use map to create a new array; for each type return the type object and get the type.name
  const poke_types = pokemon.types.map(type => type.type.name);
  // console.log(poke_types);

  // 
  // indexOf returns a -1 if there's no match; if match, then store type in "type" variable
  const type = main_types.find(type => poke_types.indexOf(type) > -1);

  // change color depending on type; recall that the keys for the colors are the types
  const color  = colors[type];

  pokemonEl.style.backgroundColor = color;

  // create template for html
  const pokemonInnerHTML = `
  <div class="img-container">
    <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
  </div>
  <div class="info">
    <span class="number">#${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>
  `

  pokemonEl.innerHTML = pokemonInnerHTML;

  poke_container.appendChild(pokemonEl);

}

fetchPokemons();