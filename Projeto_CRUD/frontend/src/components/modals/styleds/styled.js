import styled from 'styled-components'

export const DivModal = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    align-items: center;
    padding: 30px 10px;
   

    .disclaimer_lend_book{
        width: 100%;
        letter-spacing: 2px;
        margin: 10px;
        text-align: justify;

        p{
            font-family: 'Zen Kaku Gothic New', sans-serif;
        }
    }

    .container_buttons_lend_book{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: row;
        align-items: center;
    }
`