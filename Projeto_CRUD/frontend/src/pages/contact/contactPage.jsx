/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonSendContact } from '../../components/Buttons';
import LetterFooter from '../../components/letterFooter/letterFooter';
import Letterheader from '../../components/letterHeader/letterHeader';
import Loading from '../../components/loading/Loading';
import Menu from '../../components/menu/Menu';
import { DivLoading, MainStyled } from '../../primeComponents';
import acessUser from '../../utils/accessUser/acessUser';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';
import userContact from '../../utils/userContact/userContact';
import { SectionContainer } from '../myBorrowedBooks/styled';
import { ArticleContainer, DivPhysicalAddress, FormStyled, IconLoading } from './styled';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';

const ContactPage = () => {
  const [loadingState, setloadingState] = useState(true);
  const [loadingButtonState, setLoadingButtonState] = useState(false);
  const [userNameState, setUserNameState] = useState('');
  const [messageState, setMessageState] = useState('');
  const [subjectState, setSubjectState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [emailSupportState] = useState('support_contact@email.com');

  const navigate = useNavigate();

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
        console.log(error.message);
        //Página de Erro
      }
    })();
  }, []);

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

      if (response === false) {
        tokenTimeOut(navigate);
      } else {
        setLoadingButtonState(false);
        document.getElementById('textarea').value = '';
        toast.success('Message Sent Successfully, Thank you.');
      }
    } catch (error) {
      //Página de error
      console.log(error.message);
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

  const flatProps = {
    options: arrSubjects.map((option) => option.Subject),
  };

  return (
    <>
      {loadingState ? (
        <DivLoading>
          <Loading />
        </DivLoading>
      ) : (
        <>
          <Menu user={userNameState} />
          <Letterheader phrase="Contact Us" />
          <MainStyled>
            <SectionContainer>
              <ArticleContainer>
                <DivPhysicalAddress>
                  <div className="div_title">
                    <h2>Personal Contact</h2>
                  </div>
                  <div className="div_adress">
                    <address>Lorem Ipsum Street, Lorem Ipsum District, Lorem Ipsum City</address>
                    <p>+99 99 99999-9993</p>
                    <p>Lorem-E-mail@email.com</p>
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
                <FormStyled onSubmit={(e) => handleSubmit(e)}>
                  <div className="div_title">
                    <h2>Message Us</h2>
                  </div>
                  <div className="div_from">
                    <p>
                      <b>From:</b> personalemail@gmail.com/{emailState}
                    </p>
                  </div>
                  <div className="div_to">
                    <p>
                      <b>To:</b> {emailSupportState}
                    </p>
                  </div>
                  <div className="div_select_subject">
                    <Autocomplete
                      {...defaultProps}
                      id="auto-complete"
                      isOptionEqualToValue={(option, value) => option.id === value.id}
                      autoComplete
                      includeInputInList
                      renderInput={(params) => <TextField {...params} label="Subjects" variant="standard" />}
                      onChange={(event, value) => setSubjectState(value)}
                    />
                  </div>
                  <div className="div_message">
                    <label htmlFor="textarea">
                      <b>Message: </b>
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
                    <span>{messageState.length}/240 characters</span>
                  </div>
                  <div className="div_button">
                    <ButtonSendContact>{loadingButtonState ? <IconLoading /> : 'Send'}</ButtonSendContact>
                  </div>
                </FormStyled>
              </ArticleContainer>
            </SectionContainer>
          </MainStyled>
          <LetterFooter />
        </>
      )}
    </>
  );
};

export default ContactPage;
