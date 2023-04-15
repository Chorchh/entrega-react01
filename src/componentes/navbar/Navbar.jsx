import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer, NavbarItem, NavbarList } from './NavbarStyles';

const Navbar = () => {
  return (
   <NavbarContainer>
     <Link to="/todo" style={{margin: "20px", fontSize: "30px", color: "#131415"}}>Todo</Link>
     <Link to="/pokeapi" style={{margin: "20px", fontSize: "30px", color: "#131415"}}>pokeAPI</Link>
   </NavbarContainer>
  )
}

export default Navbar