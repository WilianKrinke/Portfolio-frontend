import styled from 'styled-components'
import { BsBookmarkCheckFill } from 'react-icons/bs';

export const BorrowedBookCard = styled.article`
    height: 350px;
    width: 85%;
    margin: 10px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row nowrap;
    border-radius: 3px;
    transition: all .3s ease-in-out;  
    

    @media screen and (max-width: 1100px) {
        min-height: 550px;
        flex-flow: column nowrap;
    }

    @media screen and (max-width: 570px) {
        min-height: 600px;
        width: 100%;
        border-left:  ${props => props.isBookLate ? "2px solid rgba(255, 0, 0, 1)" : "2px solid rgba(0, 0, 0, 0.3)"};
        border-bottom:  ${props => props.isBookLate ? "2px solid rgba(255, 0, 0, 1)" : "2px solid rgba(0, 0, 0, 0.3)"};
        border-radius: 0px;
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
    border-right:  ${props => props.isBookLate ? "2px solid rgba(255, 0, 0, 1)" : "2px solid rgba(0, 0, 0, 0.3)"};    

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
        height: 75%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
  
        
        @media screen and (max-width: 1100px) {
            height: 100%;
        }

        img{
            width: 100%;
            height: 100%;
            cursor: pointer;

            @media screen and (max-width: 570px) {
                width: 100%;
                height: 80%;
            }
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

        h3{
            font-size: 16px;
        }
    }

    .div_rating{
        height: 50%;
        width: 100%;
        padding: 5px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;


        @media screen and (max-width: 1100px) {
            height: 100px;
        }
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
    border-bottom: ${props => props.isBookLate ? "2px solid rgba(255, 0, 0, 1)" : "2px solid rgba(0, 0, 0, 0.3)"};

    @media screen and (max-width: 1100px) {
        width: 100%;
        border-bottom: none;
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

    .div_info_lend_book{ 
        padding: 10px;
        width: 100% ;        
        
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
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: ${props => props.isBookLate ? "2px solid rgba(255, 0, 0, 1)" : "2px solid rgba(0, 0, 0, 0.3)"}; 

    @media screen and (max-width: 1100px) {
        height: 20%;
        width: 100%;
        border-bottom: none;
    }
`

export const Icon = styled(BsBookmarkCheckFill)`
    font-size: 38px;
    cursor: pointer;
`