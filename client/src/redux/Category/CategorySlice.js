import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {getCategory} from './CategoryActions'

const initialState = {
    name: null,
    description:null,
    _id:null,
    relatedSkills: [],
    tags: [],
    loading: false, 
    error: null,
    category: [],

}


export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(getCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.category = action.payload;
                state._id=action.payload._id;
            }
            )
            .addCase(getCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }
            )
    }
})

export default categorySlice.reducer