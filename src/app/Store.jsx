import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "../features/Slice"
export const store = configureStore({
    reducer:{
        allcarts:cartReducers,  
    }
}) 