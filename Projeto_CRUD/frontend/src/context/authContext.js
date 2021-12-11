/* eslint-disable no-unused-vars */
import React, {createContext, useState} from 'react'
import propTypes from 'prop-types'

const Context = createContext();

function AuthProvider({children}){
    
    const [loading, setLoading] = useState(true);
    const [userDatasReceived, setuserDatasReceived] = useState({
        userName: 'Loading...',
        userId: 'Loading...'
    });
    
    const states = {
        loading,
        setLoading,
        userDatasReceived,
        setuserDatasReceived
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