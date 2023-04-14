import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PokeApi = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        setPokemon(res.data.pokemon);
  })
  .catch((err) => 
    console.log(err));
  }, [setPokemon]);

  return (
    <>
      <h2 style={{textAlign: "center"}}>El Pokemon</h2>

    <p>{pokemon}</p>
    </>
  )
}

export default PokeApi