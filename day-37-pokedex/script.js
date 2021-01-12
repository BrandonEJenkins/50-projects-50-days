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
  console.log(data);
}

fetchPokemons();