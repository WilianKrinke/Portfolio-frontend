/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Form from '../../components/signInForm';
import { HeaderStyled } from '../../primeComponents';
import {
  HomeMain,
  InfoCard,
  SectForm,
  ArticleCrud,
  ArticleLogin,
  ArticleSignUp,
  HomeFooter,
  ContainerName,
  ButtonChangeForm,
} from './styled';

const Home = () => {
  const [selection, setSelection] = useState(true);
  const [isLoginVisible, setisLoginVisible] = useState(true);

  console.log(isLoginVisible);

  return (
    <>
      <HeaderStyled>
        <h1>Login</h1>
      </HeaderStyled>

      <HomeMain>
        <InfoCard onhover={selection}>
          <ArticleCrud>
            <p>Create.</p>
            <p>Read.</p>
            <p>UpDate.</p>
            <p>Delete.</p>
          </ArticleCrud>
        </InfoCard>

        <SectForm onMouseEnter={() => setSelection(false)} onMouseLeave={() => setSelection(true)}>
          <ArticleLogin isVisible={isLoginVisible}>
            <Form />
            <ButtonChangeForm onClick={() => setisLoginVisible(!isLoginVisible)}>Signup</ButtonChangeForm>
          </ArticleLogin>

          <ArticleSignUp isVisible={isLoginVisible}></ArticleSignUp>
        </SectForm>
      </HomeMain>

      <HomeFooter>
        <ContainerName>
          <div>
            <h4>Desenvolvido por Wilian Krinke</h4>
          </div>
        </ContainerName>
      </HomeFooter>
    </>
  );
};

export default Home;
