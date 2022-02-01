/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Circle, DivSemiCircle } from '.';
import { toggleLoading } from '../../store/actions/actions';

const ButtonChangeMode = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

  function handleChangeMode() {
    dispatch(toggleLoading());
  }

  return (
    <DivSemiCircle onClick={handleChangeMode} darkMode={darkMode}>
      <Circle darkMode={darkMode}></Circle>
    </DivSemiCircle>
  );
};

export default memo(ButtonChangeMode);
