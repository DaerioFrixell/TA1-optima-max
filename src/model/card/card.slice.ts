import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardsType } from "../../dataTypes/CardsList";
import { CardInitStateType } from "./card.types";


const initialState: CardInitStateType = {
  isLoading: false,
  cards: null,
  error: null
}

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    fetch(state) {
      state.isLoading = true
    },
    success(state, action: PayloadAction<CardsType>) {
      state.isLoading = false
      state.cards = action.payload
      state.error = null
    },
    error(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.cards = null
      state.error = action.payload
    },
    increaseCardQuantity(state, action: PayloadAction<number>) {
      state.cards?.map(card => {
        if (action.payload === card.id) card.quantity += 1
        return null
      })
    },
    decreaseCardQuantity(state, action: PayloadAction<number>) {
      state.cards?.map(card => {
        if (action.payload === card.id) {
          card.quantity -= 1
          if (card.quantity < 0) { card.quantity = 0 }
        }
        return null
      })
    },
    clearQuantityCards(state, action: unknown) {
      state.cards?.map(el => el.quantity = 0)
    }
  }
})

export default cardSlice.reducer