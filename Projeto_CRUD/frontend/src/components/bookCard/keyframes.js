import {keyframes} from 'styled-components'

export const SeeMoreAnimation = keyframes`   
    to{        
        transform: rotate(180deg)
    }

`

export const SeeLessAnimation = keyframes`
    from{
        transform: rotate(180deg)
    }

    to{
        transform: rotate(0deg)
    }

`