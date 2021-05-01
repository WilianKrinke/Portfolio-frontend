import {Switch, Route, BrowserRouter} from 'react-router-dom'
import React, { Fragment } from 'react'

import Home from './pages/home'
import Repositorio from './pages/repositorio'

const routes = () => {
    return (        
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/repositorio/:repositorio" component={Repositorio}/> 
                </Switch>
            </BrowserRouter>                
        </Fragment>
    );
}

export default routes;
