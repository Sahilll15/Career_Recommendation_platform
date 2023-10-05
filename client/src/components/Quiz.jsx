import React, { useEffect, useState } from 'react';
import MainLayout from "./Layout/MainLayout";
import { getQuiz,evaluateQuiz } from '../redux/Quiz/quizActions';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedInUser } from '../redux/Auth/authActions';

const Quiz = () => {
  const dispatch = useDispatch();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0); // Step 1: Initialize score
  const user = useSelector((state) => state.auth.user);

  // Access the questions from the Redux store
  const quizData = useSelector((state) => (state.quiz && state.quiz.quiz && state.quiz.quiz[0]) || {});

  const questions = quizData.questions || [];

  const handleOptionSelect = (option) => {
    setSelectedAnswer(option);
  };



  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      // Step 2: Check if the selected answer is correct and update the score
      if (selectedAnswer === questions[currentQuestion].correctAns) {
        setScore(score + 1);
      }
      setSelectedAnswer(null);
      setCurrentQuestion(currentQuestion + 1);
      setProgress(((currentQuestion + 1) / questions.length) * 100);
    } else {
      alert('Please select an option.');
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setProgress(((currentQuestion - 1) / questions.length) * 100);
    }
  };

  // Check if questions array is empty
  const hasNextQuestion = currentQuestion < questions?.length - 1 && questions?.length > 0;

  useEffect(() => {

    if (user) {
      console.log(user?.intrestedCategory[0]);
      console.log('hello');
      dispatch(getQuiz(user?.intrestedCategory[0]));
    }
  }, [dispatch, user]);

  const handleSubmit = () => {
    dispatch(getQuiz(questions[0]._id,user?.id,score));
  }
  if (!user) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-20 w-20"></div>
        <div>Loading Quiz....</div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-20 w-20"></div>
        <div>No Quiz Found....</div>
      </div>
    );
  }

 

  return (
    <div className="max-w-xl mx-auto p-4 mt-9">
      <div className="relative mb-4 h-4 bg-gray-300 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          {questions[currentQuestion]?.questionText}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {questions[currentQuestion]?.options.map((option, index) => (
          <div
            key={index}
            className={`bg-white p-4 border rounded cursor-pointer ${selectedAnswer === option ? 'bg-red-600 text-white' : ''}`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        {currentQuestion > 0 && (
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handlePreviousQuestion}
          >
            Back
          </button>
        )}
        {hasNextQuestion && (
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleNextQuestion}
          >
            Next
          </button>
        )}
        {!hasNextQuestion && (
          <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={handleSubmit}>Finish</button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
