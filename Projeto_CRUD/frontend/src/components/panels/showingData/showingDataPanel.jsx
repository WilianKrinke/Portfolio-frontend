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
          <div className="div_name">
            <p>
              <b>First Name:</b> {primeiro_nome === null ? 'Data not updated' : primeiro_nome + segundo_nome}
            </p>
          </div>

          <div className="div_userName">
            <p>
              <b>User Name:</b> {userName === null ? 'Data not updated' : userName}
            </p>
          </div>

          <div className="div_birth">
            <p>
              <b>Birth:</b> {data_nascimento === null ? 'Data not Updated' : data_nascimento}
            </p>
          </div>

          <div className="div_adress_street">
            <p>
              <b>Adress Street:</b> {endereco_logradouro === null ? 'Data not Updated' : endereco_logradouro}
            </p>
          </div>

          <div className="div_adress_district">
            <p>
              <b>Adress District:</b> {endereco_bairro === null ? 'Data not Updated' : endereco_bairro}
            </p>
          </div>

          <div className="div_adress_number">
            <p>
              <b>Adress Number:</b> {endereco_numero === null ? 'Data not Updated' : endereco_numero}
            </p>
          </div>

          <div className="div_adress_city">
            <p>
              <b>Adress City:</b> {endereco_cidade === null ? 'Data not Updated' : endereco_cidade}
            </p>
          </div>

          <div className="div_email">
            <p>
              <b>E-mail:</b> {email === null ? 'Data not Updated' : email}
            </p>
          </div>

          <div className="div_cell_phone">
            <p>
              <b>Cell Phone:</b> {telefone_celular === null ? 'Data not Updated' : telefone_celular}
            </p>
          </div>

          <div className="div_landline">
            <p>
              <b>Landline:</b> {telefone_fixo === null ? 'Data not Updated' : telefone_fixo}
            </p>
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
