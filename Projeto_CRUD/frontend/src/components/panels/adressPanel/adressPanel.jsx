/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import propTypes from 'prop-types';
import { MainContainer } from '../identificationPanel/styled';

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

export default memo(Adresspanel);
