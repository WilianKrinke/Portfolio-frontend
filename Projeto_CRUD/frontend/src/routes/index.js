import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookList from '../pages/bookList/bookList';
import ContactPage from '../pages/contact/contactPage';
import Errorpage from '../pages/Errors/errorPage';
import ForgetPassword from '../pages/forgetPassword/forgetPassword';
import Home from '../pages/home/Home';
import MyBorrowedBooks from '../pages/myBorrowedBooks/myBorrowedBooks';
import Mydata from '../pages/myData/myData';
import Myfavorites from '../pages/myFavorites/myFavorites';
import NotFound from '../pages/notFound/NotFound';
import RedefinePass from '../pages/redefinePass/redefinePass';
import Tutorial from '../pages/tutorial/tutorial';

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
        <Route exact path='/tutorial/:sector' element={<Tutorial />} />
        <Route exact path='/forget-pass' element={<ForgetPassword />} />
        <Route exact path='/reset-pass/:token/:idUser' element={<RedefinePass />} />
        <Route exact path='/error-page/:error' element={<Errorpage/>} />
        <Route exact path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
