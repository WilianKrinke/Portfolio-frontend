import styled from 'styled-components'

export const BookListMain = styled.main`
    max-width: 100vw;
    min-height: 300px;
    background-color: ${props => props.$darkmode ? "#0e1324" : "#F9FFF9"};      
    transition: all .7s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;

    @media screen and (max-width: 440px) {
        padding: 10px 0px;
    }  
`

export const BookListSection = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    padding: 10px;    
`

export const BookArticle = styled.article`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all .3s ease-in-out;
`

export const BookListArticle = styled.article`
    min-height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;

        i{
            cursor: pointer;
            font-size: 24px;
            position: relative;
            top: 10px;
        }
    }
`

export const LendButton = styled.div`
    background-color: rgba(89, 198, 255, 0.61);
    border-radius: 5px;
    transition: all .3s ease-in-out;
    width: 150px;
    margin: 0px auto;
    cursor: pointer;

    :hover {
        background-color: #2D5CFF;
    }
`




