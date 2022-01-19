/* eslint-disable no-unused-vars */
import React, { useEffect, memo } from 'react';
import LetterFooter from '../../components/letterFooter/letterFooter';
import Letterheader from '../../components/letterHeader/letterHeader';
import Menu from '../../components/menu/Menu';
import { MainStyled } from '../../primeComponents';
import getMyDatas from '../../utils/getMyDatas/getMyDatas';

const Mydata = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await getMyDatas();
      } catch (e) {
        const error = new Error(e);
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <>
      <Menu />
      <Letterheader phrase="My Datas" />
      <MainStyled></MainStyled>
      <LetterFooter />
    </>
  );
};

export default memo(Mydata);
