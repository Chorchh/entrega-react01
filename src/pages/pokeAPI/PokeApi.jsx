import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ButtonPokemon, Container, FormPokemon, InputPokemon, TituloPokedex } from './pokeApiStyles';



const PokeApi = () => {
  const [pokemon, setPokemon] = useState([])
  const [inputNumber, setInputNumber] = useState("")

  const handleChange = (e) => setInputNumber(e.target.value)
  const URL = `https://pokeapi.co/api/v2/pokemon/${inputNumber}`



  useEffect(() => {
    axios.get(URL).then((res) => {
      setPokemon(res.data.name)
    })
  }, [URL])

  return (
    <>
    <Container>
      <TituloPokedex>Busca tu Pokemon!</TituloPokedex>
        <FormPokemon>
          <InputPokemon type='number' placeholder='Ingresa un número de Pokemon' value={inputNumber} onChange={handleChange}/>
          <ButtonPokemon>Buscar</ButtonPokemon>
          <p style={{color: "white"}}>Nombre: {pokemon}</p>
        </FormPokemon>
      </Container>
    </>
  )
}



export default PokeApi