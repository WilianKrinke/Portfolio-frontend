import React, { useState, memo } from 'react';
import Letterfooter from '../../components/letterFooter/letterFooter';
import SignInForm from '../../components/signInForm';
import SignUpForm from '../../components/signUpForm';
import ForgetPass from '../../components/forgetPass/forgetPass.jsx';
import { FooterStyled, HeaderStyled } from '../../primeComponents';
import { ButtonChangeForm, ButtonBackToLogin } from '../../components/Buttons';
import { HomeMain, InfoCard, SectForm, ArticleCrud, ArticleLogin, ArticleSignUp } from './styled';
import Letterheader from '../../components/letterHeader/letterHeader';

const Home = () => {
  const [isLoginVisible, setisLoginVisible] = useState(true);

  function handleChangeBlock() {
    setisLoginVisible(!isLoginVisible);
  }

  return (
    <>
      <Letterheader phrase="Project Library" />

      <HomeMain>
        <InfoCard>
          <ArticleCrud>
            <p>Create.</p>
            <p>Read.</p>
            <p>UpDate.</p>
            <p>Delete.</p>
          </ArticleCrud>
        </InfoCard>

        <SectForm>
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

      <Letterfooter />
    </>
  );
};

export default memo(Home);
