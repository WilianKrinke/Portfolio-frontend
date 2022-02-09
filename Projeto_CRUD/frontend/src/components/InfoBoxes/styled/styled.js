import styled from 'styled-components'

export const SubDivModal = styled.div`
height: 90%;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
align-items: center;
text-align: center;
padding: 20px;
background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};      
border-radius: 3px 3px 0px 0px;
border-top: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
border-right: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
border-left: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};

    .container_buttons_lend_book{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        align-items: center;
        width: 60%;
    }

    .disclaimer_lend_book{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        align-items: center;
        width: 70%;       
        position: relative;
        top: 50px;
    }

    .div_warnings{
        height: 80%;
        width: 70%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        align-items: center;
    }

`

export const P = styled.p`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"}; 
    transition: all .7s ease-in-out;
    font-size: 18px; 
    letter-space: 5px;    
    
    @media screen and (max-width: 440px) {       
        font-size: 18;       
    }
`