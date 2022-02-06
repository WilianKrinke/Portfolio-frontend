import styled from 'styled-components'

export const MainNotFound = styled.main`
    max-width: 100vw;
    min-height: 70vh;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
`

export const StyledSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    border: 1px solid;
    width: 100%;
    min-height: 25px;

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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    font-size: 16px;

        :hover{
            background: ${props => props.$darkmode ? "#071057" : "#030103"};
            border: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.5)"};
            color: #fff;
        }
    
    @media screen and (max-width: 440px) {       
        font-size: 16px;       
    }
`