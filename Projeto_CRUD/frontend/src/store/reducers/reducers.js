import initialStates from '../initialStates/initialStates'
import typeActions from '../typeActions/typeActions'

export const toggleLoadingReducer = (state = initialStates, action) => {
    switch (action.type) {
        case typeActions.CHANGE_LOADING:

            console.log(action.payload)
            console.log(state.loading)

            return {
                ...state,
                loading: action.payload
            }
    
        default:
            return state;
    }
}