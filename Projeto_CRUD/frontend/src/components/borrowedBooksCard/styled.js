import styled from 'styled-components'
import { BsBoxArrowDown } from 'react-icons/bs';

export const BorrowedBookCard = styled.article`
    height: 350px;
    width: 85%;
    margin: 10px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row nowrap;
    transition: all .3s ease-in-out;


    @media screen and (max-width: 1100px) {
        min-height: 550px;
        flex-flow: column nowrap;
        border-left: ${props => props.isBookLate ? "2px solid #FE6B0A" : props.$darkmode ? " 2px solid rgba(185, 185, 185, 0.5)" : "2px solid rgba(0, 0, 0, 0.2)"};
    
        border-bottom: ${props => props.isBookLate ? "2px solid #FE6B0A" : props.$darkmode ? "2px solid rgba(185, 185, 185, 0.5)" : "2px solid rgba(0, 0, 0, 0.2)"};
    }

    @media screen and (max-width: 570px) {
        min-height: 670px;
        width: 100%;
        border-left: ${props => props.isBookLate ? "2px solid #FE6B0A" : props.$darkmode ? " 2px solid rgba(185, 185, 185, 0.5)" : "2px solid rgba(0, 0, 0, 0.2)"};
    
        border-bottom: ${props => props.isBookLate ? "2px solid #FE6B0A" : props.$darkmode ? "2px solid rgba(185, 185, 185, 0.5)" : "2px solid rgba(0, 0, 0, 0.2)"}; 
    }
`

export const ContainerTitle = styled.div`
    padding: 10px;
    height: 100%;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 1100px) {
        border-right: none;
        flex-flow: row nowrap;
        width: 100%;
    }

    @media screen and (max-width: 570px) {
        border-right: none;
    }

    .div_img{
        width: 180px;
        height: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        @media screen and (max-width: 1100px) {
            height: 95%;
            width: 180px;
        }

        @media screen and (max-width: 570px) {
            height: 95%;
            width: 180px;
        }

        img{
            width: 180px;
            height: 100%;
            cursor: pointer;
            object-fit: cover;
        }
    }

    .div_bookname_and_rating{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
 
        width: 100%;
        height: 25%; 

        @media screen and (max-width: 1100px) {
            height: 120px;
        }
    }

    .div_title{
        height: 50%;
        width: 100%;
        padding: 5px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        

        @media screen and (max-width: 1100px) {
            height: 100px;
        }

        @media screen and (max-width: 570px) {
            width: 90%;
        }
    }

    .div_rating{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

export const H3 = styled.h3`
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

export const ContainerResume = styled.div`
    padding: 10px;
    height: 100%;
    width: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-left: ${props => props.isBookLate ? "2px solid #FE6B0A" : props.$darkmode ? " 2px solid rgba(185, 185, 185, 0.5)" : "2px solid rgba(0, 0, 0, 0.2)"};

    border-bottom: ${props => props.isBookLate ? "2px solid #FE6B0A" : props.$darkmode ? "2px solid rgba(185, 185, 185, 0.5)" : "2px solid rgba(0, 0, 0, 0.2)"};
       
    @media screen and (max-width: 1100px) {
        width: 100%;
        border-bottom: none;
        border-left: none;
    }
    
    .div_resume{           
        padding: 10px;
              
        p{
            font-size: 16px;
        }

        @media screen and (max-width: 570px) {
             p{
                 font-size: 16px;
             }
        }
    }
`

export const ContainerActions = styled.div`
    padding: 10px;
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    border-bottom:  ${props => props.isBookLate ? "2px solid #FE6B0A" : "2px solid rgba(0, 0, 0, 0.3)"};
    cursor: pointer;
    
    .div_container_icon{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        width: 70%;

        @media screen and (max-width: 570px) {
            width: 40%;
        }
    }

    @media screen and (max-width: 1100px) {
        height: 20%;
        width: 100%;
        border-bottom: none;
    }
`

export const Icon = styled(BsBoxArrowDown)`
    font-size: 38px;
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"};
`

export const DivInfoLendBook = styled.div`
    padding: 10px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column; 
    border: ${props => props.isBookLate ? "2px solid #FE6B0A" : props.$darkmode ? "2px solid rgba(185, 185, 185, 0.5)" : "2px solid rgba(0, 0, 0, 0.2)"};
    transition: background-color .3s ease-in-out;

    :hover{
        background-color: ${props => props.isSameDate ? "transparent" : props.isBookLate ? "#FE6B0A" : "transparent"};
    }

    p{
        font-size: 16px;

        :last-child{
            font-size: 22px;
        }
    }
    
    @media screen and (max-width: 570px) {
        background-color: ${props => props.isSameDate ? "#FE6B0A" : props.isBookLate ? "#FE6B0A" : "transparent"};

        p{
            font-size: 16px;
        }
    }
`