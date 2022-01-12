/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import { BsXLg } from 'react-icons/bs';
import { HiOutlineX } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';
import { MdClose } from "react-icons/md";
import { VscClose, VscChromeClose } from "react-icons/vsc";

export const ContainerMenu = styled.div`
    height: 100vh;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: rgba(0, 0, 0, 0.98);
    transition: all .3s ease-in-out;
    position: fixed;
    right: ${props => props.isOpen ? '0px' : '-400px'};
    z-index: 100;

    @media screen and (max-width: 440px) {
        position: fixed;
        right: ${props => props.isOpen ? '0px' : '-100vw'};
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
    top: 20px; 

    p{
        color: antiquewhite;
        font-size: 18px;
        font-family: 'Zen Kaku Gothic New', sans-serif;

        @media screen and (max-width: 440px) {
            font-size: 24px;
        }
    }
`

export const ContainerIcon = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    color: antiquewhite;
    position: relative;
    top: 17px;
`

export const IconHamburguer = styled.i`
    font-size: 48px;
    position: fixed;
    top: 20px;
    right: ${props => props.isOpen ? '-50px' : '30px'};
`

export const IconClose = styled(VscChromeClose)`
    color: antiquewhite;
    font-size: 52px;
    cursor: pointer;
    position: relative;
    left: 130px;
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
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all .1s ease-in-out;
            font-family: 'Zen Kaku Gothic New', sans-serif;

            :hover{
                transform: scale(1.3);
            }
            
            a{
                color: antiquewhite;
                letter-spacing: 3px;
            }
        }
    }
`