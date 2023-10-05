import { createSlice } from "@reduxjs/toolkit";

import { getQuiz, getRecommendedArticles } from './quizActions'

const initialState = {
    quiz: null,
    loading: false,
    error: null,
    articles: []
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


        builders.addCase(getRecommendedArticles.pending, (state, action) => {
            state.loading = true;
        })

        builders.addCase(getRecommendedArticles.fulfilled, (state, action) => {
            state.loading = false;
            state.articles = action.payload;
        })

        builders.addCase(getRecommendedArticles.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default quizSlice.reducer;


