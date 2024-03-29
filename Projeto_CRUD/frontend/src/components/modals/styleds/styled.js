import { AiOutlineWarning } from "react-icons/ai";
import styled from 'styled-components';

export const DivModal = styled.div`    
    height: 500px;
    width: 700px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};   
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 430px) {
        height: 450px;
        width: 340px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"}; 
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, 0.3);
    }
`

export const DivModalReturnBook = styled.div`    
    height: 220px;
    width: 420px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"}; 
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 430px) {
        height: 350px;
        width: 350px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        background-color: transparent;
        border-radius: 3px;
        border: 1px solid rgba(0, 0, 0, 0.3);
    }
`

export const DivModalUserBlocked = styled.div`
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    position: fixed;
    z-index: 90;
    backdrop-filter: blur(15px);
`

export const DivWarningUserBlocked = styled.div`
    height: 300px;
    width: 600px;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"}; 
    padding: 10px;   

    @media screen and (max-width: 450px) {
        width: 100%;
        height: 300px;
    }
`

export const DivInternalUserBlocked = styled.div`
    border: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    align-items: center;
`

export const DivSTeps = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    align-items: center;
    border-radius: 0px 0px 3px 3px;
    border-right: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
    border-left: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
    border-bottom: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};

    @media screen and (max-width: 430px) {
        height: 50px;
        width: 338px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        align-items: center;
        border-radius: 0px 0px 3px 3px;
        border-right: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
        border-left: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
        border-bottom: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};
    }

    p{
        cursor: pointer
    }
`

export const P = styled.p`
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"}; 
    transition: all .7s ease-in-out;
    font-size: 18px;
`

export const SubDivModal = styled.div`
    height: 200px;
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: ${props => props.$darkmode ? "#050517" : "#F9FFF9"};      
    border-radius: 3px;
    border: 1px solid ${props => props.$darkmode ? "rgba(185, 185, 185, 0.5)" : "rgba(0, 0, 0, 0.2)"};


    @media screen and (max-width: 430px) {
        height: 350px;
        width: 320px;
    }  

    .disclaimer_lend_book{
        width: 100%;
        letter-spacing: 2px;
        margin: 10px;
        text-align: justify;
        
        p{
            font-family: 'Zen Kaku Gothic New', sans-serif;
        }

        @media screen and (max-width: 430px) {
            p{
                font-size: 18px;
            }
        }
    }

    .container_buttons_lend_book{
        width: 90%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        align-items: center;
        

        @media screen and (max-width: 430px) {
            width: 100%;
            flex-direction: column;
        }
    }

`
export const Image = styled.img`
    width: 350px;
    height: 500px;
    border-radius: 3px;

    @media screen and (max-width: 430px) {
        width: 80%;
        height: 80%;
    } 
`

export const IconWarning = styled(AiOutlineWarning)`
    color: #FE6B0A; 
    font-size:40px;
`
