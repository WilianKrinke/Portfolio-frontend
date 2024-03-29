import Box from '@mui/material/Box';
import styled from 'styled-components';

export const RedefinePassMain = styled.main`
    max-width: 100vw;
    min-height: 70vh;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: center;
`

export const SectionResetPass = styled.section`
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};
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
`

export const ContainerInfo = styled.article`
    width: 100%;
    height: 100%;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const BoxStyled = styled(Box)`
    width: 310px;

    @media screen and (max-width: 470px) {
        width: 200px;
    }

    .MuiInput-underline{
        width: 310px; 
        
        @media screen and (max-width: 470px) {
            width: 200px;
        }
    }

    .MuiInput-underline:after{
        @media screen and (max-width: 470px) {
            width: 200px;
        }
    }  
`

export const DivNewPass = styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 350px;
    margin-bottom: 10px;
    position: relative;
    bottom: 10px;

    @media screen and (max-width: 470px) {
        width: 240px;
    }

    i{
        position: relative;
        top: 7px;
    }
`

export const DivConfirmPass = styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 350px;
    position: relative;
    bottom: 10px;

    @media screen and (max-width: 470px) {
        width: 240px;
    }

    i{
        position: relative;
        top: 7px;
    }
`

export const DivButtons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 330px;
    position: relative;
    top: 30px;
    left: 20px;
    
    @media screen and (max-width: 470px) {
        width: 240px;
        flex-direction: column-reverse;
        height: 80px;
        left: 0px;
    }
`