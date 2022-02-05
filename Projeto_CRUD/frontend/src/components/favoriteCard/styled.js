import { FaHeart, FaHeartBroken } from 'react-icons/fa'
import styled from 'styled-components'
import { heartBrokenAnimation } from './keyframes'

export const ContainerCard = styled.article`
    border: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
    border-radius: 5px;
    width: 370px;
    height: 500px;
    margin: 10px;
    padding: 10px;
    transition: all .3s ease-in-out;

    :hover {
        -webkit-box-shadow: 5px 7px 8px -1px rgba(0,0,0,0.66); 
        box-shadow: 5px 7px 8px -1px rgba(0,0,0,0.66);
        border: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "transparent"};
    }

    @media screen and (max-width: 470px) {
        margin: 10px 0px;
        width: 98%;
    }

    @media screen and (max-width: 390px) {
        height: 600px;
    }
`

export const ContainerTitle = styled.div`
    height: 50%;
    width: 100%;
    display:flex;
    justify-content:space-between;
    align-items: flex-start;
    flex-flow: row nowrap;

    @media screen and (max-width: 390px) {
        height: 40%;
    }

    .div_img{
        width: 45%;
        height: 100%;
        cursor: pointer;
        
        img{
            object-fit: contain;
            width:100%;
            height: 100%;
        }
    }

    .div_icon_title{
        width: 55%;
        height: 100%;
        display:flex;
        justify-content: space-around;
        align-items: center;
        flex-flow: column nowrap;
        text-align: center;
        padding: 10px;
    }

    .div_stars{
        width:100%;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-flow: row nowrap;
        text-align: center;
    }
`

export const Icon = styled(FaHeart)`
    font-size: 28px;
    width: 20%;
    height: 35px;    
    cursor: pointer;
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"}; 
`

export const IconHeartBroken = styled(FaHeartBroken)`
    font-size: 28px;
    width: 20%;
    height: 35px;    
    cursor: pointer;
    animation: ${heartBrokenAnimation} 1s cubic-bezier(0,.43,.83,.82) 1 forwards;
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"}; 
`

export const ContainerResume = styled.div`
    height: 50%;
    width: 100%;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-flow: column nowrap;

    @media screen and (max-width: 390px) {
        height: 60%;
        justify-content: space-evenly;
    }
    
    .div_resume{
        text-align: left;
        width: 100%;
        margin:5px;
    }

    .div_author{
        text-align: left;
        width: 100%;
        margin:5px;
    }

    .div_category{
        text-align: left;
        width: 100%;
        margin:5px;
    }
`
export const H2 = styled.h2`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 2px; 
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"};
    transition: all .7s ease-in-out;       

    @media screen and (max-width: 440px) {        
        font-size: 22px;        
    }
`

export const P = styled.p`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"}; 
    transition: all .7s ease-in-out; 
    font-size: 16px; 
    
    @media screen and (max-width: 440px) {       
        font-size: 18px;       
    }
`