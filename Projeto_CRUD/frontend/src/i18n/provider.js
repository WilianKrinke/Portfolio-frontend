import propTypes from 'prop-types'
import React, { Fragment } from 'react'
import { IntlProvider } from 'react-intl'

const Provider = ({children, locale}) => (    
    <IntlProvider 
        locale={locale} 
        textComponent={Fragment}
        messages={messages[locale]}        
        >
        {children}
    </IntlProvider>
)

Provider.propTypes = {
    children: propTypes.node,
    locale: propTypes.string
}

export default Provider;