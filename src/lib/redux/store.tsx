import { configureStore } from "@reduxjs/toolkit";
import globalReducer  from "./globalSlicer";


export const globalStore = configureStore({
    reducer: {
        globalReducer
    }
})

export type RootState = ReturnType<typeof globalStore.getState>; 
export type AppDispatch = typeof globalStore.dispatch;