import React from 'react';
import Letterfooter from '../../components/letterFooter/letterFooter';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { ButtonRecoverPass } from '../../components/Buttons';
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
              <p>Insert username to send password recovery email.</p>
            </div>
            <form className="form">
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 0, width: '51ch', position: 'relative', bottom: '8px' },
                }}
                noValidate
              >
                <TextField id="standard-basic" label="User Name" variant="standard" />
              </Box>
            </form>
            <div className="container_buttons">
              <Link to="/">Back to Login</Link>
              <ButtonRecoverPass>Send</ButtonRecoverPass>
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
