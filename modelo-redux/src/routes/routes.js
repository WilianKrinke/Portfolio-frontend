import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../pages/home/Home"
import Page2 from '../pages/page2/Page2';

const Index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' Component={Home}/>
                <Route exact path='/page2' Component={Page2}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Index;
