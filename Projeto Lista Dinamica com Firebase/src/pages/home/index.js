import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
import {MainStyled} from '../styleds'

const Home = () => {
    return (
        <Fragment>
            <MainStyled>
                <h1><Link to='/login'>Crie uma lista de tarefas no firebase</Link></h1>
            </MainStyled>
        </Fragment>
    );
}

export default Home;
