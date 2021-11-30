import styled from 'styled-components';
import pattern_colors from '../colors/index.js'

export const HeaderStyled = styled.header`
    max-width: 100vw;
    min-height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;   
    background-color: ${pattern_colors.prime_compoments_bg};
`
export const MainStyled = styled.main`
    max-width: 100vw;
    min-height: 70vh;
    background-color: ${pattern_colors.prime_compoments_bg};
`
export const FooterStyled = styled.footer`
    max-width: 100vw;
    min-height: 10vh;
    background-color: ${pattern_colors.prime_compoments_bg};
`