/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../button/index';
import { UserContainer, PassContainer, ButtonContainer } from './styled';
import { sendSignIn } from '../../utils/signinSendDatas/sendDatas';
import './signInForm.css';

const Form = () => {
  const [userName, setuserName] = useState(null);
  const [pass, setPass] = useState(null);

  function handleForm(e) {
    e.preventDefault();

    const signinDatas = {
      userName,
      pass,
    };

    sendSignIn(signinDatas);
  }

  return (
    <>
      <form className="signinForm" autoComplete="false" onSubmit={(e) => handleForm(e)}>
        <UserContainer>
          <label htmlFor="user_name_login">
            <i className="fas fa-user"></i>
          </label>
          <Box autoComplete="off">
            <TextField
              required
              id="user_name_login"
              label="User Name"
              variant="standard"
              type="text"
              name="user_name_login"
              onChange={(e) => setuserName(e.target.value)}
            />
          </Box>
        </UserContainer>

        <PassContainer>
          <label htmlFor="pass_login">
            <i className="fas fa-lock"></i>
          </label>
          <Box autoComplete="off">
            <TextField
              required
              id="pass_login"
              label="Password"
              variant="standard"
              type="password"
              name="pass_login"
              onChange={(e) => setPass(e.target.value)}
            />
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
