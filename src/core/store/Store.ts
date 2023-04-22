import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {},
},
)

applyMiddleware(sagaMiddleware)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch