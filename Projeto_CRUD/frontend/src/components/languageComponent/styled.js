import styled from 'styled-components'

export const DivLanguagesButtons = styled.div`
    border: 1px solid #000;
    width: 350px;
    position: absolute;
    left: 0px;
    top: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .button_flag{
        background-color: transparent;
        border: none
    }
`

export const P = styled.p`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"}; 
    transition: all .7s ease-in-out; 
    font-size: 16px; 
    
    @media screen and (max-width: 440px) {       
        font-size: 18px;       
    }
`