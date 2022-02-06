import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled from 'styled-components';
import { RotateLoading } from './keyframes';

export const ContactMain= styled.main`
    max-width: 100vw;
    min-height: 70vh;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"}; 
    transition: all .7s ease-in-out;
`

export const ArticleContainer = styled.article`    
    min-height: 430px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

    @media screen and (max-width: 884px) {
        flex-direction: column-reverse;
    }
`

export const DivPhysicalAddress = styled.div`
    height: 470px;
    width: 50%;
    padding: 10px 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    border-right: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
    transition: all .7s ease-in-out;

    @media screen and (max-width: 884px) {
        height: 450px;
        width: 100%;
        padding: 10px;
        border-right: 2px solid rgba(0, 0, 0, 0.3);
        border-top: 2px solid rgba(0, 0, 0, 0.3);
    }

    .div_title{
        width: 100%;
        text-align: center;        
    }

    .div_adress{
        width: 100%;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;

        @media screen and (max-width: 884px) {
            height: 340px;
        }        
    }
`

export const H2 = styled.h2`    
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 2px; 
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"};
    transition: all .7s ease-in-out;       

    @media screen and (max-width: 440px) {        
        font-size: 22px;        
    }
`

export const P = styled.p`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"}; 
    transition: all .7s ease-in-out; 
    font-size: 16px;
    word-break: break-word;      
    
    @media screen and (max-width: 440px) {       
        font-size: 18px;       
    }
`

export const Adress = styled.address`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"}; 
    transition: all .7s ease-in-out;
    font-size: 18px;

    @media screen and (max-width: 884px) {
        font-size: 20px;
    }  
`

export const FormStyled = styled.form`
    border-left: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
    height: 470px;
    width: 50%;
    padding: 10px 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    transition: all .7s ease-in-out;

    @media screen and (max-width: 884px) {
        height: 500px;
        padding: 10px;
        border-left: 2px solid rgba(0, 0, 0, 0.3);  
        width: 100%;
    }

    .div_title{        
        width: 100%;
        text-align: center;
    }

    .div_from{        
        width: 100%;
        text-align: left;
    }

    .div_to{        
        width: 100%;
        text-align: left;
    }

    .div_select_subject{
        width: 100%;
        text-align: left;
    }

    .div_message{        
        width: 100%;
        text-align: center;
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        flex-direction: column;

        textarea{
            width: 100%;
            resize: none;
            font-family: 'Slabo 27px', serif;
            font-size: 16px;

            @media screen and (max-width: 884px) {
                border: 1px solid rgba(0, 0, 0, 0.5);
            }
        }
    }

    .div_button{
        width: 100%;
    }
`

export const IconLoading = styled(AiOutlineLoading3Quarters)`
    font-size: 18px;
    position: relative;
    top: 3px;
    animation: ${RotateLoading} .75s linear infinite running;
`