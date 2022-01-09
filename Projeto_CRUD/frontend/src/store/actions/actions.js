import typeActions from '../typeActions/typeActions'

export const toggleLoading = (condition) => ({
    type: typeActions.TOGGLE_LOADING,
    payload: condition
})