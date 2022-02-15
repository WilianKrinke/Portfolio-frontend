import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ButtonBackToLogin, ButtonChangeForm } from '../../components/Buttons';
import Externalfooter from '../../components/footer/externalFooter';
import ForgetPass from '../../components/forgetPass/forgetPass.jsx';
import HeaderComponent from '../../components/header/HeaderComponent';
import SignInForm from '../../components/signInForm/signInForm';
import SignUpForm from '../../components/signUpForm';
import './home.css';
import { ArticleCrud, ArticleLogin, ArticleSignUp, HomeMain, InfoCard, P, SectForm } from './styled';

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
                        <P $darkmode={darkMode}>
                            Initially the library project was developed as a simple Create, Read , Update, Delete, for
                            my portfolio, but as the development phases progressed, I realized that could make a system
                            of borrowing and returning books, of course, as a job of web development practices.
                        </P>
                        <P $darkmode={darkMode}>
                            The Library Project is inspired by a C.R.U.D. gives college, specifically in the subject of
                            Fundamentals of Web Development, where they were applied only hmtl, css and php, so I can
                            say that it is a &quot;remake&quot; of the work of faculty, which will also be in my
                            portfolio. Finally, I hope you like the project, I encourage you to evaluate the code that I
                            will make available here and if you want you can like and share, follow me on github and
                            recommend skills on linkedin.
                        </P>
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
