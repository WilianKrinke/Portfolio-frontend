/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import ButtonLogOut from '../../components/buttonLogout';
import baseUrl from '../../utils/baseUrl';
import { Context } from '../../context/authContext';
import { useNavigate } from 'react-router';
import { DivLoading } from '../../primeComponents';
import Loading from '../../components/loading/Loading';

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
      const token = sessionStorage.getItem('token');

      baseUrl.defaults.headers.common['Authorization'] = JSON.parse(token);
      const datas = await baseUrl.get('/books-list');

      if (datas.data == false) {
        baseUrl.defaults.headers.common['Authorization'] = undefined;
        navigate('/');
      } else {
        setBooks(datas.data);
        setLoading(false);
        setPages(Math.ceil(datas.data.length / itensPerPage));
        setcurrentItens(datas.data.slice(startIndex, endIndex));
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
          <h1>WELCOME TO BOOK LISTS</h1>

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

          <ButtonLogOut />
        </>
      )}
    </>
  );
};

export default BookList;
