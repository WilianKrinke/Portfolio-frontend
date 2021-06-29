import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Apartamentos from './pages/apartamentos/index'
import Sobrados from './pages/sobrados'
import Casas from './pages/casas'
import Terrenos from './pages/terrenos'
import Chacaras from './pages/chacaras'
import Contato from './pages/contato'
import Subaptos from './pages/subpages/subapto'

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/apartamentos' component={Apartamentos} />
                    <Route exact path='/apartamentos/:id' component={Subaptos} />
                    <Route exact path='/sobrados' component={Sobrados} />
                    <Route exact path='/casas' component={Casas} />
                    <Route exact path='/terrenos' component={Terrenos} />
                    <Route exact path='/chacara' component={Chacaras} />
                    <Route exact path='/contato' component={Contato} />                    
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Routes;
