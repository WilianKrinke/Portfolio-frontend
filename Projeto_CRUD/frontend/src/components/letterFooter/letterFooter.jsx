import React, { memo } from 'react';
import { ContainerFooter } from './styled';

const Letterfooter = () => {
  return (
    <>
      <ContainerFooter>
        <h4 className="h4">Developed by Wilian Krinke</h4>
      </ContainerFooter>
    </>
  );
};

export default memo(Letterfooter);
