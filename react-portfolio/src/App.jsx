import { useState } from 'react'
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar.js/Navbar'
import { Hero } from './components/Navbar/Navbar.js/Hero/Hero' 
import { About } from './components/About/About.jsx' 

function App() {

  return(
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
