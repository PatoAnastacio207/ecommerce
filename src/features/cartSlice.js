import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const getTotal = (items) => {
  console.log("items", items);
  items.forEach((item) => {
    console.log(item);
  });
  return 123;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: {
      items: [],
      total: 0,
    },
  },
  reducers: {
    populate: (state, action) => {
      state.cart = action.payload;
    },
    add: (state, action) => {
        let cart = state.cart
        if (!state.cart.items.some(e => e._id === action.payload.product._id)) {
            cart.items.push({quantity: parseInt(action.payload.quantity), ...action.payload.product})
            cart.total += parseInt(action.payload.quantity) * action.payload.product.price
        }
        state.cart = cart
    },
    remove: (state, action) => {
        let total = state.cart.total
        const items = state.cart.items.filter((item) => {
            if (item._id === action.payload.product._id) {
                total -= item.price * item.quantity
                return false
            } else return true
        })
        state.cart = { items, total }
    },
    edit: (state, action) => {
        // Cambiar la quantity de un item
        const items = state.cart.items
        let total = state.cart.total
        items.forEach((item, index) => {
            if(item._id === action.payload._id) {
                total -= item.price * item.quantity
                items[index].quantity = parseInt(action.payload.quantity)
                total += item.price * item.quantity
            }
        })
        state.cart = { items, total }
    },
    empty:(state, action) => {
      state.cart = {
        items: [],
        total: 0,
      }
    }
  },
});
export const { populate, remove, add, edit, empty, checkout } = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;
