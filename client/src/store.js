import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from './redux/Auth/authSlice'
import groupReducer from './redux/community/CommunitySlice'
import quizReducer from './redux/Quiz/quizSlice'






const store = configureStore({
    reducer: {
        // reducer
        auth: authReducer,
        group: groupReducer,
        quiz: quizReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})


export default store;