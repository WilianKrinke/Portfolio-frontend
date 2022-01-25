import React, { memo, useState } from 'react';
import propTypes from 'prop-types';
import { MainContainer, ContainerInput, FormStyled } from '../styled/styled';
import { ButtonUpDate } from '../../Buttons';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import upDateData from '../../../utils/upDateData/upDateData';
import tokenTimeOut from '../../../utils/tokenTimeOut/tokenTimeOut';

const Adresspanel = ({ objectUserAdress }) => {
  const navigate = useNavigate();
  const { endereco_logradouro, endereco_bairro, endereco_numero, endereco_cidade } = objectUserAdress;

  const [endereco_LogradouroState, setEndereco_LogradouroState] = useState('');
  const [endereco_BairroState, setEndereco_BairroState] = useState('');
  const [endereco_NumeroState, setEndereco_NumeroState] = useState('');
  const [endereco_CidadeState, setEndereco_CidadeState] = useState('');

  async function handleAdressStreet(e) {
    try {
      e.preventDefault();
      const objectData = {
        data: endereco_LogradouroState,
        option: 5,
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

  async function handleAdressNeighborhood(e) {
    try {
      e.preventDefault();
      const objectData = {
        data: endereco_BairroState,
        option: 6,
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

  async function handleAdressNumber(e) {
    try {
      e.preventDefault();
      const objectData = {
        data: endereco_NumeroState,
        option: 7,
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

  async function handleCityAdress(e) {
    try {
      e.preventDefault();
      const objectData = {
        data: endereco_CidadeState,
        option: 8,
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
          <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleAdressStreet(e)}>
            <TextField
              id="outlined-basic"
              label={endereco_logradouro === null ? 'Insert Address Street' : endereco_logradouro}
              variant="outlined"
              title="Update Your Address Street"
              required
              onChange={(e) => setEndereco_LogradouroState(e.target.value)}
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </FormStyled>

          <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleAdressNeighborhood(e)}>
            <TextField
              id="outlined-basic"
              label={endereco_bairro === null ? 'Insert Address Neighborhood' : endereco_bairro}
              variant="outlined"
              title="Update Your Address Neighborhood"
              required
              onChange={(e) => setEndereco_BairroState(e.target.value)}
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </FormStyled>

          <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleAdressNumber(e)}>
            <TextField
              id="outlined-basic"
              label={endereco_numero === null ? 'Insert Address Number' : endereco_numero}
              variant="outlined"
              title="Update Your Address Number"
              required
              onChange={(e) => setEndereco_NumeroState(e.target.value)}
            />
            <ButtonUpDate>Update</ButtonUpDate>
          </FormStyled>

          <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleCityAdress(e)}>
            <TextField
              id="outlined-basic"
              label={endereco_cidade === null ? 'Insert City ​​Address' : endereco_cidade}
              variant="outlined"
              title="Update Your City ​​Address"
              required
              onChange={(e) => setEndereco_CidadeState(e.target.value)}
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
