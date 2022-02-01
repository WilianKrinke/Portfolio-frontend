import {keyframes} from 'styled-components'

export const turnOn = keyframes`
    from{
        transform: rotate(0deg)
    }

    to{
        transform: rotate(180deg)
    }

`

export const turnOff = keyframes`
    from{
        transform: rotate(180deg)
    }

    to{
        transform: rotate(0deg)
    }

`
    