import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Team from './pages/Team'
import Navbar from './components/Navbar'
import bg from './assets/login.jpg'
import Login from './components/Login'
import Contact from './pages/Contact'
import { useLocation } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  const location = useLocation()
  const showNavbar = location.pathname !== '/login'
  return (
    <div
      className="flex w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  )
}

export default App