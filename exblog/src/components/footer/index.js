import React, { Component, Fragment } from 'react';
import {FooterStyled} from '../styleds/styleds'
import {Link} from 'react-router-dom'
import firebase from 'firebase'

class Footer extends Component{

    constructor(props){
        super(props);
        this.state = {
            user : null
        }

        this.auth = this.auth.bind(this)
    }

    auth(){
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({user: user})
            }
        })
    }

    componentDidMount(){
        this.auth()
    }

    render(){
        return(
            <Fragment>
                {/* Mesmo processo de verificação de usuario logado do Header, só que aplicado ao Footer, para renderização do componentes com ou sem link para o painel do administrador em qualquer pagina, pois não coloquei o footer no routes */}
                {this.state.user ? 
                    <FooterStyled>
                        <p>Desenvolvido por Wilian Krinke</p>
                        <Link className="paineladm" to='/dashboard' >Painel do Administrador</Link>
                    </FooterStyled>

                :
                    <FooterStyled>
                        <p>Desenvolvido por Wilian Krinke</p>
                    </FooterStyled>
                }
            </Fragment>
        )
    }


}

export default Footer;




