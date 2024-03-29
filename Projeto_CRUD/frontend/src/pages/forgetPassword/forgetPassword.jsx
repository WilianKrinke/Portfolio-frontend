import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ButtonRecoverPass } from '../../components/Buttons';
import Externalfooter from '../../components/footer/externalFooter';
import HeaderComponent from '../../components/header/HeaderComponent';
import translate from '../../i18n/translate';
import reqRecoverPass from '../../utils/recoverPass/reqRecoverPass';
import './forgetPass.css';
import { BoxStyled, Container, ContainerInfo, ForgetPassMain, IconLoading, LinkStyled, P } from './styled';

const ForgetPassword = () => {
    const [userName, setuserName] = useState('');
    const [loadingSendEmailState, setLoadingSendEmailState] = useState(false);

    const navigate = useNavigate();
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    async function handleForm(e) {
        try {
            e.preventDefault();
            setLoadingSendEmailState(true);
            const response = await reqRecoverPass(userName);

            if (response !== null) {
                const { email } = response;
                toast.success(`The password reset link has been sent to ${email}`);
                setLoadingSendEmailState(false);
            } else {
                toast.warn('Something wrong, contact the administrator');
            }
        } catch (error) {
            navigate(`/error-page/${error.message}`);
        }
    }

    return (
        <>
            <HeaderComponent phrase={translate('forgetPassTitle')} />
            <ForgetPassMain $darkmode={darkMode}>
                <Container>
                    <ContainerInfo $darkmode={darkMode}>
                        <div className="container_disclaimer">
                            <P $darkmode={darkMode}>{translate('orientation')}</P>
                        </div>
                        <form className="form" onSubmit={(e) => handleForm(e)}>
                            <BoxStyled noValidate>
                                <TextField
                                    id="standard-basic"
                                    className={darkMode ? 'darkmodeForgetPass' : 'normalForgetPass'}
                                    label={translate('userName')}
                                    variant="standard"
                                    onChange={(e) => setuserName(e.target.value)}
                                />
                            </BoxStyled>
                            <div className="container_buttons">
                                <ButtonRecoverPass $darkmode={darkMode}>
                                    {loadingSendEmailState ? <IconLoading /> : translate('send')}
                                </ButtonRecoverPass>
                                <LinkStyled to="/" $darkmode={darkMode}>
                                    {translate('backtologin')}
                                </LinkStyled>
                            </div>
                        </form>
                    </ContainerInfo>
                </Container>
            </ForgetPassMain>
            <Externalfooter />
        </>
    );
};

export default ForgetPassword;
