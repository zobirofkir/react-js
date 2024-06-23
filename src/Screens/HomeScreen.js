import React from 'react'
import Header from '../Components/Header'
import Body from '../Components/Body'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

function HomeScreen() {
  return (
    <div>
      <Header/>
      <Body/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomeScreen