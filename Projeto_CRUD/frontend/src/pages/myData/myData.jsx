/* eslint-disable no-unused-vars */
import React, { useEffect, memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LetterFooter from '../../components/letterFooter/letterFooter';
import Letterheader from '../../components/letterHeader/letterHeader';
import Loading from '../../components/loading/Loading';
import Menu from '../../components/menu/Menu';
import { DivLoading, MainStyled } from '../../primeComponents';
import getMyDatas from '../../utils/getMyDatas/getMyDatas';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';

const Mydata = () => {
  const navigate = useNavigate();

  const [userNameState, setuserNameState] = useState('');
  const [loadingState, setloadingState] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await getMyDatas();
        console.log(response);

        if (response === false) {
          tokenTimeOut(navigate);
        } else {
          const { userName, userDatas } = response;

          setuserNameState(userName);
          setloadingState(false);
        }
      } catch (e) {
        const error = new Error(e);
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <>
      {loadingState ? (
        <DivLoading>
          <Loading />
        </DivLoading>
      ) : (
        <>
          <Menu user={userNameState} />
          <Letterheader phrase="My Datas" />
          <MainStyled></MainStyled>
          <LetterFooter />
        </>
      )}
    </>
  );
};

export default memo(Mydata);
