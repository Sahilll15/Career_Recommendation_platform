import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, resetPassword, sendResetPassword } from "./authActions";

const initialState = {
    user: null,
    isAuth: false,
    loading: false,
    error: null
}


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builders) => {
        builders.addCase(registerUser.pending, (state, action) => {
            state.loading = true;
        })
        builders.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuth = true;
        })
        builders.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        //login
        builders.addCase(loginUser.pending, (state, action) => {
            state.loading = true;
        })
        builders.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.isAuth = true;
        })
        builders.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        //reset password
        builders.addCase(resetPassword.pending, (state, action) => {
            state.loading = true;
        })

        builders.addCase(resetPassword.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuth = true;
        })
        builders.addCase(resetPassword.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        //send reset password email
        builders.addCase(sendResetPassword.pending, (state, action) => {
            state.loading = true;
        })

        builders.addCase(sendResetPassword.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuth = true;
        })
        builders.addCase(sendResetPassword.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })


    }

})

export default authSlice.reducer;