import { useState, useEffect } from "react";
import PokeAPI from "./pokeapi";

export default function Pokemon({ id }) {
  const [pokemonData, setPokemonData] = useState([]);
  const sprite_base_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  useEffect(() => {
    (async () => {
      const res = await PokeAPI.get(`pokemon/${id}`);
      // console.log(res.data);
      setPokemonData(res.data);
    })()
  }, []);

  return (
    <div id={id}>
      <img 
        src= { pokemonData.id && `${sprite_base_url}${pokemonData.id}.png` }
        alt= { pokemonData.name }
      />
      <p>{ pokemonData.id + " " + pokemonData.name }</p>
    </div>
  );
}