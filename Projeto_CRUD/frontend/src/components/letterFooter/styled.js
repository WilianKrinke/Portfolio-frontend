import styled from 'styled-components'

export const ContainerFooter = styled.footer`
    max-width: 100vw;
    min-height: 70px;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};      
    transition: all .7s ease-in-out;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    letter-spacing: 3px;
    padding: 10px;    

    div{
        width: 100%;
        height: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    
`
export const H4 = styled.h4`
    color: ${props => !props.$darkmode ? "rgba(0, 0, 0, 0.7)" : "#F9FFF9"};
    font-weight: 200;
    transition: all .7s ease-in-out;
    
    @media screen and (max-width: 570px) {
        font-size: 18px;
    }
   
`