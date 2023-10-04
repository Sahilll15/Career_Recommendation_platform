import React from 'react'

const Login = () => {
  return (
    <div class="bg-gray-100">
      <div class="flex justify-center items-center h-screen">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white shadow p-6 rounded-lg">
          <div class="flex justify-center items-center flex-col">
            <div class="mb-3 animate_animated animate_fadeIn">
              <img src="https://safesiren.vercel.app/static/media/login.665ff9176f5ac11ac2e6.png" class="w-96 animate" />
            </div>
          </div>
          <div class="md:col-span-1">
            <div class="flex flex-col items-center">
              <div class="mb-3 w-full">
                <h2 class="text-3xl font-extrabold">Welcome</h2>
                <p class="text-lg font-semibold">We are happy to have you back</p>
              </div>
              <div class="w-3/4 mb-3 border-black border rounded-lg mt-9">
                <input value="" type="email" class="w-full border p-2 rounded-lg" placeholder="username"
                  required />
              </div>
              <div class="w-3/4 mb-3 border-black border rounded-lg ">
                <input value="" type="email" class="w-full border p-2 rounded-lg" placeholder="Email Address"
                  required />
              </div>
              <div class="w-3/4 mb-3 border-black border rounded-lg">
                <input type="password" value="" class="w-full border p-2 rounded-lg" placeholder="Password"
                  required />
              </div>
              <div class="flex w-3/4 items-center mt-4">
                <button
                  class="bg-blue-500  hover:bg-blue-700 text-white text-lg py-2 px-4 rounded-lg w-80"
                  type="button" onClick="{handleSubmit}">Login</button>
              </div>
              <div class="flex w-3/4 items-center mt-4">
                <a href="#" class="text-blue-500 hover:text-blue-700 text-lg">Forgot Password?</a>
              </div>

              <div class="flex w-3/4 items-center mt-4">
                <a href="#" class="text-blue-500 hover:text-blue-700 text-lg">Don't have an account? Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login