import typeActions from '../typeActions/typeActions'

export const toggleLoading = (condition) => ({
    type: typeActions.CHANGE_MODE,
    payload: condition
})