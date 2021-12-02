/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import SignInForm from '../../components/signInForm';
import SignUpForm from '../../components/signUpForm';
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
  ButtonBackToLogin,
} from './styled';

const Home = () => {
  const [selection, setSelection] = useState(true);
  const [isLoginVisible, setisLoginVisible] = useState(true);

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
            <SignInForm />
            <ButtonChangeForm onClick={() => setisLoginVisible(!isLoginVisible)}>Signup</ButtonChangeForm>
          </ArticleLogin>

          <ArticleSignUp isVisible={isLoginVisible}>
            <SignUpForm />
            <ButtonBackToLogin onClick={() => setisLoginVisible(!isLoginVisible)}>Back</ButtonBackToLogin>
          </ArticleSignUp>
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
