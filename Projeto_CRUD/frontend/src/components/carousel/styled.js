import styled from 'styled-components';

export const DivCarousel = styled.div`
    border: 1px solid #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    height: 500px;
    width: 100vw;

    .carouselProvider{
        border: 1px solid #000;
        height: 500px;
        width: 80vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
    }

    .slider{
        border: 1px solid #000;
        height: 500px;
        width: 100%;
        
    }

    .btn_left{
        /*  */
        width: 150px;
    }

    .btn_right{
        /*  */
        width: 150px;
    }
`

export const DivItem = styled.div`
border: 1px solid #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 500px;
`