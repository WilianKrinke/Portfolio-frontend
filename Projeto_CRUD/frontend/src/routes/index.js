import React from 'react';
import Home from '../pages/home/Home';
import BookList from '../pages/bookList/bookList'
import NotFound from '../pages/404/NotFound'
import ForgetPassword from '../pages/forgetPassword/forgetPassword'
import RedefinePass from '../pages/redefinePass/redefinePass'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' caseSensitive={false} element={<Home />} />
        <Route exact path='/book-list' caseSensitive={false} element={<BookList />} />
        <Route exact path='/forget-pass' caseSensitive={false} element={<ForgetPassword />} />
        <Route exact path='/redefine-pass' caseSensitive={false} element={<RedefinePass />} />
        <Route exact path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
