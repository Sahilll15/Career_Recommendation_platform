import React from "react";
import { NavLink } from "react-router-dom";

const PersonalResult = () => {

  const results = [
    { subject: "Math", score: 90 },
    { subject: "Science", score: 85 },
    { subject: "History", score: 95 },
    { subject: "English", score: 80 },
  ];
  const skills = [
    { subject: "PERSONALITY ASSESSMENT", progress: 80 },
    { subject: "INTEREST ASSESSMENT", progress: 60 },
    { subject: "APTITUDE TEST", progress: 90 }
  ];
  return (
    <div>
      <div className="max-w-md mx-auto p-4 bg-blue-100 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Assessment Results</h2>
        {results.map((result, index) => (
          <div key={index} className="flex justify-between mb-2">
            <span>{result.subject}</span>
            <span>{result.score}</span>
          </div>
        ))}
      </div>

      <div className="max-w-md mx-auto bg-white rounded p-6 mt-6 flex items-center">
        <h2 className="text-xl font-bold mb-4 mr-4">Download Assessment Result &nbsp;<i className="fa-solid fa-file-arrow-down text-blue-700 fa-xl"></i></h2>
      </div>

      <NavLink to='https://cv-host.netlify.app/form'>
      <div className="max-w-md mx-auto bg-white rounded p-6 mt-6 flex items-center">
        <h2 className="text-xl font-bold mb-4 mr-4">Get Your Resume &nbsp;<i className="fa-solid fa-file-arrow-down text-blue-700 fa-xl"></i></h2>
      </div>
      </NavLink>

      {skills.map((skill, index) => (
        <div key={index} className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden mx-auto my-4">
          <div className="px-4 py-2">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{skill.subject}</h2>
            <div className="flex items-center">
              <div className="text-sm text-gray-600 mr-2">Progress</div>
              <div className="text-sm text-blue-500 font-semibold">{skill.progress}%</div>
            </div>
            <div className="w-full bg-gray-300 mt-2 h-2 rounded-full">
              <div style={{ width: `${skill.progress}%` }} className="bg-blue-500 h-full rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalResult;
