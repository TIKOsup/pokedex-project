import { useState, useEffect } from "react";
import PokeAPI from "./pokeapi";
import Pokemon from "./Pokemon";
import { Button, Container, Grid } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
      <Container maxWidth="md">
        <header>
          <h1>Pokedex</h1>
        </header>
        <main>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            id="pokemonList"
          >
            {pokemonInfo.map((pokemon, i) => {
              return <Pokemon id={pokemon.name} key={i} />
            })}
          </Grid>
          <Grid
              container
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                size="small"
                onClick={() => {
                  setOffset(offset => offset + limit);
                }}
              >
                Show More
                <ExpandMoreIcon />
              </Button>
            </Grid>
        </main>
      </Container>
    </>
  );
}