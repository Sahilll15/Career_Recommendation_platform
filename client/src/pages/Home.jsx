
import React, { useEffect } from 'react'
import MainLayout from '../components/Layout/MainLayout'
import { getRecommendedArticles } from '../redux/Quiz/quizActions';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedInUser } from '../redux/Auth/authActions';
import ArticleComponent from '../components/ArticlesComponent';


const Home = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state?.auth?.user?._id);
    const articles = useSelector((state) => state?.quiz?.articles);
    useEffect(() => {
        if (user) {
            dispatch(getRecommendedArticles(user));
        }


    }, [dispatch, user])
    return (
        <MainLayout>

            <ArticleComponent articles={articles} />

        </MainLayout>
    )
}

export default Home