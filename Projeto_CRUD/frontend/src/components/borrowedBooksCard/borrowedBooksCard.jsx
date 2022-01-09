import React from 'react';
import propTypes from 'prop-types';
import { BorrowedBookCard } from './styled';

const Borrowedbookscard = ({ infoDatas }) => {
  console.log(infoDatas);

  return <BorrowedBookCard></BorrowedBookCard>;
};

Borrowedbookscard.propTypes = {
  infoDatas: propTypes.object,
};

export default Borrowedbookscard;
