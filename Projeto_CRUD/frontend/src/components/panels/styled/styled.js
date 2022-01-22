import styled from 'styled-components'
import Box from '@mui/material/Box';

export const MainContainer = styled.div`
    min-height: 320px;
    width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    text-align: center; 

    @media screen and (max-width: 600px) {
        width: 100%;
        height: 300px;
    }
`

export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100px;
    width: 50%;  

    @media screen and (max-width: 600px) {
        height: 100%;
        width: 340px;
    }
`

export const FormStyled = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    width: 100%;
    margin: 10px 0px; 
    border: 1px solid; 
`
export const ContainerStyledShowDatas = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    min-height: 280px;
    width: 100%;

    @media screen and (max-width: 600px){
        flex-direction: column;
        position: relative;
        top: 150px;
    }

    b{
        text-decoration: underline;
    }

    p{
        font-size: 18px;
        word-break: break-word;
    }

    .div_first, .div_second{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        min-height: 320px;
        width: 45%;

        @media screen and (max-width: 600px){
            width: 340px;
            justify-content: space-around;
        }
    }

    .div_name, .div_userName, .div_birth,  .div_adress{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        width: 100%;
        padding-left: 30px;

        @media screen and (max-width: 600px){
            width: 340px;
        }
    }

    .div_adress_street, .div_adress_district, .div_adress_number, .div_adress_city{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        width: 100%;
        padding-left: 30px;

        @media screen and (max-width: 600px){
            width: 340px;
        }
    }

    .div_email, .div_cell_phone, .div_landline{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        width: 100%;
        padding-left: 30px;

        @media screen and (max-width: 600px){
            width: 340px;
        }
    }

    @media screen and (max-width: 600px) {
        width: 340px;
    }
`

export const TagP = styled.p`
    b{
        color: #222222;
    }

    :not(b){
        color: ${props => props.isNull === null && "#e32012"}
    }
`

