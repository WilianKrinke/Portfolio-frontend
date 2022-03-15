import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const TutorialMain = styled.main`
    max-width: 100vw;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};      
    transition: background-color .7s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px; 

    @media screen and (max-width: 570px) {
       padding-top: 20px;
    }

    @media screen and (max-width: 440px) {
        padding: 10px 0px;
        border: 1px solid transparent;
    }   
`

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 55px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  font-size: 14px;
  border: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.5)"};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: ${props => props.$darkmode ? "#F9FFF9" : "#050517"};
  position: absolute;
  top: 50px;
  right: 130px;
  text-transform: uppercase;
  letter-spacing: 3px;

  :hover{
        background: #050517;
        color: #fff;
  }
  

  @media screen and (max-width: 600px) {
    width: 110px;
    height: 55px;
  }
`