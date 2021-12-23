import React from 'react';
import { HeaderStyled } from '../../primeComponents';
import { Container, ForgetPassFooter, ForgetPassMain } from './styled';

const ForgetPassword = () => {
  return (
    <>
      <HeaderStyled>
        <h1>Password Recovery</h1>
      </HeaderStyled>
      <ForgetPassMain>
        <Container></Container>
      </ForgetPassMain>
      <ForgetPassFooter></ForgetPassFooter>
    </>
  );
};

export default ForgetPassword;
