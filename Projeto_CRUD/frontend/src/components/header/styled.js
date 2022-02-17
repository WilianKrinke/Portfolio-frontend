import styled from 'styled-components'

export const HeaderStyled = styled.header`
    max-width: 100vw;
    min-height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};      
    transition: all .7s ease-in-out;
    text-align: center;

    @media screen and (max-width: 570px) {
        padding: 50px 0px;
    }

    .title{
        width: 100%;
        
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
    color: ${props => !props.$darkmode ? "#0a0a0a" : "#F9FFF9"};      
    transition: all .7s ease-in-out;
`