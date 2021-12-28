import React, { useState } from 'react';
import Letterfooter from '../../components/letterFooter/letterFooter';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { ButtonRecoverPass } from '../../components/Buttons';
import { HeaderStyled } from '../../primeComponents';
import { Container, ContainerInfo, ForgetPassFooter, ForgetPassMain } from './styled';
import reqRecoverPass from '../../utils/recoverPass/reqRecoverPass';

const ForgetPassword = () => {
  const [userName, setuserName] = useState('');

  async function handleForm(e) {
    e.preventDefault();

    const response = await reqRecoverPass(userName);

    console.log(response);
    //fazer toasty
  }

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
            <form className="form" onSubmit={(e) => handleForm(e)}>
              <Box
                sx={{
                  '& > :not(style)': { m: 0, width: '30vw', position: 'relative', bottom: '8px' },
                }}
                noValidate
              >
                <TextField
                  id="standard-basic"
                  label="User Name"
                  variant="standard"
                  onChange={(e) => setuserName(e.target.value)}
                />
              </Box>
              <div className="container_buttons">
                <ButtonRecoverPass>Send</ButtonRecoverPass>
                <Link to="/">Back to Login</Link>
              </div>
            </form>
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
