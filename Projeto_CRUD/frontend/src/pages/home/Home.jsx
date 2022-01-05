import React, { useState } from 'react';
import Letterfooter from '../../components/letterFooter/letterFooter';
import SignInForm from '../../components/signInForm';
import SignUpForm from '../../components/signUpForm';
import ForgetPass from '../../components/forgetPass/forgetPass.jsx';
import { FooterStyled, HeaderStyled } from '../../primeComponents';
import { ButtonChangeForm, ButtonBackToLogin } from '../../components/Buttons';
import { HomeMain, InfoCard, SectForm, ArticleCrud, ArticleLogin, ArticleSignUp } from './styled';

const Home = () => {
  const [selection, setSelection] = useState(true);
  const [isLoginVisible, setisLoginVisible] = useState(true);

  function handleChangeBlock() {
    setisLoginVisible(!isLoginVisible);
  }

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
          {isLoginVisible ? (
            <ArticleLogin>
              <SignInForm />
              <ButtonChangeForm onClick={handleChangeBlock}>Sign Up</ButtonChangeForm>
              <ForgetPass />
            </ArticleLogin>
          ) : (
            <ArticleSignUp>
              <SignUpForm />
              <ButtonBackToLogin onClick={handleChangeBlock}>Back</ButtonBackToLogin>
            </ArticleSignUp>
          )}
        </SectForm>
      </HomeMain>

      <FooterStyled>
        <Letterfooter />
      </FooterStyled>
    </>
  );
};

export default Home;
