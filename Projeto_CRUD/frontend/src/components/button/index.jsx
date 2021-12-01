import React from 'react';
import propTypes from 'prop-types';
import './button.css';

const Button = ({ label }) => {
  return (
    <>
      <button>{label}</button>
    </>
  );
};

Button.propTypes = {
  label: propTypes.string.isRequired,
};

export default Button;
