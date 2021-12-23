import React from 'react';
import { HeaderStyled } from '../../primeComponents';
import { ForgetPassFooter, ForgetPassMain } from './styled';

const ForgetPassword = () => {
  return (
    <>
      <HeaderStyled>
        <h1>Password Recovery</h1>
      </HeaderStyled>
      <ForgetPassMain></ForgetPassMain>
      <ForgetPassFooter></ForgetPassFooter>
    </>
  );
};

export default ForgetPassword;
