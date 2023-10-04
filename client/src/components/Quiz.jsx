import React, { useState } from 'react';


import MainLayout from "./Layout/MainLayout";

const Quiz = () => {
    const questions = [
        {
          question: "What is the capital of France?",
          options: ["London", "Madrid", "Paris", "Berlin"],
          correctAnswer: "Paris",
        },
        {
            question: "What is the capital of France?",
            options: ["London", "Madrid", "Paris", "Berlin"],
            correctAnswer: "Paris",
          },
          {
            question: "What is the capital of France?",
            options: ["London", "Madrid", "Paris", "Berlin"],
            correctAnswer: "Paris",
          },
          {
            question: "What is the capital of France?",
            options: ["London", "Madrid", "Paris", "Berlin"],
            correctAnswer: "Paris",
          },
        // Add more questions as needed
      ];
    
      // State to manage current question index and progress
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [progress, setProgress] = useState(0);
    
      // State to store selected answer
      const [selectedAnswer, setSelectedAnswer] = useState(null);
    
      // Function to handle option selection
      const handleOptionSelect = (option) => {
        setSelectedAnswer(option);
      };
    
      // Function to handle next question
      const handleNextQuestion = () => {
        if (selectedAnswer !== null) {
          setSelectedAnswer(null);
          setCurrentQuestion(currentQuestion + 1);
          setProgress(((currentQuestion + 1) / questions.length) * 100);
        } else {
          alert('Please select an option.');
        }
      };
    
      // Function to handle going back to previous question
      const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
          setCurrentQuestion(currentQuestion - 1);
          setProgress(((currentQuestion - 1) / questions.length) * 100);
        }
      };
    
      // Determine if there is a next question
      const hasNextQuestion = currentQuestion < questions.length - 1;
    
      return (
        <div className="max-w-xl mx-auto p-4 mt-9">
          {/* Progress Bar */}
          <div className="relative mb-4 h-4 bg-gray-300 rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
    
          {/* Question */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold">{questions[currentQuestion].question}</h2>
          </div>
    
          {/* Options */}
          <div className="grid grid-cols-1 gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className={`bg-white p-4 border rounded cursor-pointer ${

                  selectedAnswer === option ? ' bg-red-600 text-white' : ''

                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
    
          {/* Navigation Buttons */}
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
              <button className="bg-green-500 text-white py-2 px-4 rounded">Finish</button>
            )}
          </div>
        </div>
      );
    };
export default Quiz;
