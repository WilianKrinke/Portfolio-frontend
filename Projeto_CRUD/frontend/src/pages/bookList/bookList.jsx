/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import baseUrl from '../../utils/baseUrl';
import Letterfooter from '../../components/letterFooter/letterFooter';
import Loading from '../../components/loading/Loading';
import preAuth from '../../utils/Auth/preAuth';
import Menu from '../../components/menu/Menu';
import logout from '../../utils/Auth/logout';
import Bookcard from '../../components/bookCard/bookCard.jsx';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Context } from '../../context/authContext';
import { useNavigate } from 'react-router';
import { DivLoading } from '../../primeComponents';
import {
  BookListMain,
  BookListArticle,
  AjustBookList,
  HeaderBookList,
  BookListSection,
  BookArticle,
  IconForward,
  IconBack,
  InfoPagination,
  BookListFooter,
  DivChangePage,
  DivSelectQnt,
  DivSelectCategory,
} from './styled';
import Ajustbooklist from '../../components/ajustBookList/ajustBookList';

const BookList = () => {
  const [books, setBooks] = useState(null);
  const [itensPerPage, setItensPerPage] = useState(5);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentItens, setcurrentItens] = useState([]);
  const [userDatasMenu, setuserDatasMenu] = useState();
  const [fadeIn, setfadeIn] = useState(false);

  const navigate = useNavigate();
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;

  const {
    states: { loading, setLoading },
  } = useContext(Context);

  useEffect(() => {
    (async () => {
      preAuth();
      const response = await baseUrl.get('/books-list');
      const { responseBooks, responseObject } = response.data;

      console.log(responseBooks);

      if (response.data == false) {
        logout(navigate);
      } else {
        setuserDatasMenu(responseObject);
        setBooks(responseBooks);
        setPages(Math.ceil(responseBooks.length / itensPerPage));
        setcurrentItens(responseBooks.slice(startIndex, endIndex));
        setLoading(false);
        setTimeout(() => {
          setfadeIn(true);
        }, 1);
      }
    })();
  }, [itensPerPage, startIndex, endIndex]);

  function accCurrentPage() {
    setCurrentPage(currentPage + 1);
    if (currentPage >= 4) {
      setCurrentPage(0);
    }
  }

  function decCurrentPage() {
    setCurrentPage(currentPage - 1);
    if (currentPage <= 0) {
      setCurrentPage(4);
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
          <Menu user={userDatasMenu} />
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
                        user={userDatasMenu}
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
                />
              </BookArticle>
            </BookListSection>
          </BookListMain>

          <BookListFooter>
            <Letterfooter />
          </BookListFooter>
        </>
      )}
    </>
  );
};

export default BookList;
