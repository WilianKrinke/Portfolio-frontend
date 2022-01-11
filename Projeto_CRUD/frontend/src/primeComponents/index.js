import styled from 'styled-components';
import pattern_colors from '../colors/index.js'

export const MainStyled = styled.main`
    max-width: 100vw;
    min-height: 70vh;
    background-color: ${pattern_colors.prime_compoments_bg};
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