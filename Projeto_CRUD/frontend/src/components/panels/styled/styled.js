import styled from 'styled-components'
import Box from '@mui/material/Box';

export const MainContainer = styled.div`
    height: 320px;
    width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    height: 100%;
    width: 100%;

    @media screen and (max-width: 600px) {
        height: 50%
    }
`
export const ContainerStyledShowDatas = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border: 1px solid;

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