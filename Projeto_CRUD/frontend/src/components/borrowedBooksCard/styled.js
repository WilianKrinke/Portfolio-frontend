import { BsBoxArrowDown } from 'react-icons/bs';
import styled from 'styled-components';

export const BorrowedBookCard = styled.article`
    height: 380px;
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
        height: 85%;
    }

    .div_img{
        width: 150px;
        height: 60%;
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
            width: 45%;
        }

        img{
            width: 100%;
            height: 100%;
            cursor: pointer;
            object-fit: contain;
        }
    }

    .div_bookname_and_rating{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column; 
        width: 100%;
        height: 40%;        

        @media screen and (max-width: 1100px) {
            height: 120px;
        }

        @media screen and (max-width: 570px) {
            width: 55%;
            padding:10px;
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
    font-size: 16px;  
    
    @media screen and (max-width: 440px) {       
        font-size: 18px;       
    }
`

export const ContainerResume = styled.div`
    padding: 10px;
    height: 100%;
    width: 65%;
    display: flex;
    justify-content: space-evenly;
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
    
    @media screen and (max-width: 570px) {
        background-color: ${props => props.isSameDate ? "#FE6B0A" : props.isBookLate ? "#FE6B0A" : "transparent"};
        height: 130px;        
    }
`