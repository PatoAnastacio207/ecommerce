import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

export const userSlice = createSlice({
    name:"user",
    initialState:{
       user: null,
    },
    reducers:{
        login: (state,action)=>{
            state.user=action.payload
        
        },
        logout: (state)=>{
            state.user = null
        },
        updateData: (state, action) => {
            console.log(action.payload)
            state.user = action.payload
        }
    }
})
export const {login,logout,update,updateData}=userSlice.actions

export const selectUser = (state) => state.user.user;


export default userSlice.reducer