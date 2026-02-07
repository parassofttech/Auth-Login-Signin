import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { handleError, handleSuccess } from '../Utils'

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handlechange = (e) => {
    const inputValue = e.target.value
    const inputName = e.target.name
    const copyloginInfo = { ...loginInfo }
    copyloginInfo[inputName] = inputValue
    setLoginInfo(copyloginInfo)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const { email, password } = loginInfo

    if (!email || !password) {
      return handleError('Email and password are required')
    }

    try {
      const url = "http://localhost:8080/auth/login"
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      })

      const result = await response.json()
      const { success, message, jwtToken, name, error } = result

      if (success) {
        handleSuccess(message)
        localStorage.setItem('token', jwtToken)
        localStorage.setItem('loggedInUser', name)
        setTimeout(() => navigate('/home'), 100)
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
    <div className="min-h-screen flex items-center justify-center  from-blue-100 to-blue-300 px-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-[8px_8px_24px_0px_rgba(66,68,90,1)] p-8">
        
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Welcome Back 👋
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Email
            </label>
            <input
              onChange={handlechange}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={loginInfo.email}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              placeholder="Enter your password"
              value={loginInfo.password}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-800 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-700 font-semibold hover:underline"
          >
            Signup
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login
