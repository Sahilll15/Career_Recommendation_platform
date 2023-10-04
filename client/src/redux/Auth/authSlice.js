import { createSlice } from "@reduxjs/toolkit";

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
    extraReducers: {

    }

})

export default authSlice.reducer;