import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface GlobalInitialState {
    store: {
        isNavbarMobile : boolean;
        navbarDarkTheme : boolean;
        navbarMobileShow : boolean;
    }
}

const initialState : GlobalInitialState = {
   store: {
        isNavbarMobile : false,
        navbarDarkTheme : false,
        navbarMobileShow : false
   }
}

export const global = createSlice({
    name: "global",
    initialState,
    reducers: {
        setNavbarTheme : (state , action : PayloadAction<boolean>) => {
            state.store.navbarDarkTheme = action.payload;
        },

        setNavbarMobile : (state , action : PayloadAction<boolean>) => {
            state.store.navbarMobileShow = action.payload;
        }

        // setLoading: (state,action : PayloadAction<string>) => {
        //     state.app = action.payload;
        // }
    }
})

export const { setNavbarTheme , setNavbarMobile } = global.actions;
export default global.reducer;