import React from 'react';
import {HeaderStyled, AsideStyled} from './styled'
import Colunas from '../assets/Colunas-Corintia-Alpha.png'


const Header = () => {
    return (
        <div>
            <HeaderStyled>
                <AsideStyled>
                    <img className="colunaesquerda" src={Colunas} alt='Coluna Jonica'></img>
                </AsideStyled>
                    <h1>WKV</h1>
                <AsideStyled>
                    <img className="colunadireita" src={Colunas} alt='Coluna Jonica'></img>
                </AsideStyled>            
            </HeaderStyled>
        </div>
    );
}

export default Header;
