import propTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import translate from '../../../i18n/translate';
import { ButtonRefresh, ContainerStyledShowDatas, MainContainer, TagP } from '../styled/styled';

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
                        <ButtonRefresh $darkmode={darkMode}>{translate('clickrefreshdatas')}</ButtonRefresh>
                    </div>
                    <div className="div_datas">
                        <div className="div_first">
                            <div
                                className="div_name"
                                title={`${
                                    primeiro_nome === null || segundo_nome === null
                                        ? translate('datanotupdatepanel')
                                        : primeiro_nome + segundo_nome
                                }`}
                            >
                                <TagP isNull={primeiro_nome} $darkmode={darkMode}>
                                    <b>{translate('name')}:</b>{' '}
                                    {primeiro_nome === null || segundo_nome === null
                                        ? translate('datanotupdatepanel')
                                        : primeiro_nome + ' ' + segundo_nome}
                                </TagP>
                            </div>

                            <div
                                className="div_userName"
                                title={`${userName === null ? translate('datanotupdatepanel') : userName}`}
                            >
                                <TagP isNull={userName} $darkmode={darkMode}>
                                    <b>{translate('userName')}:</b>{' '}
                                    {userName === null ? translate('datanotupdatepanel') : userName}
                                </TagP>
                            </div>

                            <div
                                className="div_birth"
                                title={`${idade === null ? translate('datanotupdatepanel') : idade}`}
                            >
                                <TagP isNull={idade} $darkmode={darkMode}>
                                    <b>{translate('age')}:</b>{' '}
                                    {idade === null ? translate('datanotupdatepanel') : idade}
                                </TagP>
                            </div>

                            <div
                                className="div_adress_street"
                                title={`${
                                    endereco_logradouro === null ? translate('datanotupdatepanel') : endereco_logradouro
                                }`}
                            >
                                <TagP isNull={endereco_logradouro} $darkmode={darkMode}>
                                    <b>{translate('adressstreet')}:</b>{' '}
                                    {endereco_logradouro === null
                                        ? translate('datanotupdatepanel')
                                        : endereco_logradouro}
                                </TagP>
                            </div>

                            <div
                                className="div_adress_district"
                                title={`${
                                    endereco_bairro === null ? translate('datanotupdatepanel') : endereco_bairro
                                }`}
                            >
                                <TagP isNull={endereco_bairro} $darkmode={darkMode}>
                                    <b>{translate('adressdistrict')}:</b>{' '}
                                    {endereco_bairro === null ? translate('datanotupdatepanel') : endereco_bairro}
                                </TagP>
                            </div>
                        </div>
                        <div className="div_second">
                            <div
                                className="div_adress_number"
                                title={`${
                                    endereco_numero === null ? translate('datanotupdatepanel') : endereco_numero
                                }`}
                            >
                                <TagP isNull={endereco_numero} $darkmode={darkMode}>
                                    <b>{translate('adressnumber')}:</b>{' '}
                                    {endereco_numero === null ? translate('datanotupdatepanel') : endereco_numero}
                                </TagP>
                            </div>

                            <div
                                className="div_adress_city"
                                title={`${
                                    endereco_cidade === null ? translate('datanotupdatepanel') : endereco_cidade
                                }`}
                            >
                                <TagP isNull={endereco_cidade} $darkmode={darkMode}>
                                    <b>{translate('adresscity')}:</b>{' '}
                                    {endereco_cidade === null ? translate('datanotupdatepanel') : endereco_cidade}
                                </TagP>
                            </div>

                            <div
                                className="div_email"
                                title={`${email === null ? translate('datanotupdatepanel') : email}`}
                            >
                                <TagP isNull={email} $darkmode={darkMode}>
                                    <b>E-mail:</b> {email === null ? translate('datanotupdatepanel') : email}
                                </TagP>
                            </div>

                            <div
                                className="div_cell_phone"
                                title={`${
                                    telefone_celular === null ? translate('datanotupdatepanel') : telefone_celular
                                }`}
                            >
                                <TagP isNull={telefone_celular} $darkmode={darkMode}>
                                    <b>{translate('cellphone')}:</b>{' '}
                                    {telefone_celular === null ? translate('datanotupdatepanel') : telefone_celular}
                                </TagP>
                            </div>

                            <div
                                className="div_landline"
                                title={`${telefone_fixo === null ? translate('datanotupdatepanel') : telefone_fixo}`}
                            >
                                <TagP isNull={telefone_fixo} $darkmode={darkMode}>
                                    <b>{translate('landline')}:</b>{' '}
                                    {telefone_fixo === null ? translate('datanotupdatepanel') : telefone_fixo}
                                </TagP>
                            </div>
                        </div>
                    </div>
                    <div className="div_lastupdate_p">
                        <TagP $darkmode={darkMode}>
                            {translate('lastupdate')}: {last_update}.
                        </TagP>
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
