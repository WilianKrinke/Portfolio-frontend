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

const Adresspanel = () => {
    const navigate = useNavigate();
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

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

    async function handleAdressNeighborhood(e) {
        try {
            e.preventDefault();
            const objectData = {
                data: endereco_BairroState,
                option: 6,
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

    async function handleAdressNumber(e) {
        try {
            e.preventDefault();
            const objectData = {
                data: endereco_NumeroState,
                option: 7,
            };

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

    async function handleCityAdress(e) {
        try {
            e.preventDefault();
            const objectData = {
                data: endereco_CidadeState,
                option: 8,
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

    return (
        <>
            <MainContainer>
                <ContainerInput>
                    <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleAdressStreet(e)}>
                        <TextField
                            id="outlined-basic"
                            label="Address Street"
                            variant="outlined"
                            className={darkMode ? 'darkmode' : 'normal'}
                            title="Update Your Address Street"
                            required
                            onChange={(e) => setEndereco_LogradouroState(e.target.value)}
                        />
                        <ButtonUpDate $darkmode={darkMode}>Update</ButtonUpDate>
                    </FormStyled>

                    <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleAdressNeighborhood(e)}>
                        <TextField
                            id="outlined-basic"
                            label="District"
                            variant="outlined"
                            className={darkMode ? 'darkmode' : 'normal'}
                            title="Update Your District"
                            required
                            onChange={(e) => setEndereco_BairroState(e.target.value)}
                        />
                        <ButtonUpDate $darkmode={darkMode}>Update</ButtonUpDate>
                    </FormStyled>

                    <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleAdressNumber(e)}>
                        <TextField
                            id="outlined-basic"
                            label="Number"
                            variant="outlined"
                            className={darkMode ? 'darkmode' : 'normal'}
                            title="Update Your Address Number"
                            required
                            onChange={(e) => setEndereco_NumeroState(e.target.value)}
                        />
                        <ButtonUpDate $darkmode={darkMode}>Update</ButtonUpDate>
                    </FormStyled>

                    <FormStyled component="form" autoComplete="off" onSubmit={(e) => handleCityAdress(e)}>
                        <TextField
                            id="outlined-basic"
                            label="City"
                            variant="outlined"
                            className={darkMode ? 'darkmode' : 'normal'}
                            title="Update Your City ​​Address"
                            required
                            onChange={(e) => setEndereco_CidadeState(e.target.value)}
                        />
                        <ButtonUpDate $darkmode={darkMode}>Update</ButtonUpDate>
                    </FormStyled>
                </ContainerInput>
            </MainContainer>
        </>
    );
};

export default memo(Adresspanel);
