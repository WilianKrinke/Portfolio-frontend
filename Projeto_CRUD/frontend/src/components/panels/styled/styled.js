import Box from '@mui/material/Box';
import styled from 'styled-components';

export const MainContainer = styled.div`
    min-height: 320px;
    width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    text-align: center;
    
    @media screen and (max-width: 600px) {
        width: 360px;
    }
`

export const ButtonRefresh = styled.button`
    background-color: rgba(0, 0, 0, 0.03);
    border: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
    cursor: pointer;
    padding: 2px 5px;
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"};
    transition: all .7s ease-in-out;

        :hover{
            background-color: rgba(0, 0, 0, 0.06);
        }
`

export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 366px;
    width: 50%;  

    @media screen and (max-width: 600px) {
        height: 375px;
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
`
export const ContainerStyledShowDatas = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 270px;
    width: 100%;
    margin-top: 20px;

    @media screen and (max-width: 600px) {
        width: 340px;
    }

    p{
        font-size: 18px;
        word-break: break-word;
    }

    .div_datas{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        width: 100%;
        height: 300px;

        @media screen and (max-width: 600px) {
            height: 650px;
            width: 340px;
            flex-direction: column;
        }
    }

    .div_lastupdate_p{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        width: 78%;
        text-align:left;

        @media screen and (max-width: 600px) {
            width: 80%;
        }

    }

    .div_lastupdate_btn{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        width: 35%;
        cursor: pointer;
        position: relative;
        right: 180px;  
        
        @media screen and (max-width: 600px) {
           right:0px;
           width: 95%;
        }
    }

    .div_first, .div_second{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        min-height: 320px;
        width: 340px;

        @media screen and (max-width: 600px) {
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
`

export const TagP = styled.p`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"}; 
    transition: all .7s ease-in-out;  
    
    @media screen and (max-width: 440px) {       
        font-size: 18px;       
    }

    :not(b){
        color: ${props => props.isNull === null && "#e32012"}
    }
`

