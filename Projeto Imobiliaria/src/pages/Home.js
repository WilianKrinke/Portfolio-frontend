import React, {useState, useEffect}from 'react';
import {Link} from 'react-router-dom'
import Header from '../components/Header';
import Footer from '../components/Footer';
import {HomeStyled, DivMenu, VideoStyled} from '../pages/styled';
import Video from '../assets/videonyok2.mp4'

const Home = () => {    
    const [isOpen, setisOpen] = useState(false);

    useEffect(() => {
        setisOpen(false)
    }, []);

    function abrirMenu() {
        setisOpen(true)
        console.log(isOpen, 'abriu')
    }

    function fecharMenu() {
        setisOpen(false)
        console.log(isOpen, 'fechou')
    }

    return (
        <div>
            <Header />
                <HomeStyled>
                    <nav>
                        <div className="containerimob">
                            <h3 onMouseOver={abrirMenu} onMouseLeave={fecharMenu}>
                                Imobiliaria
                            </h3>
                        </div>
                        <DivMenu open={isOpen} onMouseOver={abrirMenu} onMouseLeave={fecharMenu}>
                            <ul>
                                <li><Link to='/apartamentos'>Apartamentos</Link></li>
                                <li><Link to='/sobrados'>Sobrados</Link></li>
                                <li><Link to='/casas'>Casas</Link></li>
                                <li><Link to='/terrenos'>Terrenos</Link></li>
                                <li><Link to='/chacaras'>Chácaras/Fazendas</Link></li>
                            </ul>
                        </DivMenu>
                        <div className="containervideo">
                            <VideoStyled autoPlay={true} loop={true} controls>
                                <source src={Video} type="video/mp4"></source>
                            </VideoStyled> 
                        </div>
                    </nav>
                </HomeStyled>
            <Footer />
        </div>
    );
}

export default Home;
