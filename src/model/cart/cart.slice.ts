import { createSlice } from "@reduxjs/toolkit";

export type CartInitStateType = {
  count: string
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    count: 0
  },
  reducers: {
  }
})

export default cartSlice.reducer
