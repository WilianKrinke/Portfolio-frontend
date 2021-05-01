import React, { Fragment } from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import List from './pages/list'
import Header from './components/header'
import Footer from './components/footer'

const routes = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Header />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/criarlista' component={List}/>
                        <Route path='*' component={Home} />
                    </Switch>
                <Footer />            
            </BrowserRouter>            
        </Fragment>
    );
}

export default routes;
