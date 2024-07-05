import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"
import { useState } from "react";



export const Hero = () =>
{
    
    const word1 = "(click on me)";
    const word2 = "interactivity";
    const [inter1, setInter1] = useState(word1);

    const lenny1 = () =>
    {
        if (inter1 == word1)
            setInter1(word2);
        else setInter1(word1);
    }

    return <section className={styles.container}>
        
        <div className={styles.content}>
            <h1 className={styles.title}>
                Psst. I'm David Esfandiary,
            </h1>
            <p className={styles.description}>
                a student and aspiring dev. I'm currently studying Computer Science at <a href="google.com">Ateneo de Davao University. </a>
                If you can't already tell, I love <span onClick={lenny1} className={styles.inter1}>{inter1}</span> and <span className={styles.glow1}>glowy things</span>. Scroll to find out more!
            </p>

            <a href= "mailto:david.s.esfandiary@gmail.com" className={styles.contactBtn}>Email</a>
        </div>
        <img src={getImageUrl("hero/walkingLeft.gif")} className={styles.heroImg} alt="My picture" />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />

    </section>;
};