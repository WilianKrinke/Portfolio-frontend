/* eslint-disable no-unused-vars */
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

  return (
    <>
      <Letterheader phrase="Error" />
      <MainStyled>
        <StyledSection>
          <h3>Error: {error}</h3>
          <a href="javascript:history.back()">Go Back</a>
        </StyledSection>
        <LottieAlert />
      </MainStyled>
      <LetterFooter />
    </>
  );
};

export default Errorpage;
