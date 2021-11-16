import {createSlice} from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
       cart: {
           items: [],
           total: 0
       }
    },
    reducers:{
        buy: (state,action)=>{
            state.cart = action.payload
        },
        borrar: (state,action)=>{
            state.cart = action.payload
        },
        add: (state,action)=>{
            state.cart = action.payload
        },
        edit: (state,action)=>{
            state.cart = action.payload
        },
        empty: (state,action)=>{
            state.cart = {
                items: [],
                total: 0
            }
        }
    }
})
export const {buy,borrar,add,edit,empty}=cartSlice.actions

export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer