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
import Borrowedbookscard from '../../components/borrowedBooksCard/borrowedBooksCard';
import { SectionContainer } from './styled';
import { toast } from 'react-toastify';

const MyBorrowedBooks = () => {
  const [userNameState, setUserNameState] = useState('');
  const [borrowedBooks, setBorrowedBooks] = useState();
  const [loadingState, setloadingState] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        preAuth();
        const response = await getMyBorrowedBooks(navigate);

        if (response === false) {
          toast.warn('Token time expired, please re-login');
          setTimeout(() => {
            navigate('/');
          }, 3000);
        } else {
          const { userName, responseObject } = response;

          console.log(responseObject);

          setUserNameState(userName);
          setBorrowedBooks(responseObject);
          setloadingState(false);
        }
      } catch (error) {
        console.log(error);
        //Para página de erro
      }
    })();
  }, []);

  return (
    <>
      {loadingState ? (
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
            <SectionContainer>
              {borrowedBooks.map((item) => {
                return <Borrowedbookscard key={item.idlendRegister} infoDatas={item} />;
              })}
            </SectionContainer>
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
