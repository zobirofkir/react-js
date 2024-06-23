import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import AboutScreen from './Screens/AboutScreen'
import ContactScreen from './Screens/ContactScreen'
import Header from './Components/Header'
import Body from './Components/Body'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Header/>
      <Body/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App