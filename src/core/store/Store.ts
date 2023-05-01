import { configureStore, combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import cartSlice from '../../model/cart/cart.slice'
import cardSlice from '../../model/card/card.slice'
import rootSaga from '../saga/saga'
import { cardApi } from '../../model/card/card.service'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  cart: cartSlice,
  cards: cardSlice,
  [cardApi.reducerPath]: cardApi.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    sagaMiddleware,
    cardApi.middleware)
});

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch