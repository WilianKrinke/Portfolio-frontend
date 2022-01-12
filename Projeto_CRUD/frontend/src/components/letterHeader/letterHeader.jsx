import React from 'react';
import propTypes from 'prop-types';
import { HeaderStyled } from './styled';

const Letterheader = ({ phrase }) => {
  return (
    <HeaderStyled>
      <div className="title">
        <h1>{phrase}</h1>
      </div>
    </HeaderStyled>
  );
};

Letterheader.propTypes = {
  phrase: propTypes.string,
};

export default Letterheader;
