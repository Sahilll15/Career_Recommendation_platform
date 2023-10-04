import { createSlice } from "@reduxjs/toolkit";

import { getQuiz } from './quizActions'

const initialState = {
    quiz: null,
    loading: false,
    error: null
}


export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {

    },
    extraReducers: (builders) => {
        builders.addCase(getQuiz.pending, (state, action) => {
            state.loading = true;
        })
        builders.addCase(getQuiz.fulfilled, (state, action) => {
            state.loading = false;
            state.quiz = action.payload;
        })
        builders.addCase(getQuiz.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default quizSlice.reducer;
