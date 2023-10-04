import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { Toaster, toast } from 'sonner'
const host = process.env.REACT_APP_API_HOST

export const registerUser = createAsyncThunk(
    'user/register',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${host}/api/v1/auth/register/`,
                {
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,

                }
            );
            if (response.status === 201) {
                toast.success(response.data.message);
                return response.data.user;
            } else {
                toast.error(response.data.message);
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
            return rejectWithValue(error.response?.data?.message);
        }
    }
);



export const loginUser = createAsyncThunk(
    'user/login',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${host}/api/v1/auth/login/`,
                {
                    email: formData.email,
                    password: formData.password
                }
            )
            if (response.status === 200) {
                toast.success(response.data.message)
                localStorage.setItem('token', response.data.token)
                return response.data.user
            }
            else {
                toast.error(response.data.message)
                return rejectWithValue(response.data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message)
            return rejectWithValue(error.response?.data?.message)
        }
    }
)



export const sendResetPassword = createAsyncThunk(
    'user/sendresetpassword',
    async (email, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${host}/api/v1/auth/sendresetpasswordemail`,
                {
                    email: email,
                }
            );

            if (response.status === 200) {
                toast.success(response.data.message);
                return response.data;
            } else {
                toast.error(response.data.message);
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
            return rejectWithValue(error.response?.data?.message);
        }
    }
)



export const resetPassword = createAsyncThunk(
    'user/resetpassword',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `${host}/api/v1/auth/resetpassword`,
                {
                    email: formData.email,
                    password: formData.newPassword,
                    otpCode: formData.otp,

                }
            );

            if (response.status === 200) {
                toast.success(response.data.message);
                return response.data;
            } else {
                toast.error(response.data.message);
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
            return rejectWithValue(error.response?.data?.message);
        }
    }
)



