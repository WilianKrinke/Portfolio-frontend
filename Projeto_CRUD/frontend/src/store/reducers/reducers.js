import initialStates from '../initialStates/initialStates'
import typeActions from '../typeActions/typeActions'

export const toggleDarkModeReducer = (state = initialStates, action) => {
    switch (action.type) {
        case typeActions.CHANGE_MODE:

            console.log(action.payload)
            console.log(state.darkMode)

            return {
                ...state,
                darkMode: !state.darkMode
            }
    
        default:
            return state;
    }
}