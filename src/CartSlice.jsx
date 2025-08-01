import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      let newItem = {
        name: action.payload.name,
        image: action.payload.image,
        cost: action.payload.cost,
        quantity: 1,
      };

      let existingItem = state.items.find(item => item.name === newItem.name);

      if (existingItem) {
        existingItem.quantity++
      } else {
        state.items.push(newItem);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
      let existingItem = state.items.find(item => action.payload.name === item.name);

      if (existingItem) {
        existingItem.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
