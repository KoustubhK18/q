import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    isLoginPage: true,
    isSignupPage: false
};

const pageStatus = createSlice({
    name: 'pageStatus',
    initialState,
    reducers: {
        setLogin: (state, action)=>{
            state.isLoggedIn = action.payload;
        },
        toggleLoginSignupPage: (state, action) => {
            state.isLoginPage = action.payload.loginClicked;
            state.isSignupPage = action.payload.signupClicked;
        }
    }
});

export const {setLogin, toggleLoginSignupPage} = pageStatus.actions;

export default pageStatus.reducer;