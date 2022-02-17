import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import propTypes from 'prop-types';
import React, { memo, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import translate from '../../i18n/translate';
import { sendDatas } from '../../utils/signupSendDatas/sendDatas';
import { ButtonSignUp } from '../Buttons';
import './signUpForm.css';
import { ButtonContainer, ContainerInfoSignUp } from './styled';

const Form = ({ setisLoginVisible }) => {
    const [userName, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passConfirmed, setPassConfirmed] = useState('');

    async function handleSubmitUser(e) {
        try {
            e.preventDefault();
            const objectDatas = {
                userName,
                email,
                pass,
                passConfirmed,
            };

            const response = await sendDatas(objectDatas);

            const { isSameUserName, wasRegistered } = response;

            if (isSameUserName) {
                throw new Error('Username is Already in Use, Choose Another');
            }

            if (wasRegistered) {
                toast.success('User Registered Successfully');
                setuserName('');
                setEmail('');
                setPass('');
                setPassConfirmed('');
                setisLoginVisible(true);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    function handleEyePass() {
        const eyeSlashPass = document.getElementById('eyeSlash');
        const eyeOpen = document.getElementById('eyeOpen');
        const textFieldPass = document.getElementById('pass_signup');

        if (eyeOpen.classList.contains('none')) {
            eyeOpen.classList.remove('none');
            eyeSlashPass.classList.add('none');
            textFieldPass.removeAttribute('type');
            textFieldPass.setAttribute('type', 'text');
        } else {
            eyeSlashPass.classList.remove('none');
            eyeOpen.classList.add('none');
            textFieldPass.removeAttribute('type');
            textFieldPass.setAttribute('type', 'password');
        }
    }

    function handleEyePassConfirmed() {
        const eyeSlashPassConfirmed = document.getElementById('eyeSlashConfirmed');
        const eyeOpenConfirmed = document.getElementById('eyeOpenConfirmed');
        const textPassConfirmed = document.getElementById('confirmed_pass');

        if (eyeOpenConfirmed.classList.contains('none')) {
            eyeOpenConfirmed.classList.remove('none');
            eyeSlashPassConfirmed.classList.add('none');
            textPassConfirmed.removeAttribute('type');
            textPassConfirmed.setAttribute('type', 'text');
        } else {
            eyeSlashPassConfirmed.classList.remove('none');
            eyeOpenConfirmed.classList.add('none');
            textPassConfirmed.removeAttribute('type');
            textPassConfirmed.setAttribute('type', 'password');
        }
    }

    return (
        <>
            <form className="signupForm" onSubmit={(e) => handleSubmitUser(e)}>
                <ContainerInfoSignUp>
                    <label htmlFor="user_name_signup">
                        <i className="fas fa-user" title="User Name"></i>
                    </label>
                    <Box>
                        <TextField
                            id="user_name_signup"
                            label={translate('userName')}
                            variant="standard"
                            type="text"
                            className="dark"
                            name="user_name_signup"
                            onChange={(e) => setuserName(e.target.value)}
                            value={userName}
                            required
                            autoComplete="off"
                        />
                    </Box>
                </ContainerInfoSignUp>

                <ContainerInfoSignUp>
                    <label htmlFor="email_signup">
                        <i className="fas fa-envelope" title="E-mail"></i>
                    </label>
                    <Box>
                        <TextField
                            id="email_signup"
                            label="E-mail"
                            variant="standard"
                            type="email"
                            className="dark"
                            name="email_signup"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            autoComplete="off"
                        />
                    </Box>
                </ContainerInfoSignUp>

                <ContainerInfoSignUp>
                    <label onClick={() => handleEyePass()}>
                        <i className="fas fa-eye-slash" id="eyeSlash" title="Password"></i>
                        <i className="fas fa-eye none" id="eyeOpen" title="Password"></i>
                    </label>
                    <Box>
                        <TextField
                            id="pass_signup"
                            label={translate('password')}
                            variant="standard"
                            type="password"
                            className="dark"
                            name="pass_signup"
                            onChange={(e) => setPass(e.target.value)}
                            value={pass}
                            required
                            autoComplete="off"
                        />
                    </Box>
                </ContainerInfoSignUp>

                <ContainerInfoSignUp>
                    <label onClick={() => handleEyePassConfirmed()}>
                        <i className="fas fa-eye-slash" id="eyeSlashConfirmed" title="Confirmed Password"></i>
                        <i className="fas fa-eye none" id="eyeOpenConfirmed" title="Confirmed Password"></i>
                    </label>
                    <Box>
                        <TextField
                            id="confirmed_pass"
                            label={translate('confirmpass')}
                            variant="standard"
                            type="password"
                            className="dark"
                            name="confirmed_pass"
                            onChange={(e) => setPassConfirmed(e.target.value)}
                            value={passConfirmed}
                            required
                            autoComplete="off"
                        />
                    </Box>
                </ContainerInfoSignUp>
                <ButtonContainer>
                    <ButtonSignUp>{translate('register')}</ButtonSignUp>
                </ButtonContainer>
            </form>
        </>
    );
};

Form.propTypes = {
    setisLoginVisible: propTypes.func,
};

export default memo(Form);
