import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { UserContainer, PassContainer, ButtonContainer } from './styled';
import { sendSignIn } from '../../utils/signinSendDatas/sendSignIn';
import { toast } from 'react-toastify';
import { ButtonSignin } from '../Buttons';
import { memo } from 'react';
import './signInForm.css';

const signIn = () => {
  const [userName, setuserName] = useState(null);
  const [pass, setPass] = useState(null);

  const navigate = useNavigate();

  async function handleForm(e) {
    e.preventDefault();
    try {
      const signinDatas = {
        userName,
        pass,
      };

      const { authenticate } = await sendSignIn(signinDatas);

      if (authenticate === true) {
        navigate('./book-list');
      } else {
        toast.error('Incorrect username or password');
      }
    } catch (error) {
      toast.error('Something wrong, contact the administrator');
    }
  }

  return (
    <>
      <form className="signinForm" autoComplete="false" onSubmit={(e) => handleForm(e)}>
        <UserContainer>
          <label htmlFor="user_name_login">
            <i className="fas fa-user" title="User Name"></i>
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
            <i className="fas fa-lock" title="Password"></i>
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
          <ButtonSignin>Sign In</ButtonSignin>
        </ButtonContainer>
      </form>
    </>
  );
};

export default memo(signIn);
