import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = () =>
{
    return <section id = "about" className={styles.container}>

            <h1 className={styles.title}>
                ABOUT ME
            </h1>

        <div className={styles.content}>
            
            

            <img src={getImageUrl("about/aboutImage.png")} className={styles.aboutImg} alt="My picture" />


            <ul className={styles.roles}>
                <li className={styles.aboutLi} >
                    <img src={getImageUrl("about/cursorIcon.png")} className={styles.aboutImg1} alt="My picture" />
                    <div className={styles.text}>
                    <h3>
                        Student
                    </h3>
        
                    <p>
                    A student and aspiring dev. I'm currently a Computer Science student at Ateneo de Davao University
                    </p> 
                    </div>   
                </li>

                <li className={styles.aboutLi}>
                <img src={getImageUrl("about/serverIcon.png")} className={styles.aboutImg1} alt="My picture" />
                    <div>
                    <h3>
                        Student
                    </h3>
                    <p>
                    A student and aspiring dev. I'm currently a Computer Science student at Ateneo de Davao University
                    </p>  
                    </div>  
                </li>

                <li className={styles.aboutLi}>
                <img src={getImageUrl("about/uiIcon.png")} className={styles.aboutImg1} alt="My picture" />
                    <div className={styles.text}>
                    <h3>
                        Student
                    </h3>
                    <p >
                    A student and aspiring dev. I'm currently a Computer Science student at Ateneo de Davao University
                    </p>  
                    </div>  
                </li>

            </ul>
            
        </div>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />

    </section>;
};