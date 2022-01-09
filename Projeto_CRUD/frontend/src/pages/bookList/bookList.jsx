import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { DivLoading, FooterStyled } from '../../primeComponents';
import { BookListMain, BookListArticle, HeaderBookList, BookListSection, BookArticle } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLoading } from '../../store/actions/actions';
import Letterfooter from '../../components/letterFooter/letterFooter';
import Loading from '../../components/loading/Loading';
import preAuth from '../../utils/Auth/preAuth';
import Menu from '../../components/menu/Menu';
import Bookcard from '../../components/bookCard/bookCard.jsx';
import Ajustbooklist from '../../components/ajustBookList/ajustBookList';
import Scrolltotop from '../../components/scrollToTop/scrollToTop.jsx';
import getBookList from '../../utils/getBookList/getBookList';

const BookList = () => {
  const [category, setCategory] = useState('all');
  const [itensPerPage, setItensPerPage] = useState(5);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentItens, setcurrentItens] = useState([]);
  const [userIdData, setUserIdData] = useState(null);
  const [userName, setUserName] = useState('');
  const [fadeIn, setfadeIn] = useState(false);

  const navigate = useNavigate();
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;

  const loading = useSelector((state) => state.toggleLoading.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        preAuth();
        const response = await getBookList(category);

        const { responseBooks, userName, idUser } = response;

        if (response === false) {
          navigate('/');
        } else {
          setUserName(userName);
          setUserIdData(idUser);
          setPages(Math.ceil(responseBooks.length / itensPerPage));
          setcurrentItens(responseBooks.slice(startIndex, endIndex));
          dispatch(toggleLoading());
          setTimeout(() => {
            setfadeIn(true);
          }, 1);
        }
      } catch (error) {
        console.log(error);
        //Para página de erro
      }
    })();
  }, [itensPerPage, startIndex, endIndex, category]);

  function accCurrentPage() {
    setCurrentPage(currentPage + 1);

    if (currentPage >= pages - 1) {
      setCurrentPage(0);
    }
  }

  function decCurrentPage() {
    setCurrentPage(currentPage - 1);

    if (currentPage <= 0) {
      setCurrentPage(pages - 1);
    }
  }

  return (
    <>
      {loading ? (
        <DivLoading>
          <Loading />
        </DivLoading>
      ) : (
        <>
          <Menu user={userName} />
          <HeaderBookList>
            <h1>Book List</h1>
          </HeaderBookList>
          <BookListMain>
            <BookListSection>
              <BookArticle fadeIn={fadeIn}>
                <Ajustbooklist
                  decCurrentPage={decCurrentPage}
                  currentPage={currentPage}
                  pages={pages}
                  accCurrentPage={accCurrentPage}
                  setItensPerPage={setItensPerPage}
                  setCategory={setCategory}
                />
                <BookListArticle>
                  {currentItens.map((item) => {
                    return (
                      <Bookcard
                        key={item.idBook}
                        idBook={item.idBook}
                        bookName={item.bookName}
                        category={item.category}
                        author={item.author}
                        resume={item.resume}
                        amount={item.amount}
                        image={item.image}
                        available={item.available}
                        userName={userName}
                        userId={userIdData}
                        borrowedByUser={item.isBorrowedByUser}
                        favoriteByUser={item.isFavoriteByUser}
                        rating={item.rating}
                      />
                    );
                  })}
                </BookListArticle>
                <Ajustbooklist
                  decCurrentPage={decCurrentPage}
                  currentPage={currentPage}
                  pages={pages}
                  accCurrentPage={accCurrentPage}
                  setItensPerPage={setItensPerPage}
                  setCategory={setCategory}
                />
              </BookArticle>
            </BookListSection>
            <Scrolltotop />
          </BookListMain>
          <FooterStyled>
            <Letterfooter />
          </FooterStyled>
        </>
      )}
    </>
  );
};

export default BookList;
