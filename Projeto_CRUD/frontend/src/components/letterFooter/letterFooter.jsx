import React, { memo } from 'react';
import { ContainerName } from './styled';

const Letterfooter = () => {
  return (
    <>
      <ContainerName>
        <h4>Developed by Wilian Krinke</h4>
      </ContainerName>
    </>
  );
};

export default memo(Letterfooter);
