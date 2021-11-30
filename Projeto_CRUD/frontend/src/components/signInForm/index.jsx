/* eslint-disable no-unused-vars */
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../button/index';
import { UserContainer, PassContainer, ButtonContainer } from './styled';
import './signInForm.css';

const Form = () => {
  return (
    <>
      <form action="" method="post" className="signinForm">
        <UserContainer>
          <label htmlFor="user_name_login">
            <i className="fas fa-user"></i>
          </label>
          <Box autoComplete="off">
            <TextField id="user_name_login" label="User Name" variant="standard" type="text" name="user_name_login" />
          </Box>
        </UserContainer>

        <PassContainer>
          <label htmlFor="pass_login">
            <i className="fas fa-lock"></i>
          </label>
          <Box autoComplete="off">
            <TextField id="pass_login" label="Password" variant="standard" type="password" name="pass_login" />
          </Box>
        </PassContainer>

        <ButtonContainer>
          <Button type="submit" label="SignIn" />
        </ButtonContainer>
      </form>
    </>
  );
};

export default Form;
