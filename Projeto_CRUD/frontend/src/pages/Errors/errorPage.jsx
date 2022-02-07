import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Externalfooter from '../../components/footer/externalFooter';
import HeaderComponent from '../../components/header/HeaderComponent';
import LottieAlert from '../../components/lottieAnimations/lottieError';
import { ButtonBackPage, ErrorMainStyled, H3, StyledSection } from './styled';

const Errorpage = () => {
    const navigate = useNavigate();
    const { error } = useParams();
    console.log(error);

    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    function handleBack() {
        navigate('/');
    }

    return (
        <>
            <HeaderComponent phrase="Error" />
            <ErrorMainStyled $darkmode={darkMode}>
                <StyledSection>
                    <H3 $darkmode={darkMode}>Error: {error} - Contact The Administrator</H3>
                    <ButtonBackPage onClick={handleBack} $darkmode={darkMode}>
                        Back Home
                    </ButtonBackPage>
                </StyledSection>
                <LottieAlert />
            </ErrorMainStyled>
            <Externalfooter />
        </>
    );
};

export default Errorpage;
