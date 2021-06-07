import React from 'react';
import { NavContainer, AppTitle, UserName, AddPage } from './styles';

const Navbar = () => {
  return (
    <NavContainer>
      <AppTitle href='/'>CRUD Carros</AppTitle>
      <AddPage href='/adicionar'>Adicionar</AddPage>
      <UserName>usuário</UserName>
    </NavContainer>
  );
};

export default Navbar;
