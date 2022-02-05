/* eslint-disable no-unused-vars */
import TextField from '@mui/material/TextField';
import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import tokenTimeOut from '../../../utils/tokenTimeOut/tokenTimeOut';
import upDateNumber from '../../../utils/upDateData/upDateNumber';
import upDateString from '../../../utils/upDateData/upDateString';
import { ButtonUpDate } from '../../Buttons';
import '../styled/style.css';
import { ContainerInput, FormStyled, MainContainer } from '../styled/styled';

const Identificationpanel = () => {
    const [userNameState, setuserNameState] = useState('');
    const [primeiro_NomeState, setPrimeiro_NomeState] = useState('');
    const [segundo_NomeState, setSegundo_NomeState] = useState('');
    const [idadeState, setIdadeState] = useState('');

    const navigate = useNavigate();
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    async function handleUserName(e) {
        try {
            e.preventDefault();
            const objectData = {
                data: userNameState,
                option: 1,
            };

            const response = await upDateString(objectData);

            if (response === false) {
                tokenTimeOut(navigate);
            } else {
                toast.success('UpDated Data');
            }
        } catch (error) {
            if (error.message === 'Contains Inappropriate Characters') {
                toast.error('Contains Inappropriate Characters');
            } else {
                navigate(`/error-page/${error.message}`);
            }
        }
    }

    async function handleFirstName(e) {
        try {
            e.preventDefault();
            const objectData = {
                data: primeiro_NomeState,
                option: 2,
            };

            const response = await upDateString(objectData);

            if (response === false) {
                tokenTimeOut(navigate);
            } else {
                toast.success('UpDated Data');
            }
        } catch (error) {
            if (error.message === 'Contains Inappropriate Characters') {
                toast.error('Contains Inappropriate Characters');
            } else {
                navigate(`/error-page/${error.message}`);
            }
        }
    }

    async function handleSecondName(e) {
        try {
            e.preventDefault();
            const objectData = {
                data: segundo_NomeState,
                option: 3,
            };

            const response = await upDateString(objectData);

            if (response === false) {
                tokenTimeOut(navigate);
            } else {
                toast.success('UpDated Data');
            }
        } catch (error) {
            if (error.message === 'Contains Inappropriate Characters') {
                toast.error('Contains Inappropriate Characters');
            } else {
                navigate(`/error-page/${error.message}`);
            }
        }
    }

    async function handleBirth(e) {
        try {
            e.preventDefault();
            const objectData = {
                data: idadeState,
                option: 4,
            };

            if (idadeState > 122) {
                throw new Error('Maximum human age passed, try gain');
            }

            const response = await upDateNumber(objectData);

            if (response === false) {
                tokenTimeOut(navigate);
            } else {
                toast.success('UpDated Data');
            }
        } catch (error) {
            if (error.message === 'Contains Inappropriate Characters') {
                toast.error('Contains Inappropriate Characters');
            } else {
                navigate(`/error-page/${error.message}`);
            }
        }
    }

    return (
        <>
            <MainContainer>
                <ContainerInput>
                    <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleUserName(e)}>
                        <TextField
                            id="outlined-basic"
                            label="User Name"
                            variant="outlined"
                            className={darkMode ? 'darkmode' : 'normal'}
                            title="Update Your User Name"
                            onChange={(e) => setuserNameState(e.target.value)}
                            value={userNameState}
                            required
                        />
                        <ButtonUpDate $darkmode={darkMode}>Update</ButtonUpDate>
                    </FormStyled>

                    <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleFirstName(e)}>
                        <TextField
                            id="outlined-basic"
                            label="First Name"
                            variant="outlined"
                            className={darkMode ? 'darkmode' : 'normal'}
                            title="Update Your Name"
                            onChange={(e) => setPrimeiro_NomeState(e.target.value)}
                            required
                        />
                        <ButtonUpDate $darkmode={darkMode}>Update</ButtonUpDate>
                    </FormStyled>

                    <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleSecondName(e)}>
                        <TextField
                            id="outlined-basic"
                            label="Second Name"
                            variant="outlined"
                            className={darkMode ? 'darkmode' : 'normal'}
                            title="Update Your Second Name"
                            onChange={(e) => setSegundo_NomeState(e.target.value)}
                            required
                        />
                        <ButtonUpDate $darkmode={darkMode}>Update</ButtonUpDate>
                    </FormStyled>

                    <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleBirth(e)}>
                        <TextField
                            id="outlined-basic"
                            label="Age"
                            variant="outlined"
                            className={darkMode ? 'darkmode' : 'normal'}
                            title="Update Your Year Of Birth"
                            onChange={(e) => setIdadeState(e.target.value)}
                            required
                        />
                        <ButtonUpDate $darkmode={darkMode}>Update</ButtonUpDate>
                    </FormStyled>
                </ContainerInput>
            </MainContainer>
        </>
    );
};

export default memo(Identificationpanel);
