import React, { Fragment } from 'react';
import { HeaderStyled } from '../styleds';
import {Link, useHistory} from 'react-router-dom'
import firebase from 'firebase'

const Header = () => {
    
    let history = useHistory()    
        function logout() {
            firebase.auth().signOut().then(res => {
                history.push('/login')
            })
        }

    return (
        <Fragment>
            <HeaderStyled>
                <div className="Linkdiv">
                    <Link to='/'>Home</Link>            
                </div>

                <div className="btn">
                    <button type='button' onClick={logout}>Sair</button>
                </div>                
            </HeaderStyled>
            
        </Fragment>
    );
}

export default Header;
