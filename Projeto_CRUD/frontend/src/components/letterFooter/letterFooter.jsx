import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { ContainerFooter, DivMap, DivSocialMidia, DivTerm, LinkStyled, P } from './styled';

const Letterfooter = () => {
    const darkMode = useSelector((state) => state.toggleDarkModeReducer.darkMode);

    return (
        <>
            <ContainerFooter $darkmode={darkMode}>
                <DivMap $darkmode={darkMode}>
                    {/* Links Gerais Mapa */}
                    <LinkStyled to="/" $darkmode={darkMode}>
                        LinkStyled1
                    </LinkStyled>
                    <LinkStyled to="/" $darkmode={darkMode}>
                        LinkStyled2
                    </LinkStyled>
                    <LinkStyled to="/" $darkmode={darkMode}>
                        LinkStyled3
                    </LinkStyled>
                    <LinkStyled to="/" $darkmode={darkMode}>
                        LinkStyled4
                    </LinkStyled>
                    <LinkStyled to="/" $darkmode={darkMode}>
                        LinkStyled5
                    </LinkStyled>
                </DivMap>
                <DivSocialMidia $darkmode={darkMode}>
                    {/* Minhas Midias com icones */}
                    {/* gmail, instagram, linkedin, github */}
                </DivSocialMidia>
                <DivTerm $darkmode={darkMode}>
                    <P $darkmode={darkMode}>Termos</P>
                    <P $darkmode={darkMode}>Politiva de Privacidade</P>
                    <P $darkmode={darkMode}>Configurações de Cookie</P>
                    <P $darkmode={darkMode}>Declaração de Privacidade</P>
                </DivTerm>
            </ContainerFooter>
        </>
    );
};

export default memo(Letterfooter);
