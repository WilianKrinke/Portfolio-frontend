/* eslint-disable no-unused-vars */
import React, {createContext, useEffect, useState} from 'react'
import propTypes from 'prop-types'
import preAuth from '../utils/Auth/preAuth'
import baseUrl from '../utils/baseUrl';

const Context = createContext();

function AuthProvider({children}){    
    const [loading, setLoading] = useState(true);
    const [hours, setHours] = useState(0);  
    const [minutes, setMinutes] = useState(0);  
    const [seconds, setSeconds] = useState(0);  
    
    const states = {
        loading,
        setLoading,
        hours,
        minutes,
        seconds
    }

    useEffect(() => {
        
        
    }, [hours,minutes,seconds]);

    return (
    <Context.Provider value={{states}}>
        {children}
    </Context.Provider>
    )
}

AuthProvider.propTypes = {
    children: propTypes.any
}

export {Context, AuthProvider}