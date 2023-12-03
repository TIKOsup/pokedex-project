import { useState, useEffect } from "react";
import PokeAPI from "./pokeapi";
import Pokemon from "./Pokemon";


export default function App() {
  const limit = 6;
  const [offset, setOffset] = useState(0);
  const [pokemonInfo, setPokemonInfo] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await PokeAPI.get(`pokemon?offset=${offset}` + (typeof limit === "number" && `&limit=${limit}`));
      console.log(res.data);
      setPokemonInfo(pokemonInfo.concat(res.data.results));
    })()
  }, [offset])

  return (
    <>
      <header>
        <h1>Pokedex</h1>
      </header>
      <main>
        <section id="pokemonList">
          {pokemonInfo.map((pokemon, i) => {
            return <Pokemon id={pokemon.name} key={i} />
          })}
          <button onClick={() => {
            setOffset(offset => offset + limit);
          }}>Show More</button>
        </section>
      </main>
    </>
  );
}