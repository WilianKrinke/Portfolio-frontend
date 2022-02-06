import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import LetterFooter from '../../components/letterFooter/letterFooter';
import Letterheader from '../../components/letterHeader/letterHeader';
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
            <Letterheader phrase="Error" $darkmode={darkMode} />
            <ErrorMainStyled $darkmode={darkMode}>
                <StyledSection>
                    <H3 $darkmode={darkMode}>Error: {error}</H3>
                    <ButtonBackPage onClick={handleBack} $darkmode={darkMode}>
                        Back Home
                    </ButtonBackPage>
                </StyledSection>
                <LottieAlert />
            </ErrorMainStyled>
            <LetterFooter $darkmode={darkMode} />
        </>
    );
};

export default Errorpage;
