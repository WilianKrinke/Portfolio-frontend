import React from 'react';
import propTypes from 'prop-types';
import { H1, HeaderStyled } from './styled';
import { useSelector } from 'react-redux';

const Letterheader = ({ phrase }) => {
  const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

  return (
    <HeaderStyled $darkmode={darkMode}>
      <div className="title">
        <H1 $darkmode={darkMode}>{phrase}</H1>
      </div>
    </HeaderStyled>
  );
};

Letterheader.propTypes = {
  phrase: propTypes.string,
};

export default Letterheader;
