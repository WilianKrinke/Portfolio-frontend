import React from 'react';
import LetterFooter from '../../components/letterFooter/letterFooter';
import Letterheader from '../../components/letterHeader/letterHeader';
import Menu from '../../components/menu/Menu.jsx';
import { MainStyled } from '../../primeComponents';

const Myfavorites = () => {
  return (
    <>
      <Menu />
      <Letterheader phrase="My Favorites" />
      <MainStyled></MainStyled>
      <LetterFooter />
    </>
  );
};

export default Myfavorites;
