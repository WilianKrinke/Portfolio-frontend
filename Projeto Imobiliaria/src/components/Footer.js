import React from 'react';
import {FooterStyled} from './styled'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <FooterStyled>
                <div className="socialcont">
                    <a href="/"><i className="fab fa-instagram"></i></a>
                    <a href="/"><i class="fab fa-facebook-f"></i></a>
                    <a href="/"><i class="fab fa-twitter"></i></a>
                    <a href="/"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <div className="contactcont">
                    <Link to="/contato">Contato</Link>                
                </div>
            </FooterStyled>
        </div>
    );
}

export default Footer;
