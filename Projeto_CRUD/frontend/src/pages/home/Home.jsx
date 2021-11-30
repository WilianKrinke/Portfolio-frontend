/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Form from '../../components/form';
import { HeaderStyled } from '../../primeComponents';
import { HomeMain, InfoCard, SectForm, Article1, Article2, HomeFooter, ContainerName } from './styled';

const Home = () => {
  const [selection, setSelection] = useState(true);

  return (
    <>
      <HeaderStyled>
        <h1>Login</h1>
      </HeaderStyled>
      <HomeMain>
        <InfoCard onhover={selection}>
          <Article1 className="container_info">
            <p>Create.</p>
            <p>Read.</p>
            <p>UpDate.</p>
            <p>Delete.</p>
          </Article1>
        </InfoCard>

        <SectForm onMouseEnter={() => setSelection(false)} onMouseLeave={() => setSelection(true)}>
          <Article2>
            <Form />
          </Article2>
        </SectForm>
      </HomeMain>
      <HomeFooter>
        <ContainerName>
          <div>
            <h4>Desenvolvido por Wilian Krinke</h4>
          </div>
        </ContainerName>
      </HomeFooter>
    </>
  );
};

export default Home;
