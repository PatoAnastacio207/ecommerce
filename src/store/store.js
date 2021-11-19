import {configureStore} from "@reduxjs/toolkit"
import useReducer from "../features/userSlice"
import cartReducer from "../features/cartSlice"
//import logger from "redux-logger"


export default configureStore ({
   // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer:{
        user: useReducer,
        cart: cartReducer,
    }
})