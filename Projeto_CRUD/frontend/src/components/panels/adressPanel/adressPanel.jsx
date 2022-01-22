/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import propTypes from 'prop-types';
import { MainContainer, ContainerInput, FormStyled } from '../styled/styled';
import { ButtonUpDate } from '../../Buttons';
import TextField from '@mui/material/TextField';

const Adresspanel = ({ objectUserAdress }) => {
  const { endereco_logradouro, endereco_bairro, endereco_numero, endereco_cidade } = objectUserAdress;

  function handleAdressStreet(e) {
    e.preventDefault();
    console.log('Chamou a func');
  }

  function handleAdressNeighborhood(e) {
    e.preventDefault();
    console.log('Chamou a func');
  }

  function handleAdressNumber(e) {
    e.preventDefault();
    console.log('Chamou a func');
  }

  function handleCityAdress(e) {
    e.preventDefault();
    console.log('Chamou a func');
  }

  return (
    <>
      <MainContainer>
        <ContainerInput>
          <FormStyled component="form" noValidate autoComplete="off" onSubmit={(e) => handleAdressStreet(e)}>
            <TextField
              id="outlined-basic"
              label={endereco_logradouro === null ? 'Insert Address Street' : endereco_logradouro}
              variant="outlined"
              title="Update Your Address Street"
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </FormStyled>

          <FormStyled component="form" noValidate autoComplete="off" onSubmit={(e) => handleAdressNeighborhood(e)}>
            <TextField
              id="outlined-basic"
              label={endereco_bairro === null ? 'Insert Address Neighborhood' : endereco_bairro}
              variant="outlined"
              title="Update Your Address Neighborhood"
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </FormStyled>

          <FormStyled component="form" noValidate autoComplete="off" onSubmit={(e) => handleAdressNumber(e)}>
            <TextField
              id="outlined-basic"
              label={endereco_numero === null ? 'Insert Address Number' : endereco_numero}
              variant="outlined"
              title="Update Your Address Number"
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </FormStyled>

          <FormStyled component="form" noValidate autoComplete="off" onSubmit={(e) => handleCityAdress(e)}>
            <TextField
              id="outlined-basic"
              label={endereco_cidade === null ? 'Insert City ​​Address' : endereco_cidade}
              variant="outlined"
              title="Update Your City ​​Address"
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </FormStyled>
        </ContainerInput>
      </MainContainer>
    </>
  );
};

Adresspanel.propTypes = {
  objectUserAdress: propTypes.object,
};

export default memo(Adresspanel);
