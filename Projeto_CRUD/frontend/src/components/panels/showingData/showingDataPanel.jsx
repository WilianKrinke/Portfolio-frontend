/* eslint-disable no-unused-vars */
import React from 'react';
import propTypes from 'prop-types';
import { ButtonRefresh, ContainerStyledShowDatas, MainContainer, TagP } from '../styled/styled';
import { useSelector } from 'react-redux';

const Showingdatapanel = ({ userDatasObject }) => {
  const {
    idade,
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
    last_update,
  } = userDatasObject;

  const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

  function handleRefresh() {
    window.location.reload();
  }

  return (
    <>
      <MainContainer>
        <ContainerStyledShowDatas>
          <div className="div_lastupdate_btn" onClick={handleRefresh}>
            <ButtonRefresh $darkmode={darkMode}>Click to refresh datas</ButtonRefresh>
          </div>
          <div className="div_datas">
            <div className="div_first">
              <div
                className="div_name"
                title={`${
                  primeiro_nome === null || segundo_nome === null ? 'Data not updated' : primeiro_nome + segundo_nome
                }`}
              >
                <TagP isNull={primeiro_nome} $darkmode={darkMode}>
                  <b>Name:</b>{' '}
                  {primeiro_nome === null || segundo_nome === null
                    ? 'Data not updated'
                    : primeiro_nome + ' ' + segundo_nome}
                </TagP>
              </div>

              <div className="div_userName" title={`${userName === null ? 'Data not updated' : userName}`}>
                <TagP isNull={userName} $darkmode={darkMode}>
                  <b>User Name:</b> {userName === null ? 'Data not updated' : userName}
                </TagP>
              </div>

              <div className="div_birth" title={`${idade === null ? 'Data not Updated' : idade}`}>
                <TagP isNull={idade} $darkmode={darkMode}>
                  <b>Age:</b> {idade === null ? 'Data not Updated' : idade}
                </TagP>
              </div>

              <div
                className="div_adress_street"
                title={`${endereco_logradouro === null ? 'Data not Updated' : endereco_logradouro}`}
              >
                <TagP isNull={endereco_logradouro} $darkmode={darkMode}>
                  <b>Adress Street:</b> {endereco_logradouro === null ? 'Data not Updated' : endereco_logradouro}
                </TagP>
              </div>

              <div
                className="div_adress_district"
                title={`${endereco_bairro === null ? 'Data not Updated' : endereco_bairro}`}
              >
                <TagP isNull={endereco_bairro} $darkmode={darkMode}>
                  <b>Adress District:</b> {endereco_bairro === null ? 'Data not Updated' : endereco_bairro}
                </TagP>
              </div>
            </div>
            <div className="div_second">
              <div
                className="div_adress_number"
                title={`${endereco_numero === null ? 'Data not Updated' : endereco_numero}`}
              >
                <TagP isNull={endereco_numero} $darkmode={darkMode}>
                  <b>Adress Number:</b> {endereco_numero === null ? 'Data not Updated' : endereco_numero}
                </TagP>
              </div>

              <div
                className="div_adress_city"
                title={`${endereco_cidade === null ? 'Data not Updated' : endereco_cidade}`}
              >
                <TagP isNull={endereco_cidade} $darkmode={darkMode}>
                  <b>Adress City:</b> {endereco_cidade === null ? 'Data not Updated' : endereco_cidade}
                </TagP>
              </div>

              <div className="div_email" title={`${email === null ? 'Data not Updated' : email}`}>
                <TagP isNull={email} $darkmode={darkMode}>
                  <b>E-mail:</b> {email === null ? 'Data not Updated' : email}
                </TagP>
              </div>

              <div
                className="div_cell_phone"
                title={`${telefone_celular === null ? 'Data not Updated' : telefone_celular}`}
              >
                <TagP isNull={telefone_celular} $darkmode={darkMode}>
                  <b>Cell Phone:</b> {telefone_celular === null ? 'Data not Updated' : telefone_celular}
                </TagP>
              </div>

              <div className="div_landline" title={`${telefone_fixo === null ? 'Data not Updated' : telefone_fixo}`}>
                <TagP isNull={telefone_fixo} $darkmode={darkMode}>
                  <b>Landline:</b> {telefone_fixo === null ? 'Data not Updated' : telefone_fixo}
                </TagP>
              </div>
            </div>
          </div>
          <div className="div_lastupdate_p">
            <TagP $darkmode={darkMode}>-Last update: {last_update}.</TagP>
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
