import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Work from './components/work/Work'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About></About>
      <Skills/>
      <Work/>
      
    </div>
  )
}

export default App
