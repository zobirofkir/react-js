import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import AboutScreen from './Screens/AboutScreen'
import ContactScreen from './Screens/ContactScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomeScreen/>}/>  
          <Route path='/about' element={<AboutScreen/>}/>
          <Route path='/contact' element={<ContactScreen/>}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App