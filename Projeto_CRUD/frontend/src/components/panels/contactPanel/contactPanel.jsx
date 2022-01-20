/* eslint-disable no-unused-vars */
import React from 'react';
import propTypes from 'prop-types';
import { MainContainer } from '../panels/identificationPanel/styled';

const Contactpanel = ({ objectUserContact }) => {
  return (
    <>
      <MainContainer>
        <h1>Contact Panel</h1>
      </MainContainer>
    </>
  );
};

Contactpanel.propTypes = {
  objectUserContact: propTypes.object,
};

export default Contactpanel;
