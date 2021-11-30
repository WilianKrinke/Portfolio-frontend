import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../button/index';
import { ButtonContainer, ContainerInfoSignUp } from './styled';
import './signUpForm.css';

const Form = () => {
  return (
    <>
      <form action="" method="post" className="signupForm" autoComplete="false">
        <ContainerInfoSignUp>
          <label htmlFor="user_name_signup">
            <i className="fas fa-user"></i>
          </label>
          <Box autoComplete="off">
            <TextField id="user_name_signup" label="User Name" variant="standard" type="text" name="user_name_signup" />
          </Box>
        </ContainerInfoSignUp>

        <ContainerInfoSignUp>
          <label htmlFor="email_signup">
            <i className="fas fa-envelope"></i>
          </label>
          <Box autoComplete="off">
            <TextField id="email_signup" label="E-mail" variant="standard" type="text" name="email_signup" />
          </Box>
        </ContainerInfoSignUp>

        <ContainerInfoSignUp>
          <label htmlFor="pass_signup">
            <i className="fas fa-eye-slash"></i>
          </label>
          <Box autoComplete="off">
            <TextField id="pass_signup" label="Password" variant="standard" type="password" name="pass_signup" />
          </Box>
        </ContainerInfoSignUp>

        <ContainerInfoSignUp>
          <label htmlFor="confirmed_pass">
            <i className="fas fa-eye-slash"></i>
          </label>
          <Box autoComplete="off">
            <TextField
              id="confirmed_pass"
              label="Confirm the Password"
              variant="standard"
              type="password"
              name="confirmed_pass"
            />
          </Box>
        </ContainerInfoSignUp>
        <ButtonContainer>
          <Button type="submit" label="Register" />
        </ButtonContainer>
      </form>
    </>
  );
};

export default Form;
