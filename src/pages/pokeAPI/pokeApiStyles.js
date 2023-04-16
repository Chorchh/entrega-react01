import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  background-color: #131415;
`;

export const TituloPokedex = styled.h1`
  font-size: 50px;
  color: red;
  text-align: center;
  margin-top: 60px;
`;

export const FormPokemon = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin-top: 50px;
`;

export const InputPokemon = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border: none;
  padding-left: 10px;
`;

export const ButtonPokemon = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: none;
  background-color: red;
  margin-top: 10px;
`;

export const ContainerPokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  height: 400px;
  border: 1px solid red;
  background-color: white;
  padding: 10px;
  margin-top: 40px;
  border-radius: 5px;
`;

export const NombrePokemon = styled.h2`
  font-size: 30px;
  color: black;
  text-align: center;
  margin-top: 10px;
  text-transform: uppercase;
`;

export const ImagenPokemon = styled.img`
  width: 150px;
  height: 150px;
`;

export const DataPokemon = styled.p`
  font-size: 18px;
  color: black;
  text-align: center;
  margin-top: 5px;
  text-transform: capitalize;
`;

export const HabilidadPokemon = styled.p`
  font-size: 18px;
  color: black;
  text-align: center;
  margin-top: 5px;
  text-transform: capitalize;
`;
