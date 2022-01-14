import styled from 'styled-components'
import {FaHeart} from 'react-icons/fa'

export const ContainerCard = styled.article`
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    width: 300px;
    height: 500px;
    margin: 10px;
    padding: 10px;

    @media screen and (max-width: 470px) {
        margin: 10px 0px;
        width: 98%;
    }
`

export const ContainerTitle = styled.div`
    height: 50%;
    width: 100%;
    display:flex;
    justify-content:space-between;
    align-items: flex-start;
    flex-flow: row nowrap;

    .div_img{

        width: 55%;
        height: 100%;

        img{
            width:100%;
            height: 100%;
        }
    }

    .div_icon_title{

        width: 45%;
        height: 100%;
        display:flex;
        justify-content: space-around;
        align-items: center;
        flex-flow: column nowrap;
        text-align: center;
    }
`

export const Icon = styled(FaHeart)`
    font-size: 28px;
    width: 20%;
    height: 35px;    
`

export const ContainerResume = styled.div`
    height: 50%;
    width: 100%;
    display:flex;
    justify-content:center;
    align-items: center;
    flex-flow: column nowrap;
    
    .div_resume{
        text-align: left;
        width: 100%;
        margin:5px;

        p{
            font-size: 16px;
        }
    }

    .div_author{
        text-align: left;
        width: 100%;
        margin:5px;

        p{
            font-size: 16px;
        }
        
    }

    .div_category{
        text-align: left;
        width: 100%;
        margin:5px;

        p{
            font-size: 16px;
        }
    }
`