import styled from 'styled-components'
import {FaHeart} from 'react-icons/fa'

export const ContainerCard = styled.article`
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    width: 300px;
    height: 500px;
    margin: 10px;

    @media screen and (max-width: 470px) {
        margin: 10px 0px;
        width: 98%;
    }
`

export const ContainerTitle = styled.div`
    border: 1px solid;
    height: 60%;
`

export const Icon = styled(FaHeart)`
    font-size: 28px;
    position: relative;
    top: 20px;
    left: 280px;
`