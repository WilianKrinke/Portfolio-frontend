/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import propTypes from 'prop-types';
import { BorrowedBookCard, ContainerActions, ContainerResume, ContainerTitle } from './styled';

const Borrowedbookscard = ({ infoDatas }) => {
  console.log(infoDatas);

  const { image } = infoDatas;

  return (
    <BorrowedBookCard>
      <ContainerTitle>
        <div className="divimg"></div>
        <div className="divtitle"></div>
        <div className="divrating"></div>
      </ContainerTitle>
      <ContainerResume />
      <ContainerActions />
    </BorrowedBookCard>
  );
};

Borrowedbookscard.propTypes = {
  infoDatas: propTypes.object,
};

export default memo(Borrowedbookscard);
