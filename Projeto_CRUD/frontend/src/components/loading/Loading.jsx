/* eslint-disable no-unused-vars */
import React from 'react';
import ReactLoading from 'react-loading';
import { useSelector } from 'react-redux';
import { DivLoading } from './DivLoading';

const Loading = () => {
  const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);
  return (
    <>
      <DivLoading>
        <ReactLoading type={'bars'} color={'rgba(0, 0, 0, 0.31)'} height={175} width={175} align="center" />
      </DivLoading>
    </>
  );
};

export default Loading;
