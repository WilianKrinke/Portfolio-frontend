import styled from 'styled-components'
import pattern_colors from '../../colors'

export const HeaderStyled = styled.header`
    max-width: 100vw;
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${pattern_colors.prime_compoments_bg};
    text-align: center;

    .title{
        width: 100%;
        margin: 0px auto;

        @media screen and (max-width: 570px) {
            width: 60%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            line-height: 75px;
        }
    }

`