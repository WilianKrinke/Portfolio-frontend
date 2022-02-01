import styled from 'styled-components'

export const HeaderStyled = styled.header`
    max-width: 100vw;
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${props => props.darkMode ? "#0e1324" : "#F9FFF9"};      
    transition: all .7s ease-in-out;
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

export const H1 = styled.h1`
    color: ${props => !props.darkMode ? "#0a0a0a" : "#F9FFF9"};      
    transition: all .7s ease-in-out;
`