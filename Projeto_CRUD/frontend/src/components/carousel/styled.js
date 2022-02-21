import styled from 'styled-components';

export const DivCarousel = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    height: 600px;
    width: 100vw;

    .carouselProvider{
        height: 600px;
        width: calc(100vw - 10px);
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;        
    }

    .slider{
        height: 600px;
        width: 100%; 
    }

    .slider_dark{
        height: 600px;
        width: 100%; 
    }

    .btn{
        width: 130px;
        height: 30px;
        margin: 10px;
        border-radius: 5px;
        background-color: transparent;
        outline: none;
        font-size: 14px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        color: #030103;

        :hover{
            background: #030103;
            color: #fff;
        }

        @media screen and (max-width: 600px) {
            width: 110px;
            height: 55px;
        }
    }

    .btn_dark{
        width: 130px;
        height: 30px;
        margin: 10px;
        border-radius: 5px;
        background-color: transparent;
        outline: none;
        font-size: 14px;
        border: 1px solid rgba(185, 185, 185, 0.5);
        cursor: pointer;
        color: #F9FFF9;

        @media screen and (max-width: 600px) {
            width: 110px;
            height: 55px;
        }
    }
`

export const DivItem = styled.div`
    height: 600px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    margin: 0px 10px;
    border: 1px solid rgba(185, 185, 185, 0.1);

    .div_img{
        height: 90%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        padding: 10px;        
    }

    .img{
        height: 500px;
        width: 100%;
        object-fit: contain;
        border-radius: 10px;
    }

    .div_paragraph{
        height: 10%;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;

        .paragraph{
            color: #030103;
        }
        
        .paragraph_dark{
            color: #F9FFF9;
        }
    }
`