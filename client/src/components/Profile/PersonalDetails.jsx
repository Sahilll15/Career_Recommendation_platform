import React from 'react'
import { NavLink } from 'react-router-dom'

const PersonalDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-full">
      {/* Profile Box */}
      <div className="max-w-md bg-white rounded-lg shadow-lg p-6 mb-6 w-full">
        <h1>Begineer</h1>
        <div className="flex items-center justify-center mb-4">
          <img
            className="w-20 h-20 object-cover rounded-full"
            src="https://safesiren.vercel.app/static/media/login.665ff9176f5ac11ac2e6.png" // Replace with actual path
            alt="Profile Pic"
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Rehman</h2>
          <p className="text-gray-600 text-sm mb-2">adi@example.com</p>
          <p className="text-gray-600 text-sm mb-2">123-456-7890</p>
        </div>
      </div>

      {/* Skills Box */}
      <div className="max-w-md rounded-lg bg-white shadow-lg p-6 w-full">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          <div className="bg-green-300 px-4 py-2 rounded-full text-white text-sm">HTML</div>
          <div className="bg-green-300 px-4 py-2 rounded-full text-white text-sm">CSS</div>
          <div className="bg-green-300 px-4 py-2 rounded-full text-white text-sm">JS</div>
          <div className="bg-green-300 px-4 py-2 rounded-full text-white text-sm">REACT</div>
  
          {/* Add more skills as needed */}
        </div>
      </div>

      <div className="max-w-md bg-white mt-5 rounded-lg shadow-lg p-6 w-full">
        <h2 className="text-xl font-semibold mb-4">Interest</h2>
        <div className="flex flex-wrap gap-2">
          <div className="bg-blue-300 px-4 py-2 rounded-full text-white text-sm">M.E.R.N STACK</div>
          <div className="bg-blue-300 px-4 py-2 rounded-full text-white text-sm">WEB DEVELOPMENT</div>
          <div className="bg-blue-300 px-4 py-2 rounded-full text-white text-sm">FRONTEND</div>
     
          {/* Add more skills as needed */}
        </div>
      </div>

      <NavLink to='/statistics'>
      <div className="max-w-md mx-auto bg-white rounded p-6 mt-6 flex w-full items-center">
        <h2 className="text-xl text-blue-500 font-bold mb-4 mr-4">Get Statistical Data &nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i></h2>
      </div>
      </NavLink>



    </div>
  )
}

export default PersonalDetails