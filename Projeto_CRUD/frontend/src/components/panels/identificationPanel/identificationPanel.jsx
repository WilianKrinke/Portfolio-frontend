/* eslint-disable no-unused-vars */
import React, { memo, useState } from 'react';
import { ContainerInput, FormStyled, MainContainer } from '../styled/styled';
import { ButtonUpDate } from '../../Buttons';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import tokenTimeOut from '../../../utils/tokenTimeOut/tokenTimeOut';
import upDateString from '../../../utils/upDateData/upDateString';
import upDateNumber from '../../../utils/upDateData/upDateNumber';

const Identificationpanel = () => {
  const [userNameState, setuserNameState] = useState('');
  const [primeiro_NomeState, setPrimeiro_NomeState] = useState('');
  const [segundo_NomeState, setSegundo_NomeState] = useState('');
  const [idadeState, setIdadeState] = useState('');

  const navigate = useNavigate();

  async function handleUserName(e) {
    try {
      e.preventDefault();
      const objectData = {
        data: userNameState,
        option: 1,
      };

      const response = await upDateString(objectData);

      if (response === false) {
        tokenTimeOut(navigate);
      } else {
        toast.success('UpDated Data');
      }
    } catch (error) {
      if (error.message === 'Contains Inappropriate Characters') {
        toast.error('Contains Inappropriate Characters');
      }

      console.log(error);
      //pagina de erros
    }
  }

  async function handleFirstName(e) {
    try {
      e.preventDefault();
      const objectData = {
        data: primeiro_NomeState,
        option: 2,
      };

      const response = await upDateString(objectData);

      if (response === false) {
        tokenTimeOut(navigate);
      } else {
        toast.success('UpDated Data');
      }
    } catch (error) {
      if (error.message === 'Contains Inappropriate Characters') {
        toast.error('Contains Inappropriate Characters');
      }

      console.log(error);
      //pagina de erros
    }
  }

  async function handleSecondName(e) {
    try {
      e.preventDefault();
      const objectData = {
        data: segundo_NomeState,
        option: 3,
      };

      const response = await upDateString(objectData);

      if (response === false) {
        tokenTimeOut(navigate);
      } else {
        toast.success('UpDated Data');
      }
    } catch (error) {
      if (error.message === 'Contains Inappropriate Characters') {
        toast.error('Contains Inappropriate Characters');
      }

      console.log(error);
      //pagina de erros
    }
  }

  async function handleBirth(e) {
    try {
      e.preventDefault();
      const objectData = {
        data: idadeState,
        option: 4,
      };

      if (idadeState > 122) {
        throw new Error('Maximum human age passed, try gain');
      }

      const response = await upDateNumber(objectData);

      if (response === false) {
        tokenTimeOut(navigate);
      } else {
        toast.success('UpDated Data');
      }
    } catch (error) {
      if (error.message === 'Contains Inappropriate Characters') {
        toast.error('Contains Inappropriate Characters');
      } else {
        toast.error(error.message);
      }

      console.log(error);
      //pagina de erros
    }
  }

  return (
    <>
      <MainContainer>
        <ContainerInput>
          <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleUserName(e)}>
            <TextField
              id="outlined-basic"
              label="User Name"
              variant="outlined"
              title="Update Your User Name"
              onChange={(e) => setuserNameState(e.target.value)}
              value={userNameState}
              required
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </FormStyled>

          <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleFirstName(e)}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              title="Update Your Name"
              onChange={(e) => setPrimeiro_NomeState(e.target.value)}
              required
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </FormStyled>

          <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleSecondName(e)}>
            <TextField
              id="outlined-basic"
              label="Second Name"
              variant="outlined"
              title="Update Your Second Name"
              onChange={(e) => setSegundo_NomeState(e.target.value)}
              required
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </FormStyled>

          <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleBirth(e)}>
            <TextField
              id="outlined-basic"
              label="Age"
              variant="outlined"
              title="Update Your Year Of Birth"
              onChange={(e) => setIdadeState(e.target.value)}
              required
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </FormStyled>
        </ContainerInput>
      </MainContainer>
    </>
  );
};

export default memo(Identificationpanel);
