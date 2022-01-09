/* eslint-disable no-unused-vars */
import React from 'react';
import propTypes from 'prop-types';
import { BorrowedBookCard, ContainerActions, ContainerResume, ContainerTitle } from './styled';

const Borrowedbookscard = ({ infoDatas }) => {
  console.log(infoDatas);

  return (
    <BorrowedBookCard>
      <ContainerTitle />
      <ContainerResume />
      <ContainerActions />
    </BorrowedBookCard>
  );
};

Borrowedbookscard.propTypes = {
  infoDatas: propTypes.object,
};

export default Borrowedbookscard;
