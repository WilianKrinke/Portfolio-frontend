/* eslint-disable no-unused-vars */
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../button/index';
import { UserContainer, PassContainer, ButtonContainer } from './styled';
import './form.css';

const Form = () => {
  return (
    <>
      <form action="" method="post">
        <UserContainer>
          <label htmlFor="user_name">
            <i className="fas fa-user"></i>
          </label>
          <Box autoComplete="off">
            <TextField id="user_name" label="User Name" variant="standard" type="text" name="user_name" />
          </Box>
        </UserContainer>

        <PassContainer>
          <label htmlFor="pass">
            <i className="fas fa-lock"></i>
          </label>
          <Box autoComplete="off">
            <TextField id="pass" label="Password" variant="standard" type="password" name="pass" />
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
