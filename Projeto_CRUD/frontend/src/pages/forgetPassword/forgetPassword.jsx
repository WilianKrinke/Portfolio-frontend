import React, { useState } from 'react';
import Letterfooter from '../../components/letterFooter/letterFooter';
import TextField from '@mui/material/TextField';
import reqRecoverPass from '../../utils/recoverPass/reqRecoverPass';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { ButtonRecoverPass } from '../../components/Buttons';
import { BoxStyled, Container, ContainerInfo, ForgetPassMain } from './styled';
import Letterheader from '../../components/letterHeader/letterHeader';

const ForgetPassword = () => {
  const [userName, setuserName] = useState('');

  async function handleForm(e) {
    e.preventDefault();

    try {
      const response = await reqRecoverPass(userName);

      if (response !== null) {
        const { email } = response;
        toast.success(`The password reset link has been sent to ${email}`);
      } else {
        toast.warn('Something wrong, contact the administrator');
      }
    } catch (error) {
      toast.warn('Something wrong, contact the administrator');
    }
  }

  return (
    <>
      <Letterheader phrase="Recovery Password" />
      <ForgetPassMain>
        <Container>
          <ContainerInfo>
            <div className="container_disclaimer">
              <p>Insert username to send password recovery e-mail.</p>
            </div>
            <form className="form" onSubmit={(e) => handleForm(e)}>
              <BoxStyled noValidate>
                <TextField
                  id="standard-basic"
                  label="User Name"
                  variant="standard"
                  onChange={(e) => setuserName(e.target.value)}
                />
              </BoxStyled>
              <div className="container_buttons">
                <ButtonRecoverPass>Send</ButtonRecoverPass>
                <Link to="/">Back to Login</Link>
              </div>
            </form>
          </ContainerInfo>
        </Container>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover={false}
          width={500}
        />
      </ForgetPassMain>
      <Letterfooter />
    </>
  );
};

export default ForgetPassword;
