import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer, NavbarItem, NavbarList } from './NavbarStyles';

const Navbar = () => {
  return (
   <NavbarContainer>
     <Link to="/todo">Todo</Link>
     <Link to="/pokeapi">pokeAPI</Link>
   </NavbarContainer>
  )
}

export default Navbar