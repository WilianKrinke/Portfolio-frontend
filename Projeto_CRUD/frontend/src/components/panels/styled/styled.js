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

export const FormStyled = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 310px;
    width: 100%;   

    @media screen and (max-width: 600px) {
        height: 310px;
    }
`
export const ContainerStyledShowDatas = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 320px;
    width: 100%;

    .div_name, .div_userName, .div_birth,  .div_adress{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        width: 100%;
        padding: 0px 10px;
    }

    .div_adress_street, .div_adress_district, .div_adress_number, .div_adress_city{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        width: 100%;
        padding: 0px 10px;
    }

    .div_email, .div_cell_phone, .div_landline{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        width: 100%;
        padding: 0px 10px;
    }

    @media screen and (max-width: 600px) {
        width: 340px;
    }
`

export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    height: 100%;
    width: 50%;  

    @media screen and (max-width: 600px) {
        margin: 10px 0px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: row;
        height: 100%;
        width: 340px;
    }
`