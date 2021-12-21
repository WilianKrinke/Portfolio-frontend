import React, { useState } from 'react';
import Letterfooter from '../../components/letterFooter/letterFooter';
import SignInForm from '../../components/signInForm';
import SignUpForm from '../../components/signUpForm';
import { HeaderStyled } from '../../primeComponents';
import { ButtonChangeForm, ButtonBackToLogin } from '../../components/Buttons';
import { HomeMain, InfoCard, SectForm, ArticleCrud, ArticleLogin, ArticleSignUp, HomeFooter } from './styled';
import ForgetPass from '../../components/forgetPass/forgetPass';

const Home = () => {
  const [selection, setSelection] = useState(true);
  const [isLoginVisible, setisLoginVisible] = useState(true);

  return (
    <>
      <HeaderStyled>
        <h1>Project Library</h1>
      </HeaderStyled>

      <HomeMain>
        <InfoCard onMouseEnter={() => setSelection(false)} onMouseLeave={() => setSelection(true)}>
          <ArticleCrud>
            <p>Create.</p>
            <p>Read.</p>
            <p>UpDate.</p>
            <p>Delete.</p>
          </ArticleCrud>
        </InfoCard>

        <SectForm onhover={selection}>
          <ArticleLogin isVisible={isLoginVisible}>
            <SignInForm />
            <ButtonChangeForm onClick={() => setisLoginVisible(!isLoginVisible)}>Sign Up</ButtonChangeForm>
            <ForgetPass />
          </ArticleLogin>

          <ArticleSignUp isVisible={isLoginVisible}>
            <SignUpForm />
            <ButtonBackToLogin onClick={() => setisLoginVisible(!isLoginVisible)}>Back</ButtonBackToLogin>
          </ArticleSignUp>
        </SectForm>
      </HomeMain>

      <HomeFooter>
        <Letterfooter />
      </HomeFooter>
    </>
  );
};

export default Home;
