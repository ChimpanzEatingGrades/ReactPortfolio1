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
                    I have an interest in optimization and the interactive side of the User Experience.
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
                    In my free time I like to read, slingshot, and touch grass.
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
                    I live and study in Davao City.
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