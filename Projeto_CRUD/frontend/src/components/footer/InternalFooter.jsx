import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import {
    ContainerFooter,
    DivMap,
    DivSocialMidia,
    DivTerm,
    H4,
    IconGithub,
    IconGmail,
    IconInstagram,
    IconLinkedin,
    LinkStyled,
    P,
} from './styled';

const InternalFooter = () => {
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    return (
        <>
            <ContainerFooter $darkmode={darkMode}>
                <div className="div_space"></div>
                <div className="map_footer">
                    <DivMap $darkmode={darkMode}>
                        <P $darkmode={darkMode}>Site map:</P>
                        <LinkStyled to="/book-list" $darkmode={darkMode}>
                            -Book List
                        </LinkStyled>
                        <LinkStyled to="/my-borrowed-books" $darkmode={darkMode}>
                            -My Borrowed Books
                        </LinkStyled>
                        <LinkStyled to="/my-favorites" $darkmode={darkMode}>
                            -My Favorites
                        </LinkStyled>
                        <LinkStyled to="/my-data" $darkmode={darkMode}>
                            -My Datas
                        </LinkStyled>
                        <LinkStyled to="/contact" $darkmode={darkMode}>
                            -Contact Us
                        </LinkStyled>
                    </DivMap>
                    <DivTerm $darkmode={darkMode}>
                        <P $darkmode={darkMode}>Terms(Fake)</P>
                        <P $darkmode={darkMode}>Privacy Policy(Fake)</P>
                        <P $darkmode={darkMode}>Cookie Settings(Fake)</P>
                        <P $darkmode={darkMode}>Privacy Statement(Fake)</P>
                    </DivTerm>
                    <DivSocialMidia $darkmode={darkMode}>
                        <IconGmail
                            $darkmode={darkMode}
                            title="My Gmail"
                            onClick={() => {
                                window.location = 'mailto:krinkewilian@gmail.com';
                            }}
                        />
                        <IconInstagram
                            $darkmode={darkMode}
                            onClick={() => {
                                window.location = 'https://www.instagram.com/wilian_k_vergopolan/';
                            }}
                            title="My Instagram"
                        />
                        <IconLinkedin
                            $darkmode={darkMode}
                            onClick={() => {
                                window.location = 'https://www.linkedin.com/in/wilian-krinke-a640b7141/';
                            }}
                            title="My Linkedin"
                        />
                        <IconGithub
                            $darkmode={darkMode}
                            onClick={() => {
                                window.location = 'https://github.com/WilianKrinke';
                            }}
                            title="My Github"
                        />
                    </DivSocialMidia>
                </div>
                <div className="div_developed">
                    <H4 $darkmode={darkMode}>Developed by Wilian Krinke</H4>
                </div>
            </ContainerFooter>
        </>
    );
};

export default memo(InternalFooter);
