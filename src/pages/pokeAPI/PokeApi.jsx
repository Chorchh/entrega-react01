import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ButtonPokemon, Container, ContainerPokemon, DataPokemon, FormPokemon, HabilidadPokemon, ImagenPokemon, InputPokemon, NombrePokemon, TituloPokedex } from './pokeApiStyles';



const PokeApi = () => {
  const [inputNumber, setInputNumber] = useState("")
  const [pokemon, setPokemon] = useState([])
  const [weight, setWeight] = useState([])
  const [height, setHeight] = useState([])


  const handleChange = (e) => setInputNumber(e.target.value)
  const URL = `https://pokeapi.co/api/v2/pokemon/${inputNumber}`



  useEffect(() => {
    axios.get(URL).then((res) => {
      setPokemon(res.data.name)
      setWeight(res.data.weight)
      setHeight(res.data.height)
    })
  }, [URL])


  const altura = altura => {
    let medida = altura / 10
    return medida
  }

  const peso = peso => {
    let medida = peso / 10
    return medida
  }


  return (
    <>
    <Container>
      <TituloPokedex>Busca tu Pokemon!</TituloPokedex>
        <FormPokemon>
          <InputPokemon type='number' placeholder='Ingresa un número de Pokemon' value={inputNumber} onChange={handleChange}/>
          <ButtonPokemon>Buscar</ButtonPokemon>
          <ContainerPokemon>
            <NombrePokemon>{pokemon}</NombrePokemon>
            <ImagenPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${inputNumber}.png`} alt="pokemon"/>
            <DataPokemon>Peso: {altura(weight)} Mts</DataPokemon>
            <DataPokemon>Altura: {peso(height) } Kgs</DataPokemon>
          </ContainerPokemon>
        </FormPokemon>
      </Container>
    </>
  )
}



export default PokeApi