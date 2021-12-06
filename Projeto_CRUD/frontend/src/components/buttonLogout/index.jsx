/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router';
import baseUrl from '../../utils/baseUrl';
import './button.css';

const ButtonLogOut = () => {
  const navigate = useNavigate();

  function handleLogout() {
    const token = sessionStorage.removeItem('token');
    baseUrl.defaults.headers.common['Authorization'] = undefined;
    navigate('/');
  }

  return (
    <>
      <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
};

export default ButtonLogOut;
