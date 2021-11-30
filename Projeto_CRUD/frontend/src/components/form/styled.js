import styled from 'styled-components'

export const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    label{
        position: relative;
        top: 10px;
    }

`
export const PassContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    label{
        position: relative;
        top: 10px;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;

    @media screen and (max-width: 400px) {
        height: 150px;
    }
`