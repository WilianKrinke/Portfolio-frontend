/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Letterfooter from '../../components/letterFooter/letterFooter';
import Loading from '../../components/loading/Loading';
import Menu from '../../components/menu/Menu';
import { DivLoading, FooterStyled, HeaderStyled, MainStyled } from '../../primeComponents';
import preAuth from '../../utils/Auth/preAuth';
import { useSelector, useDispatch } from 'react-redux';
import getMyBorrowedBooks from '../../utils/getMyBorrowedBooks/getMyBorrowedBooks';
import { toggleLoading } from '../../store/actions/actions';

const MyBorrowedBooks = () => {
  const navigate = useNavigate();
  const loading = useSelector((state) => state.toggleLoading.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      preAuth();
      const response = await getMyBorrowedBooks(navigate);

      console.log(response);
      dispatch(toggleLoading());
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
