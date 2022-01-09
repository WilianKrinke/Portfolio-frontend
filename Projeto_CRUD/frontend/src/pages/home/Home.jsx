import React, { useState, memo } from 'react';
import Letterfooter from '../../components/letterFooter/letterFooter';
import SignInForm from '../../components/signInForm';
import SignUpForm from '../../components/signUpForm';
import ForgetPass from '../../components/forgetPass/forgetPass.jsx';
import { FooterStyled, HeaderStyled } from '../../primeComponents';
import { ButtonChangeForm, ButtonBackToLogin } from '../../components/Buttons';
import { HomeMain, InfoCard, SectForm, ArticleCrud, ArticleLogin, ArticleSignUp } from './styled';
import { useParams } from 'react-router-dom';

const Home = () => {
  const [isLoginVisible, setisLoginVisible] = useState(true);

  const params = useParams();

  params.message === undefined ? console.log('Parametro vazio') : console.log('Parametro não vazio');

  function handleChangeBlock() {
    setisLoginVisible(!isLoginVisible);
  }

  return (
    <>
      <HeaderStyled>
        <h1>Project Library</h1>
      </HeaderStyled>

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

      <FooterStyled>
        <Letterfooter />
      </FooterStyled>
    </>
  );
};

export default memo(Home);
