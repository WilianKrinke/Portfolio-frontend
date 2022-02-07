import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ButtonBackToLogin, ButtonChangeForm } from '../../components/Buttons';
import Externalfooter from '../../components/footer/externalFooter';
import ForgetPass from '../../components/forgetPass/forgetPass.jsx';
import HeaderComponent from '../../components/header/HeaderComponent';
import SignInForm from '../../components/signInForm/signInForm';
import SignUpForm from '../../components/signUpForm';
import './home.css';
import { ArticleCrud, ArticleLogin, ArticleSignUp, HomeMain, InfoCard, SectForm } from './styled';

const Home = () => {
    const [isLoginVisible, setisLoginVisible] = useState(true);
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    function handleChangeBlock() {
        setisLoginVisible(!isLoginVisible);
    }

    return (
        <>
            <HeaderComponent phrase="Project Library" />
            <HomeMain $darkmode={darkMode}>
                <InfoCard $darkmode={darkMode}>
                    <ArticleCrud $darkmode={darkMode}>
                        <p>Create.</p>
                        <p>Read.</p>
                        <p>UpDate.</p>
                        <p>Delete.</p>
                    </ArticleCrud>
                </InfoCard>

                <SectForm $darkmode={darkMode}>
                    {isLoginVisible ? (
                        <ArticleLogin $darkmode={darkMode}>
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
            <Externalfooter />
        </>
    );
};

export default memo(Home);
