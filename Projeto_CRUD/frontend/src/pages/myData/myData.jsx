/* eslint-disable no-unused-vars */
import React, { useEffect, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LetterFooter from '../../components/letterFooter/letterFooter';
import Letterheader from '../../components/letterHeader/letterHeader';
import Menu from '../../components/menu/Menu';
import { MainStyled } from '../../primeComponents';
import getMyDatas from '../../utils/getMyDatas/getMyDatas';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';

const Mydata = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await getMyDatas();

        if (response === false) {
          tokenTimeOut(navigate);
        } else {
          //
        }
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
