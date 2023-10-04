import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { loginUser } from '../../redux/Auth/authActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getLoggedInUser } from '../../redux/Auth/authActions'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuth = useSelector((state) => state?.auth?.isAuth)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await dispatch(loginUser(formData));

    if (response.meta.requestStatus === "fulfilled") {
      navigate('/');
      await dispatch(getLoggedInUser());

    }
  }
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white shadow p-6 rounded-lg">
          <div className="flex justify-center items-center flex-col">
            <div className="mb-3 animate_animated animate_fadeIn">
              <img src="https://safesiren.vercel.app/static/media/login.665ff9176f5ac11ac2e6.png" className="w-96 animate" />
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="flex flex-col items-center">
              <div className="mb-3 w-full">
                <h2 className="text-3xl font-extrabold">Welcome</h2>
                <p className="text-lg font-semibold">We are happy to have you back</p>
              </div>
              <form onSubmit={handleSubmit} >
                <div className="w-3/4 mb-3 border-black border rounded-lg ">
                  <input type="email" className="w-full border p-2 rounded-lg" placeholder="Email Address"
                    name='email'
                    onChange={handleOnChange}
                    required />
                </div>
                <div className="w-3/4 mb-3 border-black border rounded-lg">
                  <input type="password" className="w-full border p-2 rounded-lg" placeholder="Password"
                    name='password'
                    onChange={handleOnChange}
                    required />
                </div>
                <div className="flex w-3/4 items-center mt-4">
                  <button
                    className="bg-blue-500  hover:bg-blue-700 text-white text-lg py-2 px-4 rounded-lg w-80"
                    type="submit" >Login</button>
                </div>
              </form>
              <div className="flex w-3/4 items-center mt-4">
                <a href="#" className="text-blue-500 hover:text-blue-700 text-lg">Forgot Password?</a>
              </div>

              <div className="flex w-3/4 items-center mt-4">
                <NavLink to="/register" className="text-blue-500 hover:text-blue-700 text-lg">Don't have an account? Register</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login