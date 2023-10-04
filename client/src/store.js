import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from './redux/Auth/authSlice'
import groupReducer from './redux/community/CommunitySlice'






const store = configureStore({
    reducer: {
        // reducer
        auth: authReducer,
        group: groupReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})


export default store;