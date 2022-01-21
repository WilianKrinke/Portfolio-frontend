/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import propTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { ContainerButtons, ContainerInput, FormStyled, MainContainer } from './styled';
import { ButtonUpDate } from '../../Buttons';

const Identificationpanel = ({ objectUserIdentification }) => {
  console.log(objectUserIdentification);
  return (
    <>
      <MainContainer>
        <FormStyled component="form" noValidate autoComplete="off">
          <ContainerInput>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <ButtonUpDate>Update</ButtonUpDate>
          </ContainerInput>
          <ContainerInput>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <ButtonUpDate>Update</ButtonUpDate>
          </ContainerInput>
          <ContainerInput>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <ButtonUpDate>Update</ButtonUpDate>
          </ContainerInput>
          <ContainerInput>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
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
