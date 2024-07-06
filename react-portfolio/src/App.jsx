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
import FPSStats from 'react-fps-stats'
import { Tilt } from '@jdion/tilt-react'
import Headroom from 'react-headroom'


function App() {

  

  return(
    <div id="home" className={styles.App}>
      
      <Tilt>
      <FPSStats top="auto" left="auto" bottom="15px" right="15px"/>
      </Tilt>

      <div className={styles.particlesDiv}><Particles2 className={styles.particles}/></div>
      
      
      <div className={styles.content1}>
      
      <Headroom style={{zIndex: 5}}>
      <Navbar />
      </Headroom>
      

      <Hero />
      
      <About />
      
      <Experience />
      
      <Projects /> 
      
      <Contact /></div>
    </div>
  )
}


export default App
