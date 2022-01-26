import React, { memo, useState } from 'react';
import { ContainerInput, FormStyled, MainContainer } from '../styled/styled';
import { TextField } from '@mui/material';
import { ButtonUpDate } from '../../Buttons';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import upDateData from '../../../utils/upDateData/upDateData';
import tokenTimeOut from '../../../utils/tokenTimeOut/tokenTimeOut';

const Contactpanel = () => {
  const navigate = useNavigate();

  const [userEmailState, setEmailState] = useState('');
  const [telefone_celularState, setTelefone_celularState] = useState('');
  const [telefone_fixoState, setTelefone_fixoState] = useState('');

  async function handleEmail(e) {
    try {
      e.preventDefault();
      const objectData = {
        data: userEmailState,
        option: 9,
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

  async function handleCellPhone(e) {
    try {
      e.preventDefault();
      const objectData = {
        data: telefone_celularState,
        option: 10,
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

  async function handleLandLine(e) {
    try {
      e.preventDefault();
      const objectData = {
        data: telefone_fixoState,
        option: 11,
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
          <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleEmail(e)}>
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              title="Update Your E-mail"
              required
              onChange={(e) => setEmailState(e.target.value)}
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </FormStyled>

          <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleCellPhone(e)}>
            <TextField
              id="outlined-basic"
              label="Cell Phone"
              variant="outlined"
              title="Update Your Cell Phone"
              required
              onChange={(e) => setTelefone_celularState(e.target.value)}
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </FormStyled>

          <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleLandLine(e)}>
            <TextField
              id="outlined-basic"
              label="Landline"
              variant="outlined"
              title="Update Your Landline"
              required
              onChange={(e) => setTelefone_fixoState(e.target.value)}
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </FormStyled>
        </ContainerInput>
      </MainContainer>
    </>
  );
};

export default memo(Contactpanel);
