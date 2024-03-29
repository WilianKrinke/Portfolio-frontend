import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerFooter = styled.footer`
    max-width: 100vw;
    min-height: 150px;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};      
    transition: all .7s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    letter-spacing: 3px;
    padding: 10px; 
    
    .map_footer{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width:100%;
        
        @media screen and (max-width: 660px) {
            flex-direction: column;
        }
    }

    .div_space{
        width:100%;
        height: 60px;
    }

`

export const DivMap = styled.div`
    border-right: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
    height: 160px;
    width:100%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px;

    @media screen and (max-width: 660px) {
        border-bottom: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
        border-right: none;
        height: 180px;
    }
`

export const DivSocialMidia = styled.div`
   border-left: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
    height: 160px;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;

    @media screen and (max-width: 660px) {
        height: 180px;
        justify-content: space-around;
        border-bottom: none;
        border-right: none;
        border-left: none;
    }

    .div_developed{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width:100%;
        height: 40px;
        padding: 10px;

        @media screen and (max-width: 1000px) {
            text-align: center;
        }
    }

    .div_icons{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width:80%;
        height: 40px;
        text-align: center;;

    }
`

export const DivTerm = styled.div`
    border-left: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
    border-right: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
    height: 160px;
    width:100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px;

    @media screen and (max-width: 660px) {
        border-bottom: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
        border-top: none;
        border-left: none;
        border-right: none;
        height: 180px;
    }
`

export const LinkStyled = styled(Link)`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"}; 
    transition: all .7s ease-in-out;
    font-size: 12px;   
    
    @media screen and (max-width: 440px) {       
        font-size: 16px;       
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

export const P = styled.p`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"}; 
    transition: all .7s ease-in-out;  
    
    @media screen and (max-width: 440px) {       
        font-size: 16px;       
    }
`

export const IconGmail = styled(SiGmail)`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"};
    font-size: 20px;
    cursor:pointer;
`
export const IconInstagram = styled(SiInstagram)`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"};
    font-size: 20px;
    cursor:pointer;
`
export const IconLinkedin = styled(SiLinkedin)`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"};
    font-size: 20px;
    
    cursor:pointer;
`
export const IconGithub = styled(SiGithub)`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"};
    font-size: 20px;
    cursor:pointer;
`

export const ExternalContainerFooter = styled.footer`
    max-width: 100vw;
    min-height: 10vh;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};      
    transition: all .7s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    letter-spacing: 3px;
    padding: 10px;
`