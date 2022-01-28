import React from 'react';
import Home from '../pages/home/Home';
import BookList from '../pages/bookList/bookList'
import NotFound from '../pages/404/NotFound'
import ForgetPassword from '../pages/forgetPassword/forgetPassword'
import RedefinePass from '../pages/redefinePass/redefinePass'
import MyBorrowedBooks from '../pages/myBorrowedBooks/myBorrowedBooks';
import Myfavorites from '../pages/myFavorites/myFavorites';
import Mydata from '../pages/myData/myData';
import ContactPage from '../pages/contact/contactPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />            
        <Route exact path='/book-list' element={<BookList />} />
        <Route exact path='/my-borrowed-books' element={<MyBorrowedBooks />} />
        <Route exact path='/my-favorites' element={<Myfavorites />}/>
        <Route exact path='/my-data' element={<Mydata />} />
        <Route exact path='/contact' element={<ContactPage />} />
        <Route exact path='/forget-pass' element={<ForgetPassword />} />
        <Route exact path='/reset-pass/:token/:idUser' element={<RedefinePass />} />
        <Route exact path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
