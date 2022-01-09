import React, { useState, memo } from 'react';
import Letterfooter from '../../components/letterFooter/letterFooter';
import SignInForm from '../../components/signInForm';
import SignUpForm from '../../components/signUpForm';
import ForgetPass from '../../components/forgetPass/forgetPass.jsx';
import { FooterStyled, HeaderStyled } from '../../primeComponents';
import { ButtonChangeForm, ButtonBackToLogin } from '../../components/Buttons';
import { HomeMain, InfoCard, SectForm, ArticleCrud, ArticleLogin, ArticleSignUp } from './styled';
import { useParams } from 'react-router-dom';
import { useCallback } from 'react';

const Home = () => {
  const [selection, setSelection] = useState(true);
  const [isLoginVisible, setisLoginVisible] = useState(true);

  const params = useParams();

  console.log(params);

  function handleChangeBlock() {
    setisLoginVisible(!isLoginVisible);
  }

  const handleChangeColor = useCallback(() => {
    setSelection(!selection);
  }, [selection]);

  return (
    <>
      <HeaderStyled>
        <h1>Project Library</h1>
      </HeaderStyled>

      <HomeMain>
        <InfoCard onMouseEnter={handleChangeColor} onMouseLeave={handleChangeColor}>
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

export default memo(Home);
