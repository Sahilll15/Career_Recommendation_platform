import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { Toaster, toast } from 'sonner'
const host = process.env.REACT_APP_API_HOST


export const getQuiz = createAsyncThunk(
    'quiz/getquiz',
    async (catId, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${host}/api/v1/quiz/${catId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            if (response.status === 200) {
                console.log(response.data);
                toast.success(response.data.message);
                return response.data;
            } else {
                console.log('error');
                toast.error(response.data.message);
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
            return rejectWithValue(error.response?.data?.message);
        }
    }
)



export const evaluateQuiz = createAsyncThunk(
    'quiz/evaluatequiz',
    async (quizData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${host}/api/v1/quiz/evaluate`,
                {
                    quiz: quizData
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            if (response.status === 200) {
                console.log(response.data);
                toast.success(response.data.message);
                return response.data;
            } else {
                console.log('error');
                toast.error(response.data.message);
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
            return rejectWithValue(error.response?.data?.message);
        }
    }
)



export const getRecommendedArticles = createAsyncThunk(
    'quiz/getRecommendedArticles',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${host}/api/v1/rcmnd/${userId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            if (response.status === 200) {
                console.log(response.data);
                toast.success(response.data.message);
                return response.data;
            } else {
                console.log('error');
                toast.error(response.data.message);
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
            return rejectWithValue(error.response?.data?.message);
        }
    }
)

