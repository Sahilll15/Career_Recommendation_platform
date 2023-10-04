import React from 'react'

const PersonalResult = () => {
    
        const results = [
          { subject: 'Math', score: 90 },
          { subject: 'Science', score: 85 },
          { subject: 'History', score: 95 },
          { subject: 'English', score: 80 },
        ];
  return (
  
    <div className="max-w-md mx-auto p-4 bg-blue-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Assessment Results</h2>
      {results.map((result, index) => (
        <div key={index} className="flex justify-between mb-2">
          <span>{result.subject}</span>
          <span>{result.score}</span>
        </div>
      ))}
    </div>
  )
}

export default PersonalResult