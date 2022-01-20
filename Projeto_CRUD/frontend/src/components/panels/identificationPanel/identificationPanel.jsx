/* eslint-disable no-unused-vars */
import React from 'react';
import propTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ContainerButtons, ContainerInput, FormStyled, MainContainer } from './styled';

const Identificationpanel = ({ objectUserIdentification }) => {
  console.log(objectUserIdentification);
  return (
    <>
      <MainContainer>
        <FormStyled component="form" noValidate autoComplete="off">
          <ContainerInput>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </ContainerInput>
          <ContainerInput>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </ContainerInput>
          <ContainerInput>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </ContainerInput>
          <ContainerInput>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </ContainerInput>
        </FormStyled>
      </MainContainer>
    </>
  );
};

Identificationpanel.propTypes = {
  objectUserIdentification: propTypes.object,
};

export default Identificationpanel;
