import styled from 'styled-components'

export const DivModal = styled.div`
    height: 200px;
    width: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px;
    background-color: #ffeceb;
    border-radius: 3px;

    @media screen and (max-width: 430px) {
        height: 350px;
        width: 350px;
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
