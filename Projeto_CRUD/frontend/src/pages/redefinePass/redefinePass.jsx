/* eslint-disable no-unused-vars */
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { ButtonConfirmResetPass } from '../../components/Buttons';
import Letterfooter from '../../components/letterFooter/letterFooter';
import Letterheader from '../../components/letterHeader/letterHeader';
import Loading from '../../components/loading/Loading';
import { toggleLoading } from '../../store/actions/actions';
import changePass from '../../utils/changePass/changePass';
import verifyToken from '../../utils/verifyTokenToResetPass/verifyToken';
import {
    BoxStyled,
    ContainerInfo,
    DivButtons,
    DivConfirmPass,
    DivNewPass,
    RedefinePassMain,
    SectionResetPass,
} from './styled';

const RedefinePass = () => {
    const params = useParams();
    const { token, idUser } = params;

    const [newPass, setnewPass] = useState('');
    const [confirmPass, setconfirmPass] = useState('');

    const loading = useSelector((state) => state.toggleLoading.loading);
    const dispatch = useDispatch();

    let navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const response = await verifyToken(token, idUser);
                const { data } = response;

                if (data.wasValid) {
                    dispatch(toggleLoading());
                } else {
                    navigate('/');
                }
            } catch (error) {
                console.log(error);
                navigate('/');
            }
        })();
    }, []);

    function handleEyePass() {
        const eyeSlashPass = document.getElementById('eyeSlash');
        const eyeOpen = document.getElementById('eyeOpen');
        const textFieldPass = document.getElementById('standard-basic');

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
        const textPassConfirmed = document.getElementById('standard-basic2');

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

    async function handleNewPass(e) {
        e.preventDefault();

        try {
            const response = await changePass(newPass, confirmPass, token, idUser);

            if (response.wasUpdate === true) {
                toast.success('Password Changed');
                setTimeout(() => {
                    navigate('/');
                }, 3000);
            } else {
                toast.warn('Password Not Changed, contact the administrator');
            }
        } catch (error) {
            toast.warn('Password Not Changed, contact the administrator');
            console.log(error);
        }
    }

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Letterheader phrase="Reset Your Password" />
                    <RedefinePassMain>
                        <SectionResetPass>
                            <ContainerInfo>
                                <form onSubmit={(e) => handleNewPass(e)}>
                                    <DivNewPass>
                                        <label onClick={() => handleEyePass()}>
                                            <i className="fas fa-eye-slash" id="eyeSlash" title="Password"></i>
                                            <i className="fas fa-eye none" id="eyeOpen" title="Password"></i>
                                        </label>
                                        <BoxStyled>
                                            <TextField
                                                aria-invalid="false"
                                                id="standard-basic"
                                                label="New Password"
                                                variant="standard"
                                                type="password"
                                                onChange={(e) => setnewPass(e.target.value)}
                                                required
                                            />
                                        </BoxStyled>
                                    </DivNewPass>

                                    <DivConfirmPass>
                                        <label onClick={() => handleEyePassConfirmed()}>
                                            <i
                                                className="fas fa-eye-slash"
                                                id="eyeSlashConfirmed"
                                                title="Confirmed Password"
                                            ></i>
                                            <i
                                                className="fas fa-eye none"
                                                id="eyeOpenConfirmed"
                                                title="Confirmed Password"
                                            ></i>
                                        </label>
                                        <BoxStyled>
                                            <TextField
                                                aria-invalid="false"
                                                id="standard-basic2"
                                                label="Confirm Password"
                                                variant="standard"
                                                type="password"
                                                onChange={(e) => setconfirmPass(e.target.value)}
                                                required
                                            />
                                        </BoxStyled>
                                    </DivConfirmPass>

                                    <DivButtons>
                                        <Link to="/">Cancel</Link>
                                        <ButtonConfirmResetPass>Confirm</ButtonConfirmResetPass>
                                    </DivButtons>
                                </form>
                            </ContainerInfo>
                        </SectionResetPass>

                        <ToastContainer
                            position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop
                            closeOnClick
                            rtl={false}
                            draggable
                            pauseOnHover={false}
                            width={500}
                        />
                    </RedefinePassMain>
                    <Letterfooter />
                </>
            )}
        </>
    );
};

export default RedefinePass;
