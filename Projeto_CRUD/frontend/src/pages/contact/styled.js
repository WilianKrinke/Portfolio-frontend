import styled from 'styled-components'

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
    }
`

export const FormStyled = styled.form`
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    border: 1px solid;
    height: 400px;
    width: 50%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    .div_title{
        border: 1px solid;
        width: 100%;
        text-align: center;
    }

    .div_from{
        border: 1px solid;
        width: 100%;
        text-align: center;
    }

    .div_to{
        border: 1px solid;
        width: 100%;
        text-align: center;
    }

    .div_message{
        border: 1px solid;
        width: 100%;
        text-align: center;
    }

    .div_button{
        border: 1px solid;
        width: 100%;
    }
`