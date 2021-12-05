/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Context } from '../../context/authContext';
import baseUrl from '../../utils/baseUrl';
import './button.css';

const ButtonLogOut = () => {
  const {
    states: { setAutheticated },
  } = useContext(Context);

  const navigate = useNavigate();

  function handleLogout() {
    const token = sessionStorage.removeItem('token');
    baseUrl.defaults.headers.common['Authorization'] = undefined;
    setAutheticated(false);
    navigate('/');
  }

  return (
    <>
      <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
};

export default ButtonLogOut;
