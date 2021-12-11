/* eslint-disable no-unused-vars */
import React, {createContext, useEffect, useState} from 'react'
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

    useEffect(() => {
        console.log('Mostrando useEffect do Auth Context')
    }, []);

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