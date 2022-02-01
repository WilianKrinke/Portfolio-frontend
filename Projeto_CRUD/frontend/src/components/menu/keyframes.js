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

export const ShowHamb = keyframes`
    0%{
        display: none;
        opacity: 0;
    }

    60%{
        opacity: 1;
    }

    100%{
        display: fixed;
        opacity: 1;
    }
`

export const HideHamb = keyframes`
    0%{
        display: fixed;
        opacity: 1;
    }

    60%{
        opacity: 0;
    }

    100%{
        display: none;
        opacity: 0;
    }
`
    