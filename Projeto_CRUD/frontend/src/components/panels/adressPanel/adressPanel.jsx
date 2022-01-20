/* eslint-disable no-unused-vars */
import React from 'react';
import propTypes from 'prop-types';
import { MainContainer } from '../panels/identificationPanel/styled';

const Adresspanel = ({ objectUserAdress }) => {
  return (
    <>
      <MainContainer>
        <h1>Adress Panel</h1>
      </MainContainer>
    </>
  );
};

Adresspanel.propTypes = {
  objectUserAdress: propTypes.object,
};

export default Adresspanel;
