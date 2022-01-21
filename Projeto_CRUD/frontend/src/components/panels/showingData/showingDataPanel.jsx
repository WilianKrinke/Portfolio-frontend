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
        <ContainerStyledShowDatas>
          <div className="div_identification">
            <div className="div_name">
              <div className="first_name"></div>
              <div className="second_name"></div>
            </div>
            <div className="div_userName"></div>
            <div className="div_birth"></div>
          </div>
          <div className="div_adress">
            <div className="div_adress_street"></div>
            <div className="div_adress_neighborhood"></div>
            <div className="div_adress_number"></div>
            <div className="div_adress_city"></div>
          </div>
          <div className="div_contact">
            <div className="div_email"></div>
            <div className="div_cell_phone"></div>
            <div className="div_landline"></div>
          </div>
        </ContainerStyledShowDatas>
      </MainContainer>
    </>
  );
};

Showingdatapanel.propTypes = {
  userDatasObject: propTypes.object,
};

export default Showingdatapanel;
