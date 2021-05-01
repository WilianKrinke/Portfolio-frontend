import React, { Component, Fragment } from 'react';
import {HomeStyled} from '../styleds/styleds'
import ImagemCulinaria1 from '../styleds/assets/imagem3.png'
import Header from '../header'
import Footer from '../footer'
import {Link} from 'react-router-dom'

class index extends Component {
    
    render() {    
        return (            
            <Fragment>
                <Header/>
                    <HomeStyled>
                        <Link to='/artigos'>Artigos</Link>
                        <div className='imgcontainer'>
                            {/* Para resolver a questão das imagens, eu importei a imagem de assets através de Componentização, Funcionou */}
                        <img src={ImagemCulinaria1} alt='Imagem de Culinaria'></img>
                        </div>                    
                    </HomeStyled>
                <Footer />
            </Fragment>
        );
    }
}

export default index;
