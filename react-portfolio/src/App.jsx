import { useState, useEffect } from 'react'
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
import { PreLoader } from './components/PreLoader/PreLoader'
import RingLoader from "react-spinners/RingLoader"
import * as colors from "./vars.module.scss";


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, []);

  const [showFPS, setShowFPS] = useState(false);

  function toggleFPS()
  {
    setShowFPS(!showFPS);
    console.log("toggling FPS");
  }
  

  return(
    <>
    
    <div id="home" className={styles.App}>

      

      <div className={styles.particlesDiv}><Particles2 className={styles.particles}/></div>
      {
      loading ? 
      <>
      
      
      <div className={styles.spinner}>
      <RingLoader

      color={colors.primary}
      loading = {loading}
      size={100}
      />
      </div>
      </>
      :

      <>
      
      {
      showFPS ?
      <FPSStats top="auto" left="auto" bottom="15px" right="15px"/>
      :
      <></>
      }
      <div className={styles.content1}>
      
      <Headroom style={{zIndex: 5}}>
      <Navbar />
      </Headroom>
      

      <Hero toggleFPS={toggleFPS}/>
      
      <About />
      
      <Experience />
      
      <Projects /> 
      
      <Contact /></div>
      </>
      }
      
    </div>

    </>
  )
}


export default App


