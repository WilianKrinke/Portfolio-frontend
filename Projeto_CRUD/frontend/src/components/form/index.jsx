import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { UserContainer, PassContainer } from './styled';

const Form = () => {
  return (
    <>
      <form action="" method="post">
        <UserContainer>
          <label htmlFor="name">
            <i className="fas fa-user"></i>
          </label>
          <Box autoComplete="off">
            <TextField id="standard-basic" label="UserName" variant="standard" type="text" />
          </Box>
        </UserContainer>

        <PassContainer>
          <label htmlFor="name">
            <i className="fas fa-lock"></i>
          </label>
          <Box autoComplete="off">
            <TextField id="standard-basic" label="Password" variant="standard" type="password" />
          </Box>
        </PassContainer>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
