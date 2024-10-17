import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Work from './components/work/Work'
import Contact from './components/Contact/Contact'
import Fotter from './components/Fotter/Fotter'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About></About>
      <Skills/>
      <Work/>
      <Contact/>
      <Fotter></Fotter>
      
    </div>
  )
}

export default App
