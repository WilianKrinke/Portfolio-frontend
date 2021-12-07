/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import baseUrl from '../../utils/baseUrl';
import Loading from '../../components/loading/Loading';
import preAuth from '../../utils/Auth/preAuth';
import Menu from '../../components/menu/Menu';
import { Context } from '../../context/authContext';
import { useNavigate } from 'react-router';
import { DivLoading, FooterStyled, HeaderStyled } from '../../primeComponents';
import { BookListMain, BookListSection, BookListArticle } from './styled';
import logout from '../../utils/Auth/logout';
import insertUserNameSession from '../../utils/insertions/insertUserNameSession';

const BookList = () => {
  const [books, setBooks] = useState(null);
  const [itensPerPage, setItensPerPage] = useState(5);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentItens, setcurrentItens] = useState([]);

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
      console.log(res.data);
      const bookData = res.data.response;
      const userName = res.data.responseObject;

      if (res.data == false) {
        logout(navigate);
      } else {
        setBooks(bookData);
        setLoading(false);
        setPages(Math.ceil(bookData.length / itensPerPage));
        setcurrentItens(bookData.slice(startIndex, endIndex));
        insertUserNameSession(userName);
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
          <Menu />
          <HeaderStyled>
            <h1>Welcome to Will&rsquo;s Library</h1>
          </HeaderStyled>
          <BookListMain>
            <BookListSection>
              <table>
                <thead>
                  <tr>
                    <th>BookName</th>
                    <th>Author</th>
                    <th></th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItens.map((item) => {
                    return (
                      <tr key={item.idBook}>
                        <td>{item.bookName}</td>
                        <td>{item.author}</td>
                        <td></td>
                        <td>{item.amount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </BookListSection>
          </BookListMain>
          <FooterStyled></FooterStyled>

          {/* 
          {currentItens.map((item) => {
                return (
                  <BookListArticle key={item.idBook}>
                    <Bookcard
                      bookName={item.bookName}
                      category={item.category}
                      author={item.author}
                      resume={item.resume}
                      amount={item.amount}
                    />
                  </BookListArticle>
                );
              })} 
        */}
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
