/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from '../button/index';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ButtonContainer, ContainerInfoSignUp } from './styled';
import { sendDatas } from '../../utils/sendDatas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './signUpForm.css';

const Form = () => {
  const [userName, setuserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [passConfirmed, setPassConfirmed] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const objectDatas = {
      userName,
      email,
      pass,
      passConfirmed,
    };

    const wasRegister = await sendDatas(objectDatas);

    if (wasRegister) {
      toast.success('Registered User!');
    } else {
      toast.error('Not Registered!');
    }
  }

  return (
    <>
      <form className="signupForm" autoComplete="false" onSubmit={(e) => handleSubmit(e)}>
        <ContainerInfoSignUp>
          <label htmlFor="user_name_signup">
            <i className="fas fa-user"></i>
          </label>
          <Box autoComplete="off">
            <TextField
              id="user_name_signup"
              label="User Name"
              variant="standard"
              type="text"
              name="user_name_signup"
              onChange={(e) => setuserName(e.target.value)}
              required
            />
          </Box>
        </ContainerInfoSignUp>

        <ContainerInfoSignUp>
          <label htmlFor="email_signup">
            <i className="fas fa-envelope"></i>
          </label>
          <Box autoComplete="off">
            <TextField
              id="email_signup"
              label="E-mail"
              variant="standard"
              type="email"
              name="email_signup"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Box>
        </ContainerInfoSignUp>

        <ContainerInfoSignUp>
          <label htmlFor="pass_signup">
            <i className="fas fa-eye-slash"></i>
          </label>
          <Box autoComplete="off">
            <TextField
              id="pass_signup"
              label="Password"
              variant="standard"
              type="password"
              name="pass_signup"
              onChange={(e) => setPass(e.target.value)}
              required
            />
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
              onChange={(e) => setPassConfirmed(e.target.value)}
              required
            />
          </Box>
        </ContainerInfoSignUp>
        <ButtonContainer>
          <Button label="Register" />
        </ButtonContainer>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        width={500}
      />
    </>
  );
};

export default Form;
