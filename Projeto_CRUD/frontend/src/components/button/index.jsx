import React from 'react';
import propTypes from 'prop-types';
import './button.css';

const Button = ({ type, label }) => {
  return (
    <>
      <button type={type}>{label}</button>
    </>
  );
};

Button.propTypes = {
  type: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
};

export default Button;
