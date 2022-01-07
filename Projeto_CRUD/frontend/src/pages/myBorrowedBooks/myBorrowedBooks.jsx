/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Letterfooter from '../../components/letterFooter/letterFooter';
import Loading from '../../components/loading/Loading';
import Menu from '../../components/menu/Menu';
import { Context } from '../../context/authContext';
import { DivLoading, FooterStyled, HeaderStyled, MainStyled } from '../../primeComponents';

const MyBorrowedBooks = () => {
  const {
    states: { loading, setLoading },
  } = useContext(Context);

  return (
    <>
      {loading ? (
        <DivLoading>
          <Loading />
        </DivLoading>
      ) : (
        <>
          <HeaderStyled></HeaderStyled>
          <MainStyled></MainStyled>
          <FooterStyled>
            <Letterfooter />
          </FooterStyled>

          <Menu />
          {/* Componente */}
        </>
      )}
    </>
  );
};

export default MyBorrowedBooks;
