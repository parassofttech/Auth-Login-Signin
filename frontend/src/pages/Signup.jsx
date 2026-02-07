

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { handleError, handleSuccess } from '../Utils'

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  })
 
  const navigate = useNavigate()

  const handlechange = (e) => {
    const inputValue = e.target.value
    const inputName = e.target.name
    const oldValue = { ...signupInfo }
    oldValue[inputName] = inputValue
    setSignupInfo(oldValue)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, password } = signupInfo

    if (!name || !email || !password) {
      return handleError('name , email and password are required')
    }

    try {
      const url = "http://localhost:8080/auth/signup"
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupInfo)
      })

      const result = await response.json()
      const { success, message, error } = result

      if (success) {
        handleSuccess(message)
        setTimeout(() => navigate('/login'), 100)
      } else if (error) {
        handleError(error?.details[0].message)
      } else {
        handleError(message)
      }
    } catch (err) {
      handleError(err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center  from-purple-100 to-blue-200 px-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl p-8
        shadow-[8px_8px_24px_0px_rgba(66,68,90,0.35)]">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Create Account 🚀
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Name
            </label>
            <input
              onChange={handlechange}
              type="text"
              name="name"
              autoFocus
              placeholder="Enter your name"
              value={signupInfo.name}
              className="w-full px-4 py-2 border rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Email
            </label>
            <input
              onChange={handlechange}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={signupInfo.email}
              className="w-full px-4 py-2 border rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Password
            </label>
            <input
              onChange={handlechange}
              type="password"
              name="password"
              placeholder="Create a strong password"
              value={signupInfo.password}
              className="w-full px-4 py-2 border rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg 
            text-lg font-semibold hover:bg-blue-800 transition duration-300"
          >
            Sign Up
          </button>

        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-700 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Signup
