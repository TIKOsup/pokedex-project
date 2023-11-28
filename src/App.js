import * as React from "react";
import { useState, useEffect } from "react";

function Pokemon({ id }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonImg, setPokemonImg] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    .then(res => res.json())
    .then(data => {
      setPokemonData(data);
      setPokemonImg(data.sprites.front_default);
    })
    .catch((err) => {
      console.log(err.message);
    })
  }, []);

  return (
    <section id={id}>
      <img 
        src= { pokemonImg }
        alt= { pokemonData.name }
      />
      <p>{ pokemonData.name }</p>
    </section>
  );
}

export default function Profile() {
  return (
    <>
      <header>
        <h1>Pokedex</h1>
      </header>
      <main>
        <Pokemon id={1} />
        <Pokemon id={2} />
        <Pokemon id={3} />
      </main>
    </>
  );
}