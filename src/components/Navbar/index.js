import React from 'react';
import { NavContainer, AppTitle, UserName } from './styles';

const Navbar = () => {
  return (
    <NavContainer>
      <AppTitle>CRUD Carros</AppTitle>
      <UserName>usuário</UserName>
    </NavContainer>
  );
};

export default Navbar;
