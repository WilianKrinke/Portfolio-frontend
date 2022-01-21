import styled from 'styled-components'
import {Pulse} from './keyframes'

export const ButtonChangeForm = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  bottom: 54px;
  left: 85px;
  color: #222;
  border: 1px solid rgba(0, 0, 0, 0.5);

  :hover{
        background: #030103;
        border: 1px solid rgba(0, 0, 0, 0.5);
        color: #fff;
        animation: ${Pulse} 1s infinite cubic-bezier(0.66, 0, 0, 1);
  }

   @media screen and (max-width: 960px) {
    bottom: 15px;
    left: 0px;
  }

  @media screen and (max-width: 470px) {
    position: relative;
    bottom: 25px;
  }
`

export const ButtonSignin = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  cursor: pointer;
  color: #222222;  
  transition: all 0.3s ease-in-out;
  border: 1px solid rgba(0, 0, 0, 0.5); 
  position: relative;
  bottom: 1px;

  :hover{
        background: #030103;
        color: #fff;
        animation: ${Pulse} 1s infinite cubic-bezier(0.66, 0, 0, 1);
  }

  @media screen and (max-width: 960px) {
        position: relative;
        bottom: 15px;
        left: 85px;
  }

  @media screen and (max-width: 470px) {
    position: relative;
    top: 5px;
  }
`

export const ButtonSignUp = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.5); 
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: #222222;

  :hover{
        background: #030103;
        color: #fff;
        animation: ${Pulse} 1s infinite cubic-bezier(0.66, 0, 0, 1);
  }

  @media screen and (max-width: 960px) {
    position: relative;
    bottom: 12px;
    left: 85px;
  }

  @media screen and (max-width: 470px) {
    position: relative;
    top: 3px;
    left: 85px;
  }
`

export const ButtonBackToLogin = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.5); 
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  bottom: 17px;
  left: 85px;
  color: #222222;

  :hover{
        background: #030103;
        color: #fff;
        animation: ${Pulse} 1s infinite cubic-bezier(0.66, 0, 0, 1);
  }

  @media screen and (max-width: 960px) {
    position: relative;
    top: 5px;
    left: 0px;
  }

  @media screen and (max-width: 470px) {
    position: relative;
    top: 25px;
    left: 0px;
  }
`

export const ButtonConfirmedLoanBook = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: #222222;

  :hover{
        background: #030103;
        border: 1px solid rgba(0, 0, 0, 0.1);
        color: #fff;
        animation: ${Pulse} 1s infinite cubic-bezier(0.66, 0, 0, 1);
  }

`

export const ButtonCancelLoanBook = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover{
        background: #030103;
        border: 1px solid rgba(0, 0, 0, 0.1);
        color: #fff;
        animation: ${Pulse} 1s infinite cubic-bezier(0.66, 0, 0, 1);
  }

`

export const ButtonLogOut = styled.button` 
    color: antiquewhite;
    letter-spacing: 3px;
    font-size: 24px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-family: 'Zen Kaku Gothic New', sans-serif;
    font-weight: 400;
    text-transform: capitalize;
    transition: all .3s ease-in-out;
    margin: 0px;
`

export const ButtonRecoverPass = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: #222222;

  :hover{
        background: #030103;
        border: 1px solid rgba(0, 0, 0, 0.1);
        color: #fff;
        animation: ${Pulse} 1s infinite cubic-bezier(0.66, 0, 0, 1);
  }
`

export const ButtonConfirmResetPass = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: #222222;

  :hover{
        background: #030103;
        border: 1px solid rgba(0, 0, 0, 0.1);
        color: #fff;
        animation: ${Pulse} 1s infinite cubic-bezier(0.66, 0, 0, 1);
  }
`


export const ButtonUpDate = styled.button`
  width: 130px;
  height: 55px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.5); 
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: #222222;

  :hover{
        background: #030103;
        color: #fff;
        animation: ${Pulse} 1s infinite cubic-bezier(0.66, 0, 0, 1);
  }

  @media screen and (max-width: 600px) {
    width: 110px;
    height: 55px;
  }
`



