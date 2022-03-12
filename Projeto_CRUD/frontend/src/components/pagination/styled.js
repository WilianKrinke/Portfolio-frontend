import styled from 'styled-components';

export const DivCarousel = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 800px;
    width: 100vw;
`

export const DivItem = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin: 10px 10px;
    padding: 20px 0px;

    .div_img{
        height: 100%;
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
        border-radius: 3px;
    }

    .div_paragraph{
        height: 10%;
        width: 50%;
        text-align: center;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        margin: 10px 0px;

        .paragraph{
            color: #030103;
            font-size: 20px;
        }
        
        .paragraph_dark{
            color: #F9FFF9;
            font-size: 20px;
        }
    }
`