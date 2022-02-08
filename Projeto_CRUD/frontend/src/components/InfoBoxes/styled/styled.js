import styled from 'styled-components'

export const SubDivModal = styled.div`
height: 95%;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
align-items: center;
padding: 20px;
background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};      
border-radius: 3px;
border: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};

`

export const SubDivModal2 = styled.div`
height: 95%;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
align-items: center;
padding: 20px;
background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};      
border-radius: 3px;
border: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};

`

export const P = styled.p`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"}; 
    transition: all .7s ease-in-out;  
    
    @media screen and (max-width: 440px) {       
        font-size: 16px;       
    }
`