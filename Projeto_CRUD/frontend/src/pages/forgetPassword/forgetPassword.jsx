import React from 'react';
import Letterfooter from '../../components/letterFooter/letterFooter';
import { HeaderStyled } from '../../primeComponents';
import { Container, ContainerInfo, ForgetPassFooter, ForgetPassMain } from './styled';

const ForgetPassword = () => {
  return (
    <>
      <HeaderStyled>
        <h1>Password Recovery</h1>
      </HeaderStyled>
      <ForgetPassMain>
        <Container>
          <ContainerInfo></ContainerInfo>
        </Container>
      </ForgetPassMain>
      <ForgetPassFooter>
        <Letterfooter />
      </ForgetPassFooter>
    </>
  );
};

export default ForgetPassword;
