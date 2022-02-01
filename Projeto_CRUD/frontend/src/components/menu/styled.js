import styled from 'styled-components'
import { VscChromeClose } from "react-icons/vsc";
import { HideHamb, ShowHamb, turnOff, turnOn } from './keyframes';

export const ContainerMenu = styled.div`
    height: 100vh;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #030303;
    transition: all .3s ease-in-out;
    position: fixed;
    right: ${props => props.$isopen ? '0px' : '-400px'};
    z-index: 100;

    @media screen and (max-width: 440px) {
        position: fixed;
        right: ${props => props.$isopen ? '0px' : '-100vw'};
        width: 100vw;
    }
`

export const ContainerUser = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;     
    position: relative;
    top: 10px; 

    p{
        color: antiquewhite;
        letter-spacing: 7px;
        font-size: 18px;
        font-family: 'Zen Kaku Gothic New', sans-serif;

        @media screen and (max-width: 440px) {
            font-size: 24px;
        }
    }
`

export const IconClose = styled(VscChromeClose)`
    color: #F9FFF9;
    font-size: 52px;
    cursor: pointer;
    position: fixed; 
    top: 18px;
    right: ${props => !props.$isopen ? '-50px' : '25px'};   
    transition: all .3s ease-in-out;
    animation: ${props => !props.$isopen ? turnOn : turnOff} .3s ease-in-out forwards;
`

export const IconHamburguer = styled.i`
    font-size: 48px;
    position: fixed;
    top: 20px;
    right: 30px;
    transition: all .5s ease-in-out;
    color: ${props => !props.darkMode ? "#030303" : "#F9FFF9"};
    animation:${props => props.$isopen? HideHamb : ShowHamb} .3s ease-in-out forwards;
`

export const ContainerLinks = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    width: 100%;    

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
        width: 100%;
        text-align: center;
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        
        li{
            width: 100%;
            font-size: 24px;
            border-radius: 3px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all .1s ease-in-out;
            text-align: center;
            font-family: 'Zen Kaku Gothic New', sans-serif;

            :hover:not(.change_mode){
                transform: scale(1.3);
            }
            
            a{
                color: antiquewhite;
                letter-spacing: 3px;
            }
        }
    }
`

export const ContainerIsUpDated = styled.div`
    width: 100%;
    text-align: center;

    p{
        color: #FE6B0A;
        font-size: 16px;
    }

`