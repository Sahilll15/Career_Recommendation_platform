import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from './redux/Auth/authSlice'
import groupReducer from './redux/community/CommunitySlice'
import quizReducer from './redux/Quiz/quizSlice'
import productReducer from './redux/posts/postSlice'
import categoryReducer from './redux/Category/CategorySlice'






const store = configureStore({
    reducer: {
        // reducer
        auth: authReducer,
        group: groupReducer,
        quiz: quizReducer,
        posts: productReducer,
        category: categoryReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})


export default store;