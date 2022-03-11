import { FaLock, FaUnlockAlt, FaUserAlt } from "react-icons/fa";
import styled from 'styled-components';

export const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 50px;
`

export const UserIcon = styled(FaUserAlt)`
    position: relative;
    top: 11px;
    font-size: 18px;
`

export const LockIcon = styled(FaLock)`
    position: relative;
    top: 11px;
    font-size: 18px;
    cursor: pointer;
`

export const UnLockIcon = styled(FaUnlockAlt)`
    position: relative;
    top: 11px;
    font-size: 18px;
    cursor: pointer;
`



export const PassContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 50px;
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

