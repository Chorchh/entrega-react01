import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 100%;
  height: 100px;
  background-color: orange;
`;

export const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  gap: 20px;
`;

export const NavbarItem = styled.li`
  list-style: none;
  cursor: pointer;
  font-size: 20px;
`;
