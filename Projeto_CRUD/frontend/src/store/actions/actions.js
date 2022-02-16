import typeActions from '../typeActions/typeActions'

export const toggleLoading = () => ({
    type: typeActions.CHANGE_MODE,
})

export const toggleLanguage = (language) => ({
    type: typeActions.CHANGE_LANGUAGE,
    payload: language
})