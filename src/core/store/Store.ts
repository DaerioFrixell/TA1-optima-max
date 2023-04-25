import { configureStore, combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import cartSlice from '../../model/cart/cart.slice'
import cardSlice from '../../model/card/card.slice'
import rootSaga from '../saga/saga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  cart: cartSlice,
  card: cardSlice,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch