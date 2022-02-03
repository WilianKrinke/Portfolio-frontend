import initialStates from '../initialStates/initialStates'
import typeActions from '../typeActions/typeActions'

export const toggleDarkModeReducer = (state = initialStates, action) => {
    switch (action.type) {
        case typeActions.CHANGE_MODE:
            sessionStorage.setItem('dark', !state.darkMode)
            return {
                darkMode: !state.darkMode
            }
    
        default:
            return state;
    }
}