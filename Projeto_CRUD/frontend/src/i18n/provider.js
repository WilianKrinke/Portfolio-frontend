import propTypes from 'prop-types'
import React, { Fragment } from 'react'
import { IntlProvider } from 'react-intl'
import { locales } from './locales'
import messages from './messages'

const Provider = ({children, locale = locales.english}) => (    
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