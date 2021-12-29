/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import Loading from '../../components/loading/Loading';
import resetPass from '../../utils/resetPass/resetPass';
import Letterfooter from '../../components/letterFooter/letterFooter';
import TextField from '@mui/material/TextField';
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

const RedefinePass = () => {
  const params = useParams();
  const { token, idUser } = params;

  const {
    states: { loading, setLoading },
  } = useContext(Context);

  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await resetPass(token, idUser);
      const { data } = response;

      console.log(data);

      if (data.wasValid) {
        setLoading(false);
      } else {
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
                <form>
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
