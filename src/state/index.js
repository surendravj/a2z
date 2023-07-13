import { configureStore } from '@reduxjs/toolkit'
import circleReducer from '../state/circle'
import userReducer from '../state/user'

export const store = configureStore({
  reducer: {
    circleReducer,
    userReducer
  }
})
