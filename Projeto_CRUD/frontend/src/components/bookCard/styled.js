import styled from 'styled-components'
import {BsChevronCompactDown} from 'react-icons/bs';
import { SeeLessAnimation, SeeMoreAnimation } from './keyframes';


export const CardStyled = styled.div`
    min-height: 470px;
    width: 350px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
    background-color: transparent;
    transition: all .3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    -webkit-box-shadow: 3px 3px 4px 1px rgba(0,0,0,0.16); 
    box-shadow: 3px 3px 4px 1px rgba(0,0,0,0.16);

    @media screen and (max-width: 440px) {
        min-height: 550px;
        width: 350px;
        margin: 10px 0px;
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
    
    @media screen and (max-width: 440px) {       
        font-size: 18px;       
    }
`

export const B = styled.b`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"}; 
    transition: all .7s ease-in-out;  

    @media screen and (max-width: 440px) {       
       font-size: 18px;      
   }
`


export const ContainerMoldCard = styled.div`
    height: 470px;
    padding: 5px;
    border-radius: 5px 0px 0px 5px;
    transition: all .2s ease-in-out;
    width: 85%;
    border-right: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.8)" : "rgba(0, 0, 0, 0.2)"};
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 440px) {
        height: 550px;
    }
`

export const ContainerToLike = styled.div`
    transition: all .5s ease-in-out;
    width: 15%;
    height: 470px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;   
    border-radius: 0px 5px 5px 0px;
    background-color: #FE6B0A;
    border: 1px solid #FE6B0A;

    @media screen and (max-width: 440px) {
        height: 550px;
    }

`

export const DivIconLend = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 80px;
    font-size: 26px;

    @media screen and (max-width: 440px) {
        font-size: 30px;
    }
`

export const DivIconFavorite = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    cursor: pointer;
    height: 80px;
    width: 100%;

    @media screen and (max-width: 440px) {
        font-size: 30px;
    }
`

export const DivIconNotAvailable = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    cursor: not-allowed;
    height: 80px;
    width: 100%;
`

export const DivIconBorrowed = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    cursor: pointer;
    height: 80px;
    width: 100%;

    @media screen and (max-width: 440px) {
        font-size: 30px;
    }  
`

export const IconSeeMoreLess = styled(BsChevronCompactDown)`
    font-size: 22px;
    animation: ${props => props.$seemore ? SeeMoreAnimation : SeeLessAnimation} .5s ease 1 forwards;
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"}; 
    
`

export const FirstContainerInfo = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-top: 10px;
        
    .image{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        img{
            width: 100px;
            height: 100%;
            object-fit: contain;
            cursor: pointer;
        }
    }

    .title_rating{
        width: 50%;
        height: 100%;        
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        text-align: center;
        line-height: 24px;

        .rating{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            text-align: center;
            position: relative;
        }
    }
`

export const SecondContainerInfo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    align-items: center;
    transition: all .3s ease-in-out;        
    
    .container_author{
        width: 100%;            
        text-align: left;
        padding: 0px 5px;
    }

    .container_category{
        width: 100%;            
        text-align: left;
        padding: 0px 5px;
    }

    .container_see_more{
        width: 100%;           
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
    }

    .container_amount{
        width: 100%;            
        text-align: left;
        padding: 0px 5px;
    }
`

export const ContainerResume = styled.div`
    width: 100%;
    min-height: 160px    
    text-align: left;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    align-items: center;
`

export const ParagraphResume = styled.p`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: ${props => props.seemore ? '9' : '3'};;
    -webkit-box-orient: vertical;
    padding: 0px 5px;
    transition: all .7s ease-in-out;  
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"};
`


export const DivModal = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    align-items: center;
    padding: 30px 10px;
   

    .disclaimer_lend_book{
        width: 100%;
        letter-spacing: 2px;
        margin: 10px;
        text-align: justify;
    }

    .container_buttons_lend_book{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: row;
        align-items: center;
    }
`
