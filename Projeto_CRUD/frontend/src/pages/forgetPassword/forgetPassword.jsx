import React from 'react';
import Letterfooter from '../../components/letterFooter/letterFooter';
import { Link } from 'react-router-dom';
import { BUttonRecoverPass } from '../../components/Buttons';
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
          <ContainerInfo>
            <div className="container_disclaimer">
              <p>Enter username to send password recovery email</p>
            </div>
            <form className="form">
              <label>User Name</label>
              <input type="text" name="userName" id="userName" />
            </form>
            <div className="container_buttons">
              <Link to="/">Back to Login</Link>
              <BUttonRecoverPass>Send</BUttonRecoverPass>
            </div>
          </ContainerInfo>
        </Container>
      </ForgetPassMain>
      <ForgetPassFooter>
        <Letterfooter />
      </ForgetPassFooter>
    </>
  );
};

export default ForgetPassword;
