import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DivLoading, MainStyled } from '../../primeComponents';
import { SectionContainer } from './styled';
import { toast } from 'react-toastify';
import Letterfooter from '../../components/letterFooter/letterFooter.jsx';
import Loading from '../../components/loading/Loading';
import Menu from '../../components/menu/Menu';
import getMyBorrowedBooks from '../../utils/getMyBorrowedBooks/getMyBorrowedBooks';
import Borrowedbookscard from '../../components/borrowedBooksCard/borrowedBooksCard';
import Scrolltotop from '../../components/scrollToTop/scrollToTop.jsx';
import Letterheader from '../../components/letterHeader/letterHeader.jsx';
import Lottienodata from '../../components/lottieAnimations/lottieNoData.jsx';

const MyBorrowedBooks = () => {
  const [userNameState, setUserNameState] = useState('');
  const [borrowedBooks, setBorrowedBooks] = useState();
  const [loadingState, setloadingState] = useState(true);
  const [noBookData, setNoBookData] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await getMyBorrowedBooks(navigate);

        if (response === false) {
          toast.warn('Token time expired, please re-login');
          setTimeout(() => {
            navigate('/');
          }, 3000);
        } else {
          const { userName, responseObject } = response;
          setUserNameState(userName);

          if (responseObject.length === 0) {
            setNoBookData(true);
          }

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
          <Letterheader phrase="My Borrowed Books" />
          <MainStyled>
            <SectionContainer>
              {noBookData ? (
                <Lottienodata word="Borrowings" />
              ) : (
                borrowedBooks.map((item) => {
                  return <Borrowedbookscard key={item.idlendRegister} infoDatas={item} />;
                })
              )}
            </SectionContainer>
            <Scrolltotop />
          </MainStyled>
          <Letterfooter />
        </>
      )}
    </>
  );
};

export default MyBorrowedBooks;
