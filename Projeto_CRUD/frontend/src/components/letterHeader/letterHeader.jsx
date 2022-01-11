import React from 'react';
import propTypes from 'prop-types';
import { HeaderStyled } from './styled';

const Letterheader = ({ phrase }) => {
  return (
    <HeaderStyled>
      <h1>{phrase}</h1>
    </HeaderStyled>
  );
};

Letterheader.propTypes = {
  phrase: propTypes.string,
};

export default Letterheader;
