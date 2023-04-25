import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CartInitStateType = {
  count: string
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    count: 0
  },
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload
    },
    decrement(state, action: PayloadAction<number>) {
      state.count -= action.payload
    }
  }
})

export default cartSlice.reducer
