import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface GlobalInitialState {
    store: {
        isNavbarMobile : boolean;
        navbarDarkTheme : boolean;
    }
}

const initialState : GlobalInitialState = {
   store: {
        isNavbarMobile : false,
        navbarDarkTheme : false
   }
}

export const global = createSlice({
    name: "global",
    initialState,
    reducers: {
        setNavbarTheme : (state , action : PayloadAction<boolean>) => {
            state.store.navbarDarkTheme = action.payload;
        }

        // setLoading: (state,action : PayloadAction<string>) => {
        //     state.app = action.payload;
        // }
    }
})

export const { setNavbarTheme } = global.actions;
export default global.reducer;