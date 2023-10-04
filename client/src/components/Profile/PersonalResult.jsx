import React from "react";

const PersonalResult = () => {
  const results = [
    { subject: "Math", score: 90 },
    { subject: "Science", score: 85 },
    { subject: "History", score: 95 },
    { subject: "English", score: 80 },
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
        <h2 className="text-xl font-bold mb-4 mr-4">Download Assessment Result</h2>
        <button
          id="downloadBtn"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          <i className="fas fa-file-download"></i> 
        </button>
      </div>
    </div>
  );
};

export default PersonalResult;
