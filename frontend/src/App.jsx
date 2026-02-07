import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { useState } from 'react'
import RefreshHandler from './RefreshHandler'
import NavBar from './components/NavBar'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const PrivateRoute = ({element})=>{
    return isAuthenticated ? element : <Navigate to='/login'/>
  }

  return (
    <div className=''>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Navigate to="/ps" />}/>
        <Route path='/ps' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<PrivateRoute element={<Home/>}/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
      
    </div>
  )
}

export default App
