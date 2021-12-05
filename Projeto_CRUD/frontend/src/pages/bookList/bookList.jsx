/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import ButtonLogOut from '../../components/buttonLogout';
import baseUrl from '../../utils/baseUrl';
import { Context } from '../../context/authContext';
import { useNavigate } from 'react-router';

const BookList = () => {
  const [books, setBooks] = useState(null);
  const navigate = useNavigate();

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
        setBooks(datas);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>WELCOME TO BOOK LISTS</h1>
          <ButtonLogOut />
        </>
      )}
    </>
  );
};

export default BookList;
