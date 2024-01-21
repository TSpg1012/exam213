import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slicer/slicer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})