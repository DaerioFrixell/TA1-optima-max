import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartInitStateType, itemInCartType } from "./cart.types";


const initialState: CartInitStateType = {
  cart: []
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addInCart(state, action: PayloadAction<itemInCartType>) {
      if (!state.cart.length) {
        action.payload.quantity = 1
        state.cart?.push(action.payload)
        return
      }

      state.cart.find(el => {
        if (el.id === action.payload.id) {
          el.quantity++
        }
        return null
      })

      const existingCartItem = state.cart.find(el => el.id === action.payload.id);
      if (!existingCartItem) {
        action.payload.quantity = 1
        state.cart?.push(action.payload)
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter(el => el.id !== action.payload);
    },

    clearCart(state, action: unknown) {
      state.cart = []
    },

    increaseCartQuantity(state, action: PayloadAction<number>) {
      state.cart?.map(el => {
        if (action.payload === el.id) el.quantity += 1
        return null
      })
    },

    decreaseCartQuantity(state, action: PayloadAction<number>) {
      state.cart?.map(el => {
        if (action.payload === el.id) {
          el.quantity -= 1
          if (el.quantity < 0) { el.quantity = 0 }
          return null
        }
        return null
      })
    }
  }
})

export default cartSlice.reducer
