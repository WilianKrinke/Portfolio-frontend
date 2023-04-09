import { configureStore } from '@reduxjs/toolkit'
import boolStateReducer from "../features/bool/boolStatesChange"
import counterReducer from "../features/counter/counterSlice"

export default configureStore({
  reducer: {
    boolState: boolStateReducer,
    counter: counterReducer
  }
})