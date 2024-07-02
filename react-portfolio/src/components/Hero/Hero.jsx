import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () =>
{
    return <section className={styles.container}>

        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi! I'm David,
            </h1>
            <p className={styles.description}>
                A student and aspiring dev. I'm currently a Computer Science student at Ateneo de Davao University
            </p>

            <a href= "mailto:david.s.esfandiary@gmail.com" className={styles.contactBtn}>Email</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} className={styles.heroImg} alt="My picture" />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />

    </section>;
};