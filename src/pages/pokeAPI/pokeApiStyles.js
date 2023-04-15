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
`;
