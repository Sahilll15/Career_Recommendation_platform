import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Toaster, toast } from 'sonner'
const host = process.env.REACT_APP_API_HOST

export const getCategory = createAsyncThunk(
    'category',
    async (searchTerm, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${host}/api/v1/category`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            }
            else {
                console.log('error');
                return rejectWithValue(response.data.message);
            }

        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    }

)

export const createCategory=createAsyncThunk(
    'category/intrest',
    async({interestCategory,userId},{rejectWithValue})=>{
        try {
            const payloadData = {
                user: userId,
                interestCategory: interestCategory
            }
            const response = await axios.patch(`${host}/api/v1/interests`,{
                payloadData
            } ,{
                
                
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            }
            else {
                console.log('error');
                return rejectWithValue(response.data.message);
            }

        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
)