import styled from 'styled-components';
import pattern_colors from '../colors/index.js'

export const HeaderStyled = styled.header`
    max-width: 100vw;
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${pattern_colors.prime_compoments_bg};
    text-align: center;
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    letter-spacing: 3px;
    padding: 10px;
`

export const DivLoading = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 250px;
`