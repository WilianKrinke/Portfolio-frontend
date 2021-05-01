import React, { Component, Fragment } from 'react';
import {withRouter, Link} from 'react-router-dom'
import Header from '../header2'
import {Formstyled} from '../styleds/styleds'
import firebase from '../../firebase/firebase'
import Footer from '../footer'

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.login = this.login.bind(this)
        this.entrar = this.entrar.bind(this)
    }

    componentDidMount(){
        //Verificar se há usuario logado
        if (firebase.getCurrent()) {
            return this.props.history.replace('/dashboard')
        }  
    }

    login(e){
        e.preventDefault();
        this.entrar()
    }

    async entrar () {
        const {email, password} = this.state;

        try {
            await firebase.login(email, password)
                .catch((error) => {
                    if (error.code === 'auth/user-not-found') {
                        alert('Este Usuario Não Existe')
                    } else {
                        alert(`Código de Erro: ${error.code}`)
                        return null
                    }
                });
                
                this.props.history.replace('/dashboard')
        } catch (error) {
            alert(error.message)
        }
    }


    render() {
        return (
            <Fragment>
                <Header />
                <Formstyled>
                    <Link to='/artigos'>Artigos</Link> 
                    <form className="form" onSubmit={this.login}>
                        <div className="">
                            <label>Usuário:</label>
                            <input type="email" autoComplete="off" autoFocus value={this.state.email}
                                    onChange={(e) => this.setState({email: e.target.value})} placeholder=""/>
                            <br />
                            <label>Senha:</label>
                            <input type="password" autoComplete="off" value={this.state.password}
                                    onChange={(e) => this.setState({password: e.target.value})} placeholder=""/>
                            <br />
                            <div className="entrarcad">
                                <button type="submit" className="btn">SignIn</button>
                                <br/>
                            </div>
                        </div>
                        <div className="avisos">
                            <span>
                                <div>
                                    <p>
                                        Usuario: will@teste.com
                                    </p>
                                    <p>
                                        Senha: 123456
                                    </p>
                                </div>
                                <p>
                                    Lembrando que este é um e-mail fake, apenas para fins amostrativos.
                                    Pode-se fazer um sistema de cadastro de novos posts com um sistema independente deste.
                                </p>
                            </span>
                        </div>
                    </form>                    
                </Formstyled>
                <Footer />
            </Fragment>
        );
    }
}

export default withRouter(Login);
