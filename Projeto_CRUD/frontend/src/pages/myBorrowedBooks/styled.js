import styled from 'styled-components'
import {HeaderStyled} from '../../primeComponents/index'

export const SectionContainer = styled.section`
    max-width: 100vw;
    min-height: 70vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column nowrap;
    padding: 10px;
`

export const HeaderBorrowedList = styled(HeaderStyled)`
    min-height: 22vh; 

    @media screen and (max-width: 900px) {
        text-align: center;
        position: relative;
        top: 50px;
        margin-bottom: 40px;
    }

`