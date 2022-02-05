import React from 'react';
import { useParams } from 'react-router-dom';
import LetterFooter from '../../components/letterFooter/letterFooter';
import Letterheader from '../../components/letterHeader/letterHeader';
import LottieAlert from '../../components/lottieAnimations/lottieError';
import { ErrorMainStyled, StyledSection } from './styled';

const Errorpage = () => {
    const { error } = useParams();
    console.log(error);

    function handleBack() {
        window.history.back();
    }

    return (
        <>
            <Letterheader phrase="Error" />
            <ErrorMainStyled>
                <StyledSection>
                    <h3>Error: {error}</h3>
                    <p onClick={handleBack}>Go Back</p>
                </StyledSection>
                <LottieAlert />
            </ErrorMainStyled>
            <LetterFooter />
        </>
    );
};

export default Errorpage;
