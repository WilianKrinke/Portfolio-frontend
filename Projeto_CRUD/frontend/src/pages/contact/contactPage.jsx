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
import { ArticleContainer, DivPhysicalAddress, FormStyled } from './styled';

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
            <SectionContainer>
              <ArticleContainer>
                <DivPhysicalAddress>
                  <div className="div_title">
                    <h2>Contact</h2>
                  </div>
                  <div className="div_adress">
                    <address>Lorem Ipsum Street, Lorem Ipsum District, Lorem Ipsum City</address>
                    <p>+99 99 99999-9993</p>
                    <p>Lorem-E-mail@email.com</p>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58879.017085215884!2d-46.933618992296786!3d-22.730524619711403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8dea2fead7493%3A0xaae359ef9cc88d5f!2sPedreira%2C%20SP%2C%2013920-000!5e0!3m2!1spt-BR!2sbr!4v1643423901136!5m2!1spt-BR!2sbr"
                      width="600"
                      height="200"
                      style={{ border: '1px solid rgba(0, 0, 0, 0.2)', borderRadius: '2px' }}
                      loading="lazy"
                    ></iframe>
                  </div>
                </DivPhysicalAddress>
                <FormStyled>
                  <div className="div_from"></div>
                  <div className="div_"></div>
                </FormStyled>
              </ArticleContainer>
            </SectionContainer>
          </MainStyled>
          <LetterFooter />
        </>
      )}
    </>
  );
};

export default ContactPage;
