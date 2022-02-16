import Cookies from 'js-cookie'
import initialStates from '../initialStates/initialStates'
import typeActions from '../typeActions/typeActions'

export const toggleDarkModeReducer = (state = initialStates, action) => {
    switch (action.type) {
        case typeActions.CHANGE_MODE:
            Cookies.set('dark', !state.darkMode,{ expires: 7, path: '' })
            return {
                ...state,
                darkMode: !state.darkMode
            }
    
        default:
            return state;
    }
}

export const changeLanguageReducer = (state = initialStates, action) => {
    switch (action.type) {
        case typeActions.CHANGE_LANGUAGE:
            Cookies.set('languageObject', action.payload,{ expires: 7, path: '' })
            return {
                ...state,
                languageObject: action.payload
            }
    
        default:
            return state;
    }
}