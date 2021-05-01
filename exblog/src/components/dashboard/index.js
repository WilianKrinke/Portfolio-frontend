import React, { Component, Fragment } from 'react';
import {Headerstyled, HomeStyled} from '../styleds/styleds'
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../firebase/firebase'
import Footer from  '../footer'

class index extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.sair = this.sair.bind(this)
    }

    async componentDidMount(){
        if (!firebase.getCurrent()) {
            await this.props.history.replace('/login')
            return null
        }
    }

    async sair(){
        await firebase.logout().catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <Fragment>
                    <Headerstyled>
                        <Link className="blogdeculinaria" to="/">Blog de Culinária</Link>
                        <Link className="login" to="/" onClick={this.sair}>Sair</Link>
                    </Headerstyled>                
                        <HomeStyled>
                            <Link to='/artigos'>Artigos</Link>
                            <div className='containeradm'>
                                <h1>
                                    <div>
                                    <i class="fas fa-hand-point-right"></i><Link to="/dashboard/newpost">
                                            Criar Novo Post
                                        </Link>
                                    </div>
                                </h1>
                            </div>
                        </HomeStyled>
                    <Footer />
            </Fragment>  
        );
    }
}

export default withRouter(index);
