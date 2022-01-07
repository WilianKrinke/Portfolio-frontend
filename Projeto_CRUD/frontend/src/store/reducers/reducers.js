import initialStates from '../initialStates/initialStates'
import typeActions from '../typeActions/typeActions'

export const toggleLoading = (state = initialStates, action) => {
    switch (action.type) {
        case typeActions.TOGGLE_LOADING:
            return {
                ...state,
                loading: false
            }
    
        default:
            return state;
    }
}