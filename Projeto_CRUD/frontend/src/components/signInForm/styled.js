import styled from 'styled-components'

export const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 50px;

    #userIcon{
        color: #0a0a0a;
        position: relative;
        top: 8px;
        left: 5px;
    }
`

export const PassContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 50px;

    #lockUnlock{
        color: #0a0a0a;
        position: relative;
        top: 8px;
        left: 5px;
        cursor: pointer;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    position: relative;
    top: 10px;
    right: 85px;
`

