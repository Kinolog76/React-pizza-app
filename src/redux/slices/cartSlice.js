import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "cart",
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size,
      );
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
    },
    removeItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count -= 1;
      }
      if (findItem.count === 0) {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
      }
      state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    cartRemoveItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      console.log(action.payload);
      if (findItem) {
        findItem.count -= 1;
      }
      if (findItem.count === 0) {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
      }
      state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
    },
    cartAddItem(state, action) {
      const existingItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size,
      );
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
    },
    cartClearItem(state, action) {
      const index = state.items.findIndex((obj) => obj.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
      state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price, 0);
    },
  },
});

export const { addItem, removeItem, clearItems, cartRemoveItem, cartAddItem, cartClearItem } =
  cartSlice.actions;

export default cartSlice.reducer;
