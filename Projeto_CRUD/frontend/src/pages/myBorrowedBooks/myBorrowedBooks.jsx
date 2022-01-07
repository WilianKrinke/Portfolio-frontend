/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import Letterfooter from '../../components/letterFooter/letterFooter';
import Loading from '../../components/loading/Loading';
import Menu from '../../components/menu/Menu';
import { Context } from '../../context/authContext';
import { DivLoading, FooterStyled, HeaderStyled, MainStyled } from '../../primeComponents';
import preAuth from '../../utils/Auth/preAuth';
import baseUrl from '../../utils/baseUrl';

const MyBorrowedBooks = () => {
  const {
    states: { loading, setLoading },
  } = useContext(Context);

  useEffect(() => {
    (async () => {
      preAuth();
      const response = await baseUrl.get('/my-borrowed-book-list');
      console.log(response);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <DivLoading>
          <Loading />
        </DivLoading>
      ) : (
        <>
          <Menu />
          <HeaderStyled></HeaderStyled>
          <MainStyled></MainStyled>
          <FooterStyled>
            <Letterfooter />
          </FooterStyled>

          {/* Componente */}
        </>
      )}
    </>
  );
};

export default MyBorrowedBooks;
