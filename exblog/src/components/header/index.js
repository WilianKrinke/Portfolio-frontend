import React, { Component, Fragment } from 'react';
//importando estilo criado em styleds
import {Headerstyled} from '../styleds/styleds'
import { Link } from 'react-router-dom';
import firebase from 'firebase'

class index extends Component{

    constructor(props){
        super(props);
        this.state = {
            user : null
        }

        this.auth = this.auth.bind(this)
        this.sair = this.sair.bind(this)

    }

    auth(){
        //usando metodo criado em firebase.js
        //verificando se há usuario logado para renderização condicional
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({user: user})
            }
        })
    }

    sair(){
        //Metodo para deslogar da autenticação do firebase
        firebase.auth().signOut()
            .then(() => {
                this.setState({user: null})
            })
    }

    componentDidMount(){
        //aplicando verificação para renderização condicional
        this.auth()
    }

    render(){
        return(
            <Fragment>
                {/* SE true exiba um header com a opção de deslogar */}
                {this.state.user ? 
                    <Headerstyled>
                        <Link className="blogdeculinaria" to="/">Blog de Culinária</Link>
                        <Link className="login" to="/" onClick={this.sair}>Sair</Link>
                    </Headerstyled> 
                    :
                // SE false exiba um header com a opção de login;
                    <Headerstyled>
                        <Link className="blogdeculinaria" to="/">Blog de Culinária</Link>
                        <Link className="login" to="/login">Login</Link>
                    </Headerstyled>   
                }                
            </Fragment>
        )
    }
}

export default index;
