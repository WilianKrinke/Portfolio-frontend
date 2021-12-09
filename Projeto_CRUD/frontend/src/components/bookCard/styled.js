import styled from 'styled-components'

export const CardStyled = styled.div`
    height: 400px;
    width: 350px;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: #CCFFCB;
    transition: all .5s ease-in-out;
    
    :hover{
        background-color: #FE6B0A;
        border: 1px solid #FE6B0A;
    }
`

export const ContainerMoldCard = styled.div`
    border: 1px solid;
    width: 100%;
    height: 100%;
`