import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import translate from '../../i18n/translate';
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
                        <P $darkmode={darkMode}>{translate('sitemapp')}</P>
                        <LinkStyled to="/book-list" $darkmode={darkMode}>
                            -{translate('booklist')}
                        </LinkStyled>
                        <LinkStyled to="/my-borrowed-books" $darkmode={darkMode}>
                            -{translate('myborrowedbooks')}
                        </LinkStyled>
                        <LinkStyled to="/my-favorites" $darkmode={darkMode}>
                            -{translate('myfavorites')}
                        </LinkStyled>
                        <LinkStyled to="/my-data" $darkmode={darkMode}>
                            -{translate('mydatas')}
                        </LinkStyled>
                        <LinkStyled to="/contact" $darkmode={darkMode}>
                            -{translate('contactus')}
                        </LinkStyled>
                    </DivMap>
                    <DivTerm $darkmode={darkMode}>
                        <P $darkmode={darkMode}>{translate('terms')}</P>
                        <P $darkmode={darkMode}>{translate('privacypolice')}</P>
                        <P $darkmode={darkMode}>{translate('cookiessetting')}</P>
                        <P $darkmode={darkMode}>{translate('privacystatement')}</P>
                    </DivTerm>
                    <DivSocialMidia $darkmode={darkMode}>
                        <div className="div_developed">
                            <H4 $darkmode={darkMode}>{translate('developedby')}</H4>
                        </div>
                        <div className="div_icons">
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
                        </div>
                    </DivSocialMidia>
                </div>
            </ContainerFooter>
        </>
    );
};

export default memo(InternalFooter);
