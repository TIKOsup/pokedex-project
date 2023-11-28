import * as React from "react";
import { useState, useEffect } from "react";

const api_base_url = "https://pokeapi.co/api/v2/";
const limit = 10;

function Pokemon({ id }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonImg, setPokemonImg] = useState({});

  useEffect(() => {
    fetch(`${api_base_url}pokemon/${id}`)
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

export default function Pokedex() {
  const [offset, setOffset] = useState(0);
  const [pokemonPage, setPokemonPage] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(`${api_base_url}pokemon?${offset}` + (typeof limit !== "underfined" && `&limit=${limit}`))
    .then(res => res.json())
    .then(data => {
      setPokemonPage(data);
      setPokemonList(data.results);
    })
    .catch((err) => {
      console.log(err.message);
    })
  }, []);

  function handleMore() {
    // TODO
    setOffset(offset + limit);
  }

  return (
    <>
      <header>
        <h1>Pokedex</h1>
      </header>
      <main>
        <section>
          {pokemonList.map(pokemon => {
            return <Pokemon id={pokemon.name} />
          })}
        </section>
        <button onClick={handleMore}>Show More</button>
      </main>
    </>
  );
}