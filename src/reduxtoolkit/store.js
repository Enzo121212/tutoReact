import { configureStore } from "@reduxjs/toolkit";
import mySlicetodo from "./todoSlice";

export const  store = configureStore({
    reducer:{
        mySlice : mySlicetodo
    }
})
