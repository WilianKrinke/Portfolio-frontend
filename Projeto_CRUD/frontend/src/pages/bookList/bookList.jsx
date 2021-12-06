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

      console.log(datas);
      if (datas.data == false) {
        navigate('/');
      } else {
        setBooks(datas.data);
        setLoading(false);
        setPages(Math.ceil(datas.data.length / itensPerPage));
        setcurrentItens(datas.data.slice(startIndex, endIndex));
      }
    })();
  }, [itensPerPage, startIndex, endIndex]);

  return (
    <>
      {loading ? (
        <DivLoading>
          <Loading />
        </DivLoading>
      ) : (
        <>
          <h1>WELCOME TO BOOK LISTS</h1>

          <div>
            <select value={itensPerPage} onChange={(e) => setItensPerPage(e.target.value)}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">20</option>
            </select>
          </div>

          <div>
            {Array.from(Array(pages), (item, index) => {
              return (
                <button key={index} value={index} onClick={(e) => setCurrentPage(e.target.value)}>
                  {index + 1}
                </button>
              );
            })}
          </div>

          {currentItens.map((item) => {
            return (
              <div key={item.idBook}>
                <h3>{item.bookName}</h3>
              </div>
            );
          })}
          <ButtonLogOut />
        </>
      )}
    </>
  );
};

export default BookList;
