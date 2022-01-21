/* eslint-disable no-unused-vars */
import React from 'react';
import propTypes from 'prop-types';
import { ContainerStyledShowDatas, MainContainer } from '../styled/styled';

const Showingdatapanel = ({ userDatasObject }) => {
  console.log(userDatasObject);
  const {
    data_nascimento,
    email,
    endereco_bairro,
    endereco_cidade,
    endereco_logradouro,
    endereco_numero,
    primeiro_nome,
    segundo_nome,
    telefone_celular,
    telefone_fixo,
    userName,
  } = userDatasObject;

  return (
    <>
      <MainContainer>
        <ContainerStyledShowDatas></ContainerStyledShowDatas>
      </MainContainer>
    </>
  );
};

Showingdatapanel.propTypes = {
  userDatasObject: propTypes.object,
};

export default Showingdatapanel;
