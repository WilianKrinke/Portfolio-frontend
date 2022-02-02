import styled from 'styled-components'
import { GoArrowUp } from "react-icons/go";

export const ScrollArrow = styled(GoArrowUp)`
    position: fixed;
    right: 20px;
    bottom: 53px;
    font-size: 52px;
    cursor: pointer;
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"};
`

export const Phrase = styled.p`
    position: fixed;
    right: 33px;
    bottom: 46px;
    font-size: 14px;
    color: ${props => props.$darkmode ? "#F9FFF9" : "#0a0a0a"};
`

