/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LetterFooter from '../../components/letterFooter/letterFooter';
import Letterheader from '../../components/letterHeader/letterHeader';
import Loading from '../../components/loading/Loading';
import Menu from '../../components/menu/Menu';
import { DivLoading, MainStyled } from '../../primeComponents';
import acessUser from '../../utils/accessUser/acessUser';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import { SectionContainer } from '../myBorrowedBooks/styled';

const ContactPage = () => {
  const [loadingState, setloadingState] = useState(true);
  const [loadingButtonState, setLoadingButtonState] = useState(false);
  const [userNameState, setUserNameState] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await acessUser();

        if (response === false) {
          tokenTimeOut(navigate);
        } else {
          const { userName, email } = response;
          setUserNameState(userName);
          setloadingState(false);
        }
      } catch (error) {
        console.log(error.message);
        //Página de Erro
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
          <Letterheader phrase="Contact Us" />
          <MainStyled>
            <SectionContainer></SectionContainer>
          </MainStyled>
          <LetterFooter />
        </>
      )}
    </>
  );
};

export default ContactPage;
