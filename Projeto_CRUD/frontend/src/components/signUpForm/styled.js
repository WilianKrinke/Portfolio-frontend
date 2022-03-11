import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styled from 'styled-components';

export const ContainerInfoSignUp = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`
export const UserIcon = styled(FaUserAlt)`
    position: relative;
    top: 11px;
    font-size: 18px;
    cursor: pointer;
`
export const EmailIcon = styled(MdEmail)`
    position: relative;
    top: 11px;
    font-size: 18px;
    cursor: pointer;
`

export const BsFillEyeFillStyled = styled(BsFillEyeFill)`
    position: relative;
    top: 11px;
    font-size: 18px;
    cursor: pointer;
`
export const BsFillEyeSlashFillStyled = styled(BsFillEyeSlashFill)`
    position: relative;
    top: 11px;
    font-size: 18px;
    cursor: pointer;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    position: relative;
    top: 30px;
    right: 85px  
`