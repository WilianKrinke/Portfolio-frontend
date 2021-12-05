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
    states: { authenticated, loading },
  } = useContext(Context);

  useEffect(() => {
    // (async () => {
    //   const datas = await baseUrl.get('/books-list');
    //   console.log(datas);
    // })();
    console.log(authenticated);

    if (!authenticated) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <h1>WELCOME TO BOOK LISTS</h1>
      <ButtonLogOut />
    </>
  );
};

export default BookList;
