import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleError, handleSuccess } from '../Utils'

import NavBar from '../components/NavBar'
import WelcomeMessage from '../components/WelcomeMessage'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState('')
  const [products, setProducts] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  }, [])
 
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('loggedInUser')
    handleSuccess("User Logged Out")
    setTimeout(() => navigate("/login"), 300)
  }

  const fetchProducts = async () => {
    try {
      const url = "http://localhost:8080/products"
      const headers = {
        headers: { Authorization: localStorage.getItem('token') }
      }
      const response = await fetch(url, headers)
      const result = await response.json()
      setProducts(result)
    } catch (err) {
      handleError(err)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <NavBar />
     

      {/* MAIN CONTENT */}
      <div className="pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">

        {/* ✅ WELCOME + LOGOUT (FIXED) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-600">
            Welcome <span className="text-gray-900">{loggedInUser}</span>
          </h1>

          <button
            onClick={handleLogout}
            className="px-6 py-2 rounded-full text-lg bg-blue-700 text-white hover:bg-blue-800 transition"
          >
            Logout
          </button>
        </div>

        {/* Welcome Message */}
        <div className="mb-12">
          <WelcomeMessage />
        </div>

        {/* Hero Section */}
        <div className="mb-16">
          <HeroSection />
        </div>

        <div className="h-14"></div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home





// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { handleError, handleSuccess } from '../Utils'

// import NavBar from '../components/NavBar'
// import WelcomeMessage from '../components/WelcomeMessage'
// import HeroSection from '../components/HeroSection'
// import Footer from '../components/Footer'

// const Home = () => {
//   const [loggedInUser, setLoggedInUser] = useState('')
//   const [products, setProducts] = useState([])
//   const navigate = useNavigate()

//   useEffect(() => {
//     setLoggedInUser(localStorage.getItem('loggedInUser'))
//   }, [])

//   const handleLogout = () => {
//     localStorage.removeItem('token')
//     localStorage.removeItem('loggedInUser')
//     handleSuccess("User logged out successfully")
//     setTimeout(() => navigate("/login"), 500)
//   }

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/products", {
//         headers: {
//           Authorization: localStorage.getItem('token')
//         }
//       })
//       const result = await response.json()
//       setProducts(result)
//     } catch (err) {
//       handleError(err.message || "Failed to fetch products")
//     }
//   }

//   useEffect(() => {
//     fetchProducts()
//   }, [])

//   return (
//     <>
//       <NavBar />

//       {/* Page Wrapper */}
//       <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">

        

//         {/* Welcome + Logout */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
//             Welcome <span className="text-gray-800">{loggedInUser}</span>
//           </h1>

//           <button
//             onClick={handleLogout}
//             className="w-fit px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
//           >
//             Logout
//           </button>
//         </div>

//         {/* Welcome Message */}
//         <WelcomeMessage userName={loggedInUser} />

//         {/* Hero Section */}
//         <div className="mt-12">
//           <HeroSection />
//         </div>

//         {/* Products (optional future use) */}
//         {/* 
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
//           {products?.map((item, index) => (
//             <div key={index} className="bg-white shadow rounded-xl p-4">
//               <h3 className="font-semibold">{item.name}</h3>
//               <p className="text-gray-600">₹ {item.price}</p>
//             </div>
//           ))}
//         </div>
//         */}

//       </div>

//       <Footer />
//     </>
//   )
// }

// export default Home
