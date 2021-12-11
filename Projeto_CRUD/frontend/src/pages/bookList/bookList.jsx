/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import baseUrl from '../../utils/baseUrl';
import Loading from '../../components/loading/Loading';
import preAuth from '../../utils/Auth/preAuth';
import Menu from '../../components/menu/Menu';
import logout from '../../utils/Auth/logout';
import Bookcard from '../../components/bookCard/bookCard';
import { Context } from '../../context/authContext';
import { useNavigate } from 'react-router';
import { DivLoading, FooterStyled } from '../../primeComponents';
import { BookListMain, BookListArticle, AjustBookList, HeaderBookList, BookListSection, BookArticle } from './styled';

const BookList = () => {
  const [books, setBooks] = useState(null);
  const [itensPerPage, setItensPerPage] = useState(5);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentItens, setcurrentItens] = useState([]);
  const [userDatasMenu, setuserDatasMenu] = useState();

  const navigate = useNavigate();

  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;

  const {
    states: { loading, setLoading },
  } = useContext(Context);

  useEffect(() => {
    (async () => {
      preAuth();
      const res = await baseUrl.get('/books-list');

      const bookData = res.data.response;
      const userDatas = res.data.responseObject;

      if (res.data == false) {
        logout(navigate);
      } else {
        setuserDatasMenu(userDatas);
        setBooks(bookData);
        setPages(Math.ceil(bookData.length / itensPerPage));
        setcurrentItens(bookData.slice(startIndex, endIndex));
        setLoading(false);
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
            <h1>Welcome to Will&rsquo;s Library</h1>
          </HeaderBookList>
          <BookListMain>
            <BookListSection>
              <BookArticle>
                <AjustBookList></AjustBookList>
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
                      />
                    );
                  })}
                </BookListArticle>
                <AjustBookList></AjustBookList>
              </BookArticle>
            </BookListSection>
          </BookListMain>
          <FooterStyled></FooterStyled>

          {/* 

          {currentItens.map((item) => {
            return (
              <div key={item.idBook}>
                <h3>{item.bookName}</h3>
              </div>
            );
          })}

          <button onClick={() => decCurrentPage()}>Anterior</button>
          <h2>{currentPage + 1}</h2>
          <button onClick={() => accCurrentPage()}>Proximo</button>
            */}
        </>
      )}
    </>
  );
};

export default BookList;
