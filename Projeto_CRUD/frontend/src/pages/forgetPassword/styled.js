import styled from 'styled-components'
import {FooterStyled, MainStyled} from '../../primeComponents'

export const ForgetPassMain = styled(MainStyled)`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: center;  
`

export const Container = styled.section`
    background-color: #CCFFCB;
    width: 40%;
    height: 410px;
    padding: 10px;
    border-radius: 3px;
`

export const ContainerInfo = styled.article`
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .container_disclaimer{
        width: 80%; 
        text-align: left;
        margin: 10px 10px;

        p{
            font-size: 16px;
            letter-spacing: 1px;
        }
    }

    .form{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        margin: 10px 10px;
        width: 80%;
        height: 60px;
    }

    .container_buttons{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        margin: 10px 10px;
        width: 70%;      
        
        a{
            transition: all .3s ease-in-out;
        }

        a:hover{
            color: #6e6edb;
        }
    }
`
export const ForgetPassFooter = styled(FooterStyled)``