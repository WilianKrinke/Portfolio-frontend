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
import {
    BsFillEyeFillStyled,
    BsFillEyeSlashFillStyled,
    ButtonContainer,
    ContainerInfoSignUp,
    EmailIcon,
    UserIcon,
} from './styled';

const Form = ({ setisLoginVisible }) => {
    const [userName, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passConfirmed, setPassConfirmed] = useState('');
    const [seePassState, setseePassState] = useState(true);
    const [seeConfirmedPassState, setseeConfirmedPassState] = useState(true);
    const [typeTextPassState, setTypeTextPassState] = useState(true);
    const [typeTextConfirmedPassState, setTypeConfirmedPassTextState] = useState(true);

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

    function handleSeePass() {
        setseePassState(!seePassState);
        setTypeTextPassState(!typeTextPassState);
    }

    function handleSeeConfirmedPass() {
        setseeConfirmedPassState(!seeConfirmedPassState);
        setTypeConfirmedPassTextState(!typeTextConfirmedPassState);
    }

    return (
        <>
            <form className="signupForm" onSubmit={(e) => handleSubmitUser(e)}>
                <ContainerInfoSignUp>
                    <label htmlFor="user_name_signup">
                        <UserIcon title="Enter UserName" />
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
                        <EmailIcon title="Enter E-mail" />
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
                    <label onClick={handleSeePass}>
                        {seePassState ? (
                            <BsFillEyeSlashFillStyled title="Enter Password" />
                        ) : (
                            <BsFillEyeFillStyled title="Enter Password" />
                        )}
                    </label>
                    <Box>
                        <TextField
                            id="pass_signup"
                            label={translate('password')}
                            variant="standard"
                            type={typeTextPassState ? 'password' : 'text'}
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
                    <label onClick={handleSeeConfirmedPass}>
                        {seeConfirmedPassState ? (
                            <BsFillEyeSlashFillStyled title="Repeat Password" />
                        ) : (
                            <BsFillEyeFillStyled title="Repeat Password" />
                        )}
                    </label>
                    <Box>
                        <TextField
                            id="confirmed_pass"
                            label={translate('confirmpass')}
                            variant="standard"
                            type={typeTextConfirmedPassState ? 'password' : 'text'}
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
