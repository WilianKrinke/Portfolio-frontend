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
    

    @media screen and (max-width: 470px) {
        width: 240px;
        flex-direction: column-reverse;
        height: 80px;
    }
`