import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DivLoading } from '../../components/loading/DivLoading';
import { BorrowMain, SectionContainer } from './styled';
import Letterfooter from '../../components/letterFooter/letterFooter.jsx';
import Loading from '../../components/loading/Loading';
import Menu from '../../components/menu/Menu';
import getMyBorrowedBooks from '../../utils/getMyBorrowedBooks/getMyBorrowedBooks';
import Borrowedbookscard from '../../components/borrowedBooksCard/borrowedBooksCard';
import Scrolltotop from '../../components/scrollToTop/scrollToTop.jsx';
import Letterheader from '../../components/letterHeader/letterHeader.jsx';
import Lottienodata from '../../components/lottieAnimations/lottieNoData.jsx';
import tokenTimeOut from '../../utils/tokenTimeOut/tokenTimeOut';

const MyBorrowedBooks = () => {
  const [userNameState, setUserNameState] = useState('');
  const [borrowedBooks, setBorrowedBooks] = useState();
  const [loadingState, setloadingState] = useState(true);
  const [noBookData, setNoBookData] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await getMyBorrowedBooks();

        if (response === false) {
          tokenTimeOut(navigate);
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
        navigate(`/error-page/${error.message}`);
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
          <BorrowMain>
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
          </BorrowMain>
          <Letterfooter />
        </>
      )}
    </>
  );
};

export default MyBorrowedBooks;
