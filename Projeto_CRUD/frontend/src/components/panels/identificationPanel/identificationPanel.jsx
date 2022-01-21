import React, { memo } from 'react';
import propTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { ContainerInput, FormStyled, MainContainer } from './styled';
import { ButtonUpDate } from '../../Buttons';

const Identificationpanel = ({ objectUserIdentification }) => {
  const { userName, primeiro_nome, segundo_nome, data_nascimento } = objectUserIdentification;

  return (
    <>
      <MainContainer>
        <FormStyled component="form" noValidate autoComplete="off">
          <ContainerInput>
            <TextField
              id="outlined-basic"
              label={userName === null ? 'Insert User Name' : userName}
              variant="outlined"
              title="Update Your User Name"
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </ContainerInput>
          <ContainerInput>
            <TextField
              id="outlined-basic"
              label={primeiro_nome === null ? 'Insert First Name' : primeiro_nome}
              variant="outlined"
              title="Update Your Name"
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </ContainerInput>
          <ContainerInput>
            <TextField
              id="outlined-basic"
              label={segundo_nome === null ? 'Insert Second Name' : segundo_nome}
              variant="outlined"
              title="Update Your Second Name"
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </ContainerInput>
          <ContainerInput>
            <TextField
              id="outlined-basic"
              label={data_nascimento === null ? 'Insert Year Of Birth' : data_nascimento}
              variant="outlined"
              title="Update Your Year Of Birth"
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </ContainerInput>
        </FormStyled>
      </MainContainer>
    </>
  );
};

Identificationpanel.propTypes = {
  objectUserIdentification: propTypes.object,
};

export default memo(Identificationpanel);
