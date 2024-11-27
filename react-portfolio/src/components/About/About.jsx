import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
import { Tilt } from '@jdion/tilt-react';

export const About = () =>
{
    return <section id = "about" className={styles.container}>

            <h1 className={styles.title}>
                ABOUT ME
            </h1>

        <div className={styles.content}>
   
            <img className={styles.aboutImg} src={getImageUrl("hero/walkingStraight1.gif")}  alt="My picture" />

            <ul className={styles.roles}>
                <Tilt>
                <li className={styles.aboutLi} >
                    <img src={getImageUrl("about/cursorIcon.png")} className={styles.aboutImg1} alt="My picture" />
                    <div className={styles.text}>
                    <h3>
                        Work
                    </h3>
        
                    <p>
                    I have an interest in optimization and the interactive side of the User Experience. I've tried a lot of things - design, frontend, backend, game development, robotics.
                    </p> 
                    </div>   
                </li>
                </Tilt>

                <Tilt>
                <li className={styles.aboutLi}>
                <img src={getImageUrl("about/serverIcon.png")} className={styles.aboutImg1} alt="My picture" />
                    <div>
                    <h3>
                        Fun
                    </h3>
                    <p>
                    In my free time I like to work on and drive my 1995 Mitsubishi Mighty Max, practice BJJ, read novels and manga, play guitar, and slingshot.
                    </p>  
                    </div>  
                </li>
                </Tilt>

                <Tilt>
                <li className={styles.aboutLi}>
                <img src={getImageUrl("about/uiIcon.png")} className={styles.aboutImg1} alt="My picture" />
                    <div className={styles.text}>
                    <h3>
                        Background
                    </h3>
                    <p >
                    Currently, I live and study in Davao City. I moved here from Maryland, USA in 2020.
                    </p>  
                    </div>  
                </li>
                </Tilt>
            </ul>
            
        </div>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />

    </section>;
};