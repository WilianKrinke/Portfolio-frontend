import styled from 'styled-components';

export const DivCarousel = styled.div`
    border: 1px solid #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    height: 400px;
    width: 100vw;

    .carouselProvider{
        border: 1px solid #000;
        height: 400px;
        width: 100vw;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
    }

    .slider{
        border: 1px solid #000;
        height: 400px;
        width: 90vw;
        
    }

    .btn_left{
        /*  */
    }

    .btn_right{
        /*  */
    }
`

export const DivItem = styled.div`
border: 1px solid #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 400px;
`