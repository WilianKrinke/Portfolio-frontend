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
    border: 1px solid;

    @media screen and (max-width: 880px) {
        width: 100%;
    }
`

export const FormStyled = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border: 1px solid;
`

export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border: 1px solid;
`