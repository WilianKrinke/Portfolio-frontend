import { createSlice } from '@reduxjs/toolkit'

export const boolStatesChange = createSlice({
    name:"boolState",
    initialState:{
        value: 3453
    },
    reducers:{
        changeTo: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {changeTo} = boolStatesChange.actions

export default boolStatesChange.reducer