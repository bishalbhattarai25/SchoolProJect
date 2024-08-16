import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './Components/Navigation/Navbar'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import AboutUs from './Pages/AboutUs'
import Classes from './Pages/Classes'


function App() {
  return (
    <>
    
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Classes' element={<Classes/>} />
      <Route path='/Blog' element={<Blog/>} />
      <Route path='/About' element={<AboutUs/>} />
      <Route path='/Contact' element={<Contact/>} />
    </Routes>
  </Router>


  
    </>
  )
}

export default App
