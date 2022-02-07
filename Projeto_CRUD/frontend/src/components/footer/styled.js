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
    }

    .div_developed{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: center;
        width:100%;
        height: 40px;
        padding: 10px;        
    }

    .div_space{
        width:100%;
        height: 100px;
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
`

export const DivSocialMidia = styled.div`
   border-left: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
    height: 160px;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 20px;
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
    margin-right: 20px;
    cursor:pointer;
    position: relative;
    top: 43px;
`
export const IconInstagram = styled(SiInstagram)`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"};
    font-size: 20px;
    margin: 0px 20px;
    cursor:pointer;
    position: relative;
    top: 43px;
`
export const IconLinkedin = styled(SiLinkedin)`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"};
    font-size: 20px;
    margin: 0px 20px;
    cursor:pointer;
    position: relative;
    top: 43px;
`
export const IconGithub = styled(SiGithub)`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"};
    font-size: 20px;
    margin: 0px 20px;
    cursor:pointer;
    position: relative;
    top: 43px;
`

export const ExternalContainerFooter = styled.footer`
    max-width: 100vw;
    min-height: 50px;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};      
    transition: all .7s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    letter-spacing: 3px;
    padding: 10px;
`