/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { HeaderStyled, FooterStyled } from '../../primeComponents';
import { HomeMain, InfoCard, SectForm, Article1 } from './styled';

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
          <article className="container_form"></article>
        </SectForm>
      </HomeMain>
      <FooterStyled></FooterStyled>
    </>
  );
};

export default Home;
