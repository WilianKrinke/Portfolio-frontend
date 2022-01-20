/* eslint-disable no-unused-vars */
import React from 'react';
import propTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MainContainer } from './styled';

const Identificationpanel = ({ objectUserIdentification }) => {
  console.log(objectUserIdentification);
  return (
    <>
      <MainContainer>
        <h1>Identification Panel</h1>
      </MainContainer>
    </>
  );
};

Identificationpanel.propTypes = {
  objectUserIdentification: propTypes.object,
};

export default Identificationpanel;
