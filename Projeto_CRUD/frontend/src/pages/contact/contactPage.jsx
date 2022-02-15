import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ButtonSendContact } from '../../components/Buttons';
import InternalFooter from '../../components/footer/InternalFooter';
import HeaderComponent from '../../components/header/HeaderComponent';
import Loading from '../../components/loading/Loading';
import Menu from '../../components/menu/Menu';
import acessUser from '../../utils/accessUser/acessUser';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import userContact from '../../utils/userContact/userContact';
import { SectionContainer } from '../myBorrowedBooks/styled';
import './contact.css';
import { Adress, ArticleContainer, ContactMain, DivPhysicalAddress, FormStyled, H2, IconLoading, P } from './styled';

const ContactPage = () => {
    const [loadingState, setloadingState] = useState(true);
    const [loadingButtonState, setLoadingButtonState] = useState(false);
    const [userNameState, setUserNameState] = useState('');
    const [messageState, setMessageState] = useState('');
    const [subjectState, setSubjectState] = useState('');
    const [emailState, setEmailState] = useState('');
    const [messageLength, setmessageLength] = useState(0);
    const [emailSupportState] = useState('support_contact@email.com');

    const navigate = useNavigate();
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    useEffect(() => {
        (async () => {
            try {
                const response = await acessUser();

                if (response === false) {
                    tokenTimeOut(navigate);
                } else {
                    const { userName, email } = response;
                    setUserNameState(userName);
                    setEmailState(email);
                    setloadingState(false);
                }
            } catch (error) {
                navigate(`/error-page/${error.message}`);
            }
        })();
    }, []);

    useEffect(() => {
        setmessageLength(messageState.length);
    }, [messageState]);

    function handleMessage(e) {
        setMessageState(e.target.value);
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            setLoadingButtonState(true);

            const objectMessage = {
                emailFrom: emailState,
                emailTo: emailSupportState,
                subject: subjectState.Subject,
                message: messageState,
            };

            const response = await userContact(objectMessage);
            response === false && tokenTimeOut();

            setLoadingButtonState(false);
            document.getElementById('textarea').value = '';
            setmessageLength(0);
            toast.success('Message Sent Successfully, Thank you.');
        } catch (error) {
            navigate(`/error-page/${error.message}`);
        }
    }

    const arrSubjects = [
        { Subject: 'System Errors' },
        { Subject: 'Book Loan' },
        { Subject: 'Favorites' },
        { Subject: 'Website Usability' },
        { Subject: 'Website Colors' },
        { Subject: 'Passwords' },
        { Subject: 'Login' },
    ];

    const defaultProps = {
        options: arrSubjects,
        getOptionLabel: (option) => option.Subject,
    };

    return (
        <>
            {loadingState ? (
                <Loading />
            ) : (
                <>
                    <Menu user={userNameState} />
                    <HeaderComponent phrase="Contact Us" />
                    <ContactMain $darkmode={darkMode}>
                        <SectionContainer>
                            <ArticleContainer>
                                <DivPhysicalAddress $darkmode={darkMode}>
                                    <div className="div_title">
                                        <H2 $darkmode={darkMode}>Our Office</H2>
                                    </div>
                                    <div className="div_adress">
                                        <Adress $darkmode={darkMode}>
                                            Lorem Ipsum Street, Lorem Ipsum District, Lorem Ipsum City
                                        </Adress>
                                        <P $darkmode={darkMode}>+99 99 99999-9993</P>
                                        <P $darkmode={darkMode}>Lorem-E-mail@email.com</P>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58879.017085215884!2d-46.933618992296786!3d-22.730524619711403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8dea2fead7493%3A0xaae359ef9cc88d5f!2sPedreira%2C%20SP%2C%2013920-000!5e0!3m2!1spt-BR!2sbr!4v1643423901136!5m2!1spt-BR!2sbr"
                                            style={{
                                                border: '1px solid rgba(0, 0, 0, 0.2)',
                                                borderRadius: '2px',
                                                width: '100%',
                                                height: '200px',
                                            }}
                                            loading="lazy"
                                        ></iframe>
                                    </div>
                                </DivPhysicalAddress>
                                <FormStyled onSubmit={(e) => handleSubmit(e)} $darkmode={darkMode}>
                                    <div className="div_title">
                                        <H2 $darkmode={darkMode}>Message Us</H2>
                                    </div>
                                    <div className="div_from">
                                        <P $darkmode={darkMode}>
                                            <b>From:</b> personalemail@gmail.com/{emailState}
                                        </P>
                                    </div>
                                    <div className="div_to">
                                        <P $darkmode={darkMode}>
                                            <b>To:</b> {emailSupportState}
                                        </P>
                                    </div>
                                    <div className="div_select_subject">
                                        <Autocomplete
                                            {...defaultProps}
                                            id="auto-complete"
                                            isOptionEqualToValue={(option, value) => option.id === value.id}
                                            autoComplete
                                            includeInputInList
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Subjects"
                                                    variant="standard"
                                                    className={darkMode ? 'darkmode' : 'normal'}
                                                />
                                            )}
                                            onChange={(event, value) => setSubjectState(value)}
                                        />
                                    </div>
                                    <div className="div_message">
                                        <label htmlFor="textarea">
                                            <P $darkmode={darkMode}>
                                                <b>Message: </b>
                                            </P>
                                        </label>
                                        <textarea
                                            name="textarea"
                                            id="textarea"
                                            cols="30"
                                            rows="10"
                                            className="textarea"
                                            onChange={(e) => handleMessage(e)}
                                            maxLength={240}
                                            required
                                        ></textarea>
                                        <P $darkmode={darkMode}>{messageLength}/240 characters</P>
                                    </div>
                                    <div className="div_button">
                                        <ButtonSendContact $darkmode={darkMode}>
                                            {loadingButtonState ? <IconLoading /> : 'Send'}
                                        </ButtonSendContact>
                                    </div>
                                </FormStyled>
                            </ArticleContainer>
                        </SectionContainer>
                    </ContactMain>
                    <InternalFooter />
                </>
            )}
        </>
    );
};

export default ContactPage;
