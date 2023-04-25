import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardsType } from "../../dataTypes/CardsList";


export type CardInitStateType = {
  cards: CardsType | null
  isLoading: boolean,
  error: string | null
}

const initialState: CardInitStateType = {
  isLoading: false,
  cards: null,
  error: null
}

export const cardSlice = createSlice(
  {
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
    }
  })

export default cardSlice.reducer