import {createSlice} from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
       cart: []
    },
    reducers:{
        buy: (state,action)=>{
            state.cart = action.payload
        }
    }
})
export const {buy}=cartSlice.actions

export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer