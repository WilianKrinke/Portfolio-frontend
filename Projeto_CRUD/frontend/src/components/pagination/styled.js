import styled from 'styled-components';

export const DivCarousel = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100vw;
`

export const DivItem = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    margin: 10px 10px;

    .div_pagination{

    }

    .div_img{
        height: 70%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        padding: 10px; 


        .img{           
            width: 100%;
            object-fit: contain;
            border-radius: 3px;
        }
    }


    .div_paragraph{
        height: 150px;
        width: 500px;
        text-align: center;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        margin: 10px 0px;


        @media screen and (max-width: 540px) {
            height: 200px;
            width: 95%;
        }

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