/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
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
  const [userNameState, setUserNameState] = useState('');

  const navigate = useNavigate();
  const loading = useSelector((state) => state.toggleLoading.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        preAuth();
        const response = await getMyBorrowedBooks(navigate);

        if (response === false) {
          navigate('/');
        } else {
          const { userName, responseObject } = response;

          setUserNameState(userName);
          dispatch(toggleLoading());
        }
      } catch (error) {
        console.log(error);
        //Para página de erro
      }
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
          <Menu user={userNameState} />
          <HeaderStyled>
            <h1>My Borrowed Books</h1>
          </HeaderStyled>
          <MainStyled>
            {/* Verificar se livro está dentro do prazo de devolução, caso sim, borda normal, caso não borda vermelha, ou algo que sinalize, botão para devolução e retirada de card de item emprestado do front,  */}
          </MainStyled>
          <FooterStyled>
            <Letterfooter />
          </FooterStyled>
        </>
      )}
    </>
  );
};

export default MyBorrowedBooks;
