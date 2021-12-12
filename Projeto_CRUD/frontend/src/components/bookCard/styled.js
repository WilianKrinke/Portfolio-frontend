import styled from 'styled-components'

export const CardStyled = styled.div`
    height: 440px;
    width: 350px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: #CCFFCB;
    transition: all .5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    
    :hover{
        background-color: #C2F7BE;
    }
`
export const ContainerMoldCard = styled.div`
    min-height: 400px;
    padding: 5px;
    border-radius: 5px 0px 0px 5px;
    transition: all .3s ease-in-out;
    width: ${props => props.isOpen ? '85%' : '95%'};
`

export const ContainerToLike = styled.div`
    transition: all .3s ease-in-out;
    width: ${props => props.isOpen ? '15%' : '5%'};
    height: 100%;
    border-radius: 0px 5px 5px 0px;
    background-color: #CCFFCB;
    display: flex;
    justify-content: ${props => props.isOpen ? 'space-evenly' : 'center'};
    align-items: center;
    flex-direction: column;
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    
`
export const IconToRight = styled.i`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80px;
    display: ${props => props.isOpen ? 'none' : 'static'};
    cursor: ${props => !props.isOpen && 'pointer'};
`

export const IconLike = styled.i`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${props => props.isLend ? 'not-allowed' :'pointer'};
    font-size: 24px;
    height: 80px;
    display: ${props => !props.isOpen ? 'none' : 'static'};
`

export const IconLendItem = styled.i`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
    height: 80px;
    display: ${props => !props.isOpen ? 'none' : 'static'};
`

export const IconNotAvailable = styled.i`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: not-allowed;
    height: 80px;
    color: red;
    display: ${props => !props.isOpen ? 'none' : 'static'};
`

export const IconItenBorrowedByUser = styled.i`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: not-allowed;
    font-size: 24px;
    height: 80px;
    display: ${props => !props.isOpen ? 'none' : 'static'};
`

export const FirstContainerInfo = styled.div`

        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        border: 1px solid;

    .image{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        img{
            width: 100px;
            height: 100%;
            object-fit: cover;
        }
    }

    .title_rating{
        width: 50%;
        height: 100%;
        border: 1px solid;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        text-align: center;
        line-height: 24px;

        h2{
            font-size: 18px;
            font-weight: 400;
            letter-spacing: 2px;
        }

        .rating{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            text-align: center;
            position: relative;
        }
    }
`

export const SecondContainerInfo = styled.div`
        width: 100%;
        min-height: 270px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        align-items: center;
        border: 1px solid;
        
        .container_author{
            width: 100%;
            border: 1px solid;
            text-align: left;
        }

        .container_category{
            width: 100%;
            border: 1px solid;
            text-align: left;
        }

        .container_see_more{
            width: 100%;
            border: 1px solid;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
        }

        .container_amount{
            width: 100%;
            border: 1px solid;
            text-align: left;
        }
`

export const ContainerResume = styled.div`
    width: 100%;
    min-height: 150px;
    border: 1px solid;
    text-align: left;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    align-items: center;
`

export const ParagraphResume = styled.p`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
`
