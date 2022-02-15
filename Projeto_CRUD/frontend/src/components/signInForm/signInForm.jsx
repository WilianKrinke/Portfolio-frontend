/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { memo, useState } from 'react';
import { FaLock, FaUnlock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { sendSignIn } from '../../utils/signinSendDatas/sendSignIn';
import { ButtonSignin } from '../Buttons';
import './signInForm.css';
import { ButtonContainer, PassContainer, UserContainer } from './styled';

const signIn = () => {
    const [userName, setuserName] = useState(null);
    const [pass, setPass] = useState(null);
    const [lockState, setLockState] = useState(true);
    const [typeTextState, setTypeTextState] = useState(true);

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

    function handleLock() {
        setLockState(!lockState);
        setTypeTextState(!typeTextState);
    }

    return (
        <>
            <form className="signinForm" autoComplete="false" onSubmit={(e) => handleForm(e)}>
                <UserContainer>
                    <FaUser id="userIcon" title="User Name" />
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
                        />
                    </Box>
                </UserContainer>

                <PassContainer>
                    {lockState ? (
                        <FaLock onClick={handleLock} id="lockUnlock" title="Click to See" />
                    ) : (
                        <FaUnlock onClick={handleLock} id="lockUnlock" title="Click to Hide" />
                    )}
                    <Box>
                        <TextField
                            required
                            id="pass_login"
                            label="Password"
                            variant="standard"
                            className="dark"
                            type={`${typeTextState ? 'password' : 'text'}`}
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
