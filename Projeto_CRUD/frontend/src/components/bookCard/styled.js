import styled from 'styled-components'

export const CardStyled = styled.div`
    min-height: 500px;
    width: 350px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: #CCFFCB;
    transition: all .3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    -webkit-box-shadow: 3px 3px 4px 1px rgba(0,0,0,0.16); 
    box-shadow: 3px 3px 4px 1px rgba(0,0,0,0.16);
    
    
`
export const ContainerMoldCard = styled.div`
    min-height: 500px;
    padding: 5px;
    border-radius: 5px 0px 0px 5px;
    transition: all .3s ease-in-out;
    width: ${props => props.isOpen ? '85%' : '95%'};
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`

export const ContainerToLike = styled.div`
    transition: all .3s ease-in-out;
    width: ${props => props.isOpen ? '15%' : '5%'};
    height: 500px;
    display: flex;
    justify-content: ${props => props.isOpen ? 'space-evenly' : 'center'};
    align-items: center;
    flex-direction: column;
    background: ${props => props.isOpen ? '#FE6B0A' : '#CCFFCB'};
    border-radius: 0px 5px 5px 0px;
    
    
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
        height: 270px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        align-items: center;
        transition: all .3s ease-in-out;
        
        
        .container_author{
            width: 100%;            
            text-align: left;
            padding: 0px 5px;
        }

        .container_category{
            width: 100%;            
            text-align: left;
            padding: 0px 5px;
        }

        .container_see_more{
            width: 100%;           
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
        }

        .container_amount{
            width: 100%;            
            text-align: left;
            padding: 0px 5px;
        }
`

export const ContainerResume = styled.div`
    width: 100%;
    min-height: 160px    
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
    -webkit-line-clamp: ${props => props.seeMore ? '8' : '3'};;
    -webkit-box-orient: vertical;
    padding: 0px 5px;
    transition: all .3s ease-in-out;
`


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
