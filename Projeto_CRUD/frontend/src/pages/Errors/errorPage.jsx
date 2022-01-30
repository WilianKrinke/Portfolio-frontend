import React from 'react';
import LetterFooter from '../../components/letterFooter/letterFooter';
import Letterheader from '../../components/letterHeader/letterHeader';
import { MainStyled } from '../../primeComponents';
import { useParams } from 'react-router-dom';
import LottieAlert from '../../components/lottieAnimations/lottieError';
import { StyledSection } from './styled';

const Errorpage = () => {
  const { error } = useParams();
  console.log(error);

  function handleBack() {
    window.history.back();
  }

  return (
    <>
      <Letterheader phrase="Error" />
      <MainStyled>
        <StyledSection>
          <h3>Error: {error}</h3>
          <p onClick={handleBack}>Go Back</p>
        </StyledSection>
        <LottieAlert />
      </MainStyled>
      <LetterFooter />
    </>
  );
};

export default Errorpage;
