import styled from 'styled-components'

export const DivLanguagesButtons = styled.div`
    width: 200px;
    position: absolute;
    left: 0px;
    top: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin:5px;

    .div_flags{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .button_flag{
        background-color: transparent;
        border: none;
        height: 10px;
        width: 20px;
        cursor: pointer;
        position: relative;
        bottom:2px;
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