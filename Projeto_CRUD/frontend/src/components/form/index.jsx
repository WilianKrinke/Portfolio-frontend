import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../button/index';
import { UserContainer, PassContainer, ButtonContainer } from './styled';

const Form = () => {
  return (
    <>
      <form action="" method="post">
        <UserContainer>
          <label htmlFor="name">
            <i className="fas fa-user"></i>
          </label>
          <Box autoComplete="off">
            <TextField id="user_name" label="UserName" variant="standard" type="text" />
          </Box>
        </UserContainer>

        <PassContainer>
          <label htmlFor="name">
            <i className="fas fa-lock"></i>
          </label>
          <Box autoComplete="off">
            <TextField id="pass" label="Password" variant="standard" type="password" />
          </Box>
        </PassContainer>

        <ButtonContainer>
          <Button type="submit" label="Submit" />
        </ButtonContainer>
      </form>
    </>
  );
};

export default Form;
