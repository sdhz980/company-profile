import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface GlobalInitialState {
    store: {
        roleMember: string[];
        memberTeam : any;
        isNavbarMobile : boolean;
        navbarDarkTheme : boolean;
        navbarMobileShow : boolean;
    }
}

const initialState : GlobalInitialState = {
   store: {
        roleMember: ["CEO","CTO","SEO","OB","Employee"],
        memberTeam: [],
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
        },

        setTeamMember : (state , action : PayloadAction<any>) => {
            state.store.memberTeam = (action.payload);
        },
        getTeamMemberLength : (state) => {
            state.store.memberTeam.length;
        }
    }
})

export const { setNavbarTheme , setNavbarMobile , setTeamMember , getTeamMemberLength } = global.actions;
export default global.reducer;