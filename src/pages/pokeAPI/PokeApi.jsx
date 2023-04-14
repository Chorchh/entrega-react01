import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PokeApi = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        setPokemon(res.data.results);
  })
  .catch((err) => 
    console.log(err));
  }, [setPokemon]);

  return (
    <>
      <h2 style={{textAlign: "center"}}>El Pokemon</h2>
      <div>
        <div key={pokemon.map((pokemones) => {
          <div key={pokemones.name}>{pokemones.name}
            console.log(pokemon)
          </div>

        })}></div>

      </div>

    </>
  )
}

export default PokeApi