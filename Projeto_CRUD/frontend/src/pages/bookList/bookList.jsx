import React, { useContext, useEffect, useState } from 'react';
import baseUrl from '../../utils/baseUrl';
import Letterfooter from '../../components/letterFooter/letterFooter';
import Loading from '../../components/loading/Loading';
import preAuth from '../../utils/Auth/preAuth';
import Menu from '../../components/menu/Menu';
import logout from '../../utils/Auth/logout';
import Bookcard from '../../components/bookCard/bookCard.jsx';
import Ajustbooklist from '../../components/ajustBookList/ajustBookList';
import { Context } from '../../context/authContext';
import { useNavigate } from 'react-router';
import { DivLoading, FooterStyled } from '../../primeComponents';
import { BookListMain, BookListArticle, HeaderBookList, BookListSection, BookArticle } from './styled';

const BookList = () => {
  const [category, setCategory] = useState('all');
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
      const response = await baseUrl.get(`/books-list/${category}`);
      const { responseBooks, responseObject } = response.data;

      if (response.data == false) {
        logout(navigate);
      } else {
        setuserDatasMenu(responseObject);
        setPages(Math.ceil(responseBooks.length / itensPerPage));
        setcurrentItens(responseBooks.slice(startIndex, endIndex));
        setLoading(false);
        setTimeout(() => {
          setfadeIn(true);
        }, 1);
      }
    })();
  }, [itensPerPage, startIndex, endIndex, category]);

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
                  setItensPerPage={setItensPerPage}
                  setCategory={setCategory}
                />
              </BookArticle>
            </BookListSection>
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
