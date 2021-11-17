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
            let total = 0
           const items = state.cart.items.map(item=>{
                if(item._id===action.payload._id){
                    item.quantity=action.payload.quantity 
                }  
                total += item.quantity*item.price
                console.log("total",total)
                return item
            })
            state.cart = {items, total}
        },
        empty: (state,action)=>{
            state.cart = {
                items: [],
                total: 0
            }
        },
        checkout: (state,action) =>{
            let compras = []
            state.cart = compras.push(action.payload)
        }
    }
})
export const {buy,borrar,add,edit,empty,checkout}=cartSlice.actions

export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer