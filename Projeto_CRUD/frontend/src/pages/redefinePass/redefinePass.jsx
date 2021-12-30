/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import Loading from '../../components/loading/Loading';
import Letterfooter from '../../components/letterFooter/letterFooter';
import TextField from '@mui/material/TextField';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../context/authContext';
import { DivLoading, FooterStyled, HeaderStyled } from '../../primeComponents';
import {
  BoxStyled,
  ContainerInfo,
  DivButtons,
  DivConfirmPass,
  DivNewPass,
  RedefinePassMain,
  SectionResetPass,
} from './styled';
import { ButtonConfirmResetPass } from '../../components/Buttons';
import verifyToken from '../../utils/verifyTokenToResetPass/verifyToken';
import changePass from '../../utils/changePass/changePass';

const RedefinePass = () => {
  const params = useParams();
  const { token, idUser } = params;

  const [newPass, setnewPass] = useState('');
  const [confirmPass, setconfirmPass] = useState('');

  const {
    states: { loading, setLoading },
  } = useContext(Context);

  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await verifyToken(token, idUser);
        const { data } = response;

        if (data.wasValid) {
          setLoading(false);
        } else {
          navigate('/');
        }
      } catch (error) {
        console.log(error);
        navigate('/');
      }
    })();
  }, []);

  function handleEyePass() {
    const eyeSlashPass = document.getElementById('eyeSlash');
    const eyeOpen = document.getElementById('eyeOpen');
    const textFieldPass = document.getElementById('standard-basic');

    if (eyeOpen.classList.contains('none')) {
      eyeOpen.classList.remove('none');
      eyeSlashPass.classList.add('none');
      textFieldPass.removeAttribute('type');
      textFieldPass.setAttribute('type', 'text');
    } else {
      eyeSlashPass.classList.remove('none');
      eyeOpen.classList.add('none');
      textFieldPass.removeAttribute('type');
      textFieldPass.setAttribute('type', 'password');
    }
  }

  function handleEyePassConfirmed() {
    const eyeSlashPassConfirmed = document.getElementById('eyeSlashConfirmed');
    const eyeOpenConfirmed = document.getElementById('eyeOpenConfirmed');
    const textPassConfirmed = document.getElementById('standard-basic2');

    if (eyeOpenConfirmed.classList.contains('none')) {
      eyeOpenConfirmed.classList.remove('none');
      eyeSlashPassConfirmed.classList.add('none');
      textPassConfirmed.removeAttribute('type');
      textPassConfirmed.setAttribute('type', 'text');
    } else {
      eyeSlashPassConfirmed.classList.remove('none');
      eyeOpenConfirmed.classList.add('none');
      textPassConfirmed.removeAttribute('type');
      textPassConfirmed.setAttribute('type', 'password');
    }
  }

  async function handleNewPass(e) {
    e.preventDefault();

    try {
      const response = await changePass(newPass, confirmPass, token, idUser);

      if (response.wasUpdate === true) {
        toast.success('Password Changed');
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        toast.warn('Password Not Changed, contact the administrator');
      }
    } catch (error) {
      toast.warn('Password Not Changed, contact the administrator');
      console.log(error);
    }
  }

  return (
    <>
      {loading ? (
        <DivLoading>
          <Loading />
        </DivLoading>
      ) : (
        <>
          <HeaderStyled>
            <h1>Reset Your Password</h1>
          </HeaderStyled>
          <RedefinePassMain>
            <SectionResetPass>
              <ContainerInfo>
                <form onSubmit={(e) => handleNewPass(e)}>
                  <DivNewPass>
                    <label onClick={() => handleEyePass()}>
                      <i className="fas fa-eye-slash" id="eyeSlash" title="Password"></i>
                      <i className="fas fa-eye none" id="eyeOpen" title="Password"></i>
                    </label>
                    <BoxStyled>
                      <TextField
                        aria-invalid="false"
                        id="standard-basic"
                        label="New Password"
                        variant="standard"
                        type="password"
                        onChange={(e) => setnewPass(e.target.value)}
                        required
                      />
                    </BoxStyled>
                  </DivNewPass>

                  <DivConfirmPass>
                    <label onClick={() => handleEyePassConfirmed()}>
                      <i className="fas fa-eye-slash" id="eyeSlashConfirmed" title="Confirmed Password"></i>
                      <i className="fas fa-eye none" id="eyeOpenConfirmed" title="Confirmed Password"></i>
                    </label>
                    <BoxStyled>
                      <TextField
                        aria-invalid="false"
                        id="standard-basic2"
                        label="Confirm Password"
                        variant="standard"
                        type="password"
                        onChange={(e) => setconfirmPass(e.target.value)}
                        required
                      />
                    </BoxStyled>
                  </DivConfirmPass>

                  <DivButtons>
                    <Link to="/">Cancel</Link>
                    <ButtonConfirmResetPass>Confirm</ButtonConfirmResetPass>
                  </DivButtons>
                </form>
              </ContainerInfo>
            </SectionResetPass>

            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              draggable
              pauseOnHover={false}
              width={500}
            />
          </RedefinePassMain>
          <FooterStyled>
            <Letterfooter />
          </FooterStyled>
        </>
      )}
    </>
  );
};

export default RedefinePass;
