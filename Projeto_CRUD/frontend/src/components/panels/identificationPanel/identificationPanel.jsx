/* eslint-disable no-unused-vars */
import React, { memo, useState } from 'react';
import propTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { ContainerInput, FormStyled, MainContainer } from '../styled/styled';
import { ButtonUpDate } from '../../Buttons';
import upDateData from '../../../utils/upDateData/upDateData';
import tokenTimeOut from '../../../utils/tokenTimeOut/tokenTimeOut';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Identificationpanel = ({ objectUserIdentification }) => {
  const { userName, primeiro_nome, segundo_nome, data_nascimento } = objectUserIdentification;

  const [userNameState, setuserNameState] = useState('');
  const [primeiro_NomeState, setPrimeiro_NomeState] = useState('');
  const [segundo_NomeState, setSegundo_NomeState] = useState('');
  const [data_NascimentoState, setData_NascimentoState] = useState('');

  const navigate = useNavigate();

  async function handleUserName(e) {
    try {
      e.preventDefault();
      const objectData = {
        data: userNameState,
        option: 1,
      };

      const response = await upDateData(objectData);

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

      const response = await upDateData(objectData);

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

      const response = await upDateData(objectData);

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
        data: data_NascimentoState,
        option: 4,
      };

      const response = await upDateData(objectData);

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

  return (
    <>
      <MainContainer>
        <ContainerInput>
          <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleUserName(e)}>
            <TextField
              id="outlined-basic"
              label={userName === null ? 'Insert User Name' : userName}
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
              label={primeiro_nome === null ? 'Insert First Name' : primeiro_nome}
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
              label={segundo_nome === null ? 'Insert Second Name' : segundo_nome}
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
              label={data_nascimento === null ? 'Insert Year Of Birth' : data_nascimento}
              variant="outlined"
              title="Update Your Year Of Birth"
              onChange={(e) => setData_NascimentoState(e.target.value)}
              required
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </FormStyled>
        </ContainerInput>
      </MainContainer>
    </>
  );
};

Identificationpanel.propTypes = {
  objectUserIdentification: propTypes.object,
};

export default memo(Identificationpanel);
