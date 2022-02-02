import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { ContainerFooter, H4 } from './styled';

const Letterfooter = () => {
  const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

  return (
    <>
      <ContainerFooter $darkmode={darkMode}>
        <H4 $darkmode={darkMode}>Developed by Wilian Krinke</H4>
      </ContainerFooter>
    </>
  );
};

export default memo(Letterfooter);
