import { combineReducers } from 'redux'
import { changeLanguageReducer, toggleDarkModeReducer } from '../reducers/reducers'

export default combineReducers({
    toggleDarkModeReducer,
    changeLanguageReducer
})