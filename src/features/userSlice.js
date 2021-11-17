import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name:"user",
    initialState:{
       user: null,
    },
    reducers:{
        login: (state,action)=>{
            //state.user.checkoutInfo=action.payload.checkoutInfo
            state.user=action.payload
        
        },
        logout: (state)=>{
            state.user = null
        },
        

    }
})
export const {login,logout,update}=userSlice.actions

export const selectUser = (state) => state.user.user;


export default userSlice.reducer