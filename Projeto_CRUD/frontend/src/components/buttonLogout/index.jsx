import axios from 'axios';
import React, { useEffect } from 'react';
import './button.css';
import baseUrl from '../../utils/baseUrl';

const ButtonLogOut = () => {
  useEffect(() => {
    (async () => {
      const { data } = await baseUrl.get('/');
    })();
  }, []);

  function handleLogout() {
    alert('Logout');
  }

  return (
    <>
      <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
};

export default ButtonLogOut;
