import React, { useEffect } from 'react';
import Letterheader from '../../components/letterHeader/letterHeader';
import Menu from '../../components/menu/Menu';
import { MainStyled } from '../../primeComponents';

const Mydata = () => {
  useEffect(() => {
    (async () => {
      //
    })();
  }, []);

  return (
    <>
      <Menu />
      <Letterheader phrase="My Datas" />
      <MainStyled></MainStyled>
      <letterFooter />
    </>
  );
};

export default Mydata;
