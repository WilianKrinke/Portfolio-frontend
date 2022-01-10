import styled from 'styled-components'

export const BorrowedBookCard = styled.article`
    border: 1px solid;
    height: 330px;
    width: 85%;
    margin: 10px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: row nowrap;
    border-radius: 3px;
`

export const ContainerTitle = styled.div`
    padding: 10px;
    height: 100%;
    width: 25%;
    border: 1px solid;

    .divimg{
        border: 1px solid;
        height: 75%;
    }

    .divtitle{
        border: 1px solid;
        height: 15%;
    }

    .divrating{
        border: 1px solid;
        height: 10%;
    }
`

export const ContainerResume = styled.div`
    padding: 10px;
    height: 100%;
    width: 65%;
    border: 1px solid;
`

export const ContainerActions = styled.div`
    padding: 10px;
    height: 100%;
    width: 10%;
    border: 1px solid;
`