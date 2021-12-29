import styled from 'styled-components'
import Box from '@mui/material/Box';
import { MainStyled } from '../../primeComponents'

export const RedefinePassMain = styled(MainStyled)`
    border: 1px solid
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: center;
`

export const SectionResetPass = styled.section`
    background-color: #CCFFCB;
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