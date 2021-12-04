import React from 'react';
import Home from '../pages/home/Home';
import Firstpage from '../pages/firstPage/firstPage'
import NotFound from '../pages/404/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' caseSensitive={false} element={<Home />} />
        <Route exact path='/first-page' caseSensitive={false} element={<Firstpage />} />
        <Route exact path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
