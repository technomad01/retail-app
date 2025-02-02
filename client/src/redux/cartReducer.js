import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.products.push(newItem);
    },

    removeItem: (state, action) => {
      const index = state.products.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});


export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;