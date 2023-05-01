import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ArrItemsinCartType, CartInitStateType, itemInCartType } from "./cart.types";


const initialState: CartInitStateType = {
  cart: [],
  totalQuantity: 0
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addInCart(state, action: PayloadAction<itemInCartType>) {
      if (!state.cart.length) {
        // console.log("массив пустой. Создаю первый элемент")
        action.payload.quantity = 1
        state.cart?.push(action.payload)
        return
      }

      state.cart.find(el => {
        if (el.id === action.payload.id) {
          // console.log("товар существует, увеличиваю кол-во")
          el.quantity++
        }
        return null
      })

      const existingCartItem = state.cart.find(el => el.id === action.payload.id);
      if (!existingCartItem) {
        // console.log("товар не существует. Создаю новый товар")
        action.payload.quantity = 1
        state.cart?.push(action.payload)
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter(el => el.id !== action.payload);
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
      })
    },

    countTotalQuantity(state, action) {
      state.cart.map(el => {
        if (action.payload === el.id) {
          state.totalQuantity += el.quantity
        }
        return null
      })
    },

    fixTotalQuantity(state, action) {
      state.cart.map(el => {
        if (action.payload === el.id) {
          state.totalQuantity -= el.quantity
        }
        return null
      })
    },

  }
})

export default cartSlice.reducer
