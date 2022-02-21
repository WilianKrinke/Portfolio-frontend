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
        width: 100vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
    }

    .slider{
        height: 600px;
        width: 100%;   
    }

    .btn_left{
        width: 130px;
        margin: 10px;
    }

    .btn_right{
        width: 130px;
        margin: 10px;
    }
`

export const DivItem = styled.div`
    height: 600px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    margin: 0px 10px;

    .div_img{
        height: 90%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        
    }

    .img{
        height: 500px;
        width: 100%;
        object-fit: contain;
        border-radius: 3px;
    }

    .div_paragraph{
        height: 10%;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
    }
`