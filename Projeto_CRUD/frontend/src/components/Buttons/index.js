
import styled from 'styled-components';
import { Pulse } from './keyframes';

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
  background-color: ${props => props.darkMode ? "#050517" : "transparent"};  
  outline: none;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: ${props => props.$darkmode ? "#F9FFF9" : "#030103"};
  border: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.5)"};
  
  :hover{
        border: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.5)"};
        color: #fff;
  }

  @media screen and (max-width: 430px) {
        width: 90%;
  }

`

export const ButtonCancelLoanBook = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background-color: ${props => props.darkMode ? "#050517" : "transparent"};  
  outline: none;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: ${props => props.$darkmode ? "#F9FFF9" : "#030103"};
  border: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.5)"};

  :hover
    border: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.5)"};
    color: #fff;
    animation: ${Pulse} 1s infinite cubic-bezier(0.66, 0, 0, 1);
  }

  @media screen and (max-width: 430px) {
        width: 90%;
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
  color: ${props => props.$darkmode ? "#F9FFF9" : "#030103"};
  border: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.5)"};

  :hover{
        background: #030103;
        color: #fff;
        animation: ${Pulse} 1s infinite cubic-bezier(0.66, 0, 0, 1);
        color: #fff;
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
  width: 150px;
  height: 55px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  border: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.5)"};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: ${props => props.$darkmode ? "#F9FFF9" : "#030103"};

  :hover{
        color: #fff;
  }

  @media screen and (max-width: 600px) {
    width: 110px;
    height: 55px;
  }
`

export const ButtonSendContact = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  border: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.5)"};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: ${props => props.$darkmode ? "#F9FFF9" : "#030103"};

  :hover
    color: #fff;
  }
`

export const DivSemiCircle = styled.div`
    border: 1px solid #fff;
    width: 100px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    border-radius: 23px;
    padding: 0px 3px;
    position: relative;
    top: 5px;
    transition: all .7s ease-in-out;
`

export const Circle = styled.div`    
    border: 1px solid #fff;
    height: 34px;
    width: 34px;
    border-radius: 50%;
    transition: all .2s ease-in-out;
    position: relative;
    right: ${props => props.darkMode ? '59px' : '-1px'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.darkMode ? "#050517" : "#F9FFF9"};  
`

export const Icon = styled.i`
   color: ${props => props.darkMode ? "#F9FFF9" : "#0a0a0a"};
   font-size: 15px;
   position: relative;
   top:2px;
`





