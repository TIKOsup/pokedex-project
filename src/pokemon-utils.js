const api_url = "https://pokeapi.co/api/v2/";

// async function getPokemonPage(offset, limit) {
//   // Making a request to the PokeAPI and getting the response
//   const response = await fetch(api_url + `pokemon?offset=${offset}&limit=${limit}`);

//   // Parsing to JSON
//   const pokemonList = await response.json();
//   console.log(pokemonList);
// }

// getPokemonPage();

export function getPokemon(pokemon_id) {
  // Making a request to the PokeAPI and getting the response
  const response = fetch(api_url + `pokemon/${pokemon_id}`);

  // Parsing to JSON
  const data = response.json();
  console.log(data);

  // document.getElementById("pokemon-name").innerHTML = data.name;
  return data;
}

// Calling the function
// getPokemon(1);