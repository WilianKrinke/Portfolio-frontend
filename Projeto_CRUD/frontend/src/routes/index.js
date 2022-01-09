import React from 'react';
import Home from '../pages/home/Home';
import BookList from '../pages/bookList/bookList'
import NotFound from '../pages/404/NotFound'
import ForgetPassword from '../pages/forgetPassword/forgetPassword'
import RedefinePass from '../pages/redefinePass/redefinePass'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyBorrowedBooks from '../pages/myBorrowedBooks/myBorrowedBooks';

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
            <Route path=":message" element={<Home />} />
            <Route path="" element={<Home />} />
        </Route>
        <Route exact path='/book-list' element={<BookList />} />
        <Route excat path='/my-borrowed-books' element={<MyBorrowedBooks />} />
        <Route exact path='/forget-pass' element={<ForgetPassword />} />
        <Route exact path='/reset-pass/:token/:idUser' element={<RedefinePass />} />
        <Route exact path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
