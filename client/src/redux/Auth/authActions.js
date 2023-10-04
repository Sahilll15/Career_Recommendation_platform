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
    async ({ email, otpFormData }, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${host}/api/v1/auth/resetpassword`,
                {
                    email: email,
                    password: otpFormData.password,
                    otpCode: otpFormData.otp,

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





export const getLoggedInUser = createAsyncThunk(
    'user/getloggedinuser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${host}/api/v1/auth/getloggedinuser/`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            } else {
                console.log('error');
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
)