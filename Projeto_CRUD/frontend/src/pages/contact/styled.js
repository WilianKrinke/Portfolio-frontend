import styled from 'styled-components'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { RotateLoading } from './keyframes';

export const ArticleContainer = styled.article`    
    height: 400px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`

export const DivPhysicalAddress = styled.div`
    height: 400px;
    width: 50%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    border-right: 1px solid rgba(0, 0, 0, 0.3);

    .div_title{
        width: 100%;
        text-align: center;        

        h2{
            letter-spacing: 3px;
        }
    }

    .div_adress{
        width: 100%;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;

        p{
            font-size: 16px;
        }

        address{
            font-size: 18px;
        }
    }
`

export const FormStyled = styled.form`
    border-left: 1px solid rgba(0, 0, 0, 0.3);    
    height: 400px;
    width: 50%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    p,b{
        font-size: 16px;
    }

    .div_title{        
        width: 100%;
        text-align: center;
    }

    .div_from{        
        width: 100%;
        text-align: left;
    }

    .div_to{        
        width: 100%;
        text-align: left;
    }

    .div_message{        
        width: 100%;
        text-align: center;
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        flex-direction: column;

        textarea{
            width: 100%;
            resize: none;
        }
    }

    .div_button{
        width: 100%;
    }
`

export const IconLoading = styled(AiOutlineLoading3Quarters)`
    font-size: 18px;
    position: relative;
    top:3px;
    animation: ${RotateLoading} .75s linear infinite running;
`