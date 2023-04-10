import { configureStore } from '@reduxjs/toolkit'
import boolStateReducer from "../features/bool/boolStatesChange"
import counterReducer from "../features/counter/counterSlice"
import objectReducer from "../features/object-state/object-state"

export default configureStore({
  reducer: {
    boolState: boolStateReducer,
    counter: counterReducer,
    objectState: objectReducer
  }
})