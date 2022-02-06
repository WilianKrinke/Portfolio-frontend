import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { sendSignIn } from '../../utils/signinSendDatas/sendSignIn';
import { ButtonSignin } from '../Buttons';
import './signInForm.css';
import { ButtonContainer, PassContainer, UserContainer } from './styled';

const signIn = () => {
    const [userName, setuserName] = useState(null);
    const [pass, setPass] = useState(null);

    const navigate = useNavigate();

    async function handleForm(e) {
        e.preventDefault();
        try {
            const signinDatas = {
                userName,
                pass,
            };

            const { authenticate } = await sendSignIn(signinDatas);

            if (authenticate === true) {
                navigate('./book-list');
            } else {
                throw new Error('Incorrect username or password');
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <>
            <form className="signinForm" autoComplete="false" onSubmit={(e) => handleForm(e)}>
                <UserContainer>
                    <label htmlFor="user_name_login">
                        <i className="fas fa-user" title="User Name"></i>
                    </label>
                    <Box>
                        <TextField
                            required
                            id="user_name_login"
                            label="User Name"
                            variant="standard"
                            className="dark"
                            type="text"
                            name="user_name_login"
                            onChange={(e) => setuserName(e.target.value)}
                            autoComplete="off"
                        />
                    </Box>
                </UserContainer>

                <PassContainer>
                    <label htmlFor="pass_login">
                        <i className="fas fa-lock" title="Password"></i>
                    </label>
                    <Box>
                        <TextField
                            required
                            id="pass_login"
                            label="Password"
                            variant="standard"
                            className="dark"
                            type="password"
                            name="pass_login"
                            onChange={(e) => setPass(e.target.value)}
                            autoComplete="off"
                        />
                    </Box>
                </PassContainer>

                <ButtonContainer>
                    <ButtonSignin>Sign In</ButtonSignin>
                </ButtonContainer>
            </form>
        </>
    );
};

export default memo(signIn);
