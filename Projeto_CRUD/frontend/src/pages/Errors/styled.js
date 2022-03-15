import styled from 'styled-components'

export const ErrorMainStyled = styled.main`
    max-width: 100vw;
    min-height: 70vh;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};
`

export const StyledSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    @media screen and (max-width: 650px) {
        flex-direction: column;
        height: 150px;
    }
`

export const ButtonBackPage = styled.button`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"}; 
    width: 150px;
    height: 35px;
    border-radius: 5px;
    background-color: transparent;
    outline: none;
    font-size: 14px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    padding: 0px auto;
    
    font-size: 16px;
   

        :hover{
            border: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.5)"};
            color: #fff;
        }
    
    @media screen and (max-width: 440px) {       
        font-size: 16px;       
    }
`

export const H3 = styled.h3`    
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 2px; 
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"};
    transition: all .7s ease-in-out;       

    @media screen and (max-width: 440px) {        
        font-size: 22px;        
    }
`