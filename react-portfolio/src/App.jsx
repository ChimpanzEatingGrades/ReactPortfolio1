import { useState } from 'react'
import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero' 
import { About } from './components/About/About.jsx' 
import { Experience } from './components/Experience/Experience' 
import { Projects } from './components/Projects/Projects' 
import { Contact } from './components/Contact/Contact'
import { Particles1 } from './components/Particles/Particles1.jsx'
import { Particles2 } from './components/Particles/Particles2.jsx'


function App() {

  return(
    <div className={styles.App}>
      <div className={styles.particlesDiv}><Particles1 className={styles.particles}/></div>
      <div className={styles.content1}><Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects /> 
      <Contact /></div>
    </div>
  )
}


export default App
