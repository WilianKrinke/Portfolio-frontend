/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import propTypes from 'prop-types';
import { ContainerInput, FormStyled, MainContainer } from '../styled/styled';
import { TextField } from '@mui/material';
import { ButtonUpDate } from '../../Buttons';

const Contactpanel = ({ objectUserContact }) => {
  console.log(objectUserContact);
  const { email, telefone_celular, telefone_fixo } = objectUserContact;

  return (
    <>
      <MainContainer>
        <ContainerInput>
          <FormStyled component="form" noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label={email === null ? 'Insert E-mail' : email}
              variant="outlined"
              title="Update Your E-mail"
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </FormStyled>

          <FormStyled component="form" noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label={telefone_celular === null ? 'Insert Cell Phone' : telefone_celular}
              variant="outlined"
              title="Update Your Cell Phone"
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </FormStyled>

          <FormStyled component="form" noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label={telefone_fixo === null ? 'Insert Landline' : telefone_fixo}
              variant="outlined"
              title="Update Your Landline"
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </FormStyled>
        </ContainerInput>
      </MainContainer>
    </>
  );
};

Contactpanel.propTypes = {
  objectUserContact: propTypes.object,
};

export default memo(Contactpanel);
