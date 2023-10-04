import React from 'react'

const PersonalDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-full">
      {/* Profile Box */}
      <div className="max-w-md bg-white rounded-lg shadow-lg p-6 mb-6 w-full">
        <h1>INTERMIDIATE</h1>
        <div className="flex items-center justify-center mb-4">
          <img
            className="w-20 h-20 object-cover rounded-full"
            src="https://safesiren.vercel.app/static/media/login.665ff9176f5ac11ac2e6.png" // Replace with actual path
            alt="Profile Pic"
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Aditya Shah</h2>
          <p className="text-gray-600 text-sm mb-2">adi@example.com</p>
          <p className="text-gray-600 text-sm mb-2">123-456-7890</p>
        </div>
      </div>

      {/* Skills Box */}
      <div className="max-w-md rounded-lg bg-white shadow-lg p-6 w-full">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          <div className="bg-green-300 px-4 py-2 rounded-full text-white text-sm">Skill 1</div>
          <div className="bg-green-300 px-4 py-2 rounded-full text-white text-sm">Skill 2</div>
          <div className="bg-green-300 px-4 py-2 rounded-full text-white text-sm">Skill 3</div>
          <div className="bg-green-300 px-4 py-2 rounded-full text-white text-sm">Skill 1</div>
          <div className="bg-green-300 px-4 py-2 rounded-full text-white text-sm">Skill 2</div>
          <div className="bg-green-300 px-4 py-2 rounded-full text-white text-sm">Skill 3</div>
          {/* Add more skills as needed */}
        </div>
      </div>

      <div className="max-w-md bg-white mt-5 rounded-lg shadow-lg p-6 w-full">
        <h2 className="text-xl font-semibold mb-4">Interest</h2>
        <div className="flex flex-wrap gap-2">
          <div className="bg-blue-300 px-4 py-2 rounded-full text-white text-sm">Skill 1</div>
          <div className="bg-blue-300 px-4 py-2 rounded-full text-white text-sm">Skill 2</div>
          <div className="bg-blue-300 px-4 py-2 rounded-full text-white text-sm">Skill 3</div>
          <div className="bg-blue-300 px-4 py-2 rounded-full text-white text-sm">Skill 1</div>
          <div className="bg-blue-300 px-4 py-2 rounded-full text-white text-sm">Skill 2</div>
          <div className="bg-blue-300 px-4 py-2 rounded-full text-white text-sm">Skill 3</div>
          {/* Add more skills as needed */}
        </div>
      </div>


    </div>
  )
}

export default PersonalDetails