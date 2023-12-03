import { useState, useEffect } from "react";
import PokeAPI from "./pokeapi";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

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
    <Grid item xs={4}>
      <Card id={id} sx={{ m: 3, minWidth: 200 }}>
        <CardMedia
          sx={{ height: 120, width: 120 }}
          component="img"
          src= { pokemonData.id && `${sprite_base_url}${pokemonData.id}.png` }
          alt= { pokemonData.name }
        />
        <CardContent>
          <Typography variant="overline" color="text.primary" component="p">
              #{ pokemonData.id }
            </Typography>
          <Typography variant="h6" color="text.primary" component="p">
            { pokemonData.name && pokemonData.name.substr(0, 1).toUpperCase() + pokemonData.name.substr(1) }
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}