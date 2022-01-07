/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Letterfooter from '../../components/letterFooter/letterFooter';
import Loading from '../../components/loading/Loading';
import Menu from '../../components/menu/Menu';
import { Context } from '../../context/authContext';
import { DivLoading, FooterStyled, HeaderStyled, MainStyled } from '../../primeComponents';
import preAuth from '../../utils/Auth/preAuth';
import getMyBorrowedBooks from '../../utils/getMyBorrowedBooks/getMyBorrowedBooks';

const MyBorrowedBooks = () => {
  const {
    states: { loading, setLoading },
  } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      preAuth();
      const response = await getMyBorrowedBooks(navigate);

      console.log('Useeffect');
      setLoading(false);
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
