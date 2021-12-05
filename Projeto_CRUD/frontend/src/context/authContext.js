/* eslint-disable no-unused-vars */
import React, {createContext, useEffect, useState} from 'react'
import propTypes from 'prop-types'
import baseUrl from '../utils/baseUrl';

const Context = createContext();

function AuthProvider({children}){
    
    const [authenticated, setAutheticated] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const states = {
        authenticated,
        setAutheticated,
        loading,
        setLoading
    }

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