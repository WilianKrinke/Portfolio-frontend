import styled from 'styled-components'

export const TutorialMain = styled.main`
    max-width: 100vw;
    min-height: 300px;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};      
    transition: all .7s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    
    @media screen and (max-width: 440px) {
        padding: 10px 0px;
        border: 1px solid transparent;
    }  
`