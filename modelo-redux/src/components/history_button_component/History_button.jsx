import React from 'react';
import {useNavigate} from "react-router-dom"


const HistoryButton = ({path,btnTitle}) => {

    const history = useNavigate()

    const toPage = (e) => {
        e.preventDefault()
        history(path)
    }

    return (
        <>
            <button onClick={(e) => toPage(e)}>{btnTitle}</button>
        </>
    );
}

export default HistoryButton;
