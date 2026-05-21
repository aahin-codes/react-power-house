import { configureStore } from "@reduxjs/toolkit";
import hooksReducer from './slice/hookSlice'

export const store = configureStore({
    devTools:true,
    reducer:{
        hooks: hooksReducer
    }
})