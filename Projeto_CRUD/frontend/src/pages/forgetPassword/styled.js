import Box from '@mui/material/Box';
import styled from 'styled-components';

export const ForgetPassMain = styled.main`
    max-width: 100vw;
    min-height: 70vh;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};      
    transition: all .7s ease-in-out;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: center;
`

export const BoxStyled = styled(Box)`
    width: 100%;

    .MuiInput-underline{
        width: 420px;

        @media screen and (max-width: 600px) {
            width: 69vw;
        }

        @media screen and (max-width: 400px) {
            width: 66vw;
        }
        
    }

    .MuiInput-underline:before {
        width: 100%;
    }

    .MuiInput-underline:after {
        width: 100%;
    }
`

export const Container = styled.section`
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};      
    transition: all .7s ease-in-out;
    width: 550px;
    height: 410px;
    padding: 10px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: center;

    @media screen and (max-width: 600px) {
        width: 95%;
    }

    @media screen and (max-width: 400px) {
        height: 450px;  
    }
`

export const ContainerInfo = styled.article`
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    transition: border .3s ease-in-out;


    .container_disclaimer{
        width: 420px; 
        text-align: left;
        margin: 10px 10px;
        

        @media screen and (max-width: 600px) {
            width: 80%
        }

        p{
            font-size: 18px;
            letter-spacing: 1px;
        }
    }

    .form{
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: column;
        margin: 10px 10px;
        width: 420px;
        height: 180px;
        
        
        @media screen and (max-width: 600px) {
            width: 80%
        }

        @media screen and (max-width: 400px) {
            height: 300px;
        }

        .container_buttons{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row-reverse;
            width: 70%;
            position: relative;
            left: 60px;
            
            @media screen and (max-width: 400px) {
                flex-direction: column;
                height: 90px;
                width: 100%;
                position: static;
            }
            
            a{
                transition: all .3s ease-in-out;
                font-size: 16px;

                @media screen and (max-width: 400px) {
                    font-size: 18px;
                }
            }
    
            a:hover{
                color: #6e6edb;
            }
        }
    }
`
