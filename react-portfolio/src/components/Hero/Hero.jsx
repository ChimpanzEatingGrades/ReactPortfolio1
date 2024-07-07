import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"
import { useState } from "react";
import { Tilt } from '@jdion/tilt-react';
import { Button } from "./Button.jsx";



export const Hero = (props) =>
{
    
    const word2 = "(͠≖ ͜ʖ͠≖)";
    const word1 = "interactivity";
    const [inter1, setInter1] = useState(word1);

    const lenny1 = () =>
    {
        if (inter1 == word1)
            setInter1(word2);
        else setInter1(word1);
    }

    function test1()
  {
 
    console.log("toggling FPS");
  }

    return <section className={styles.container}>
        
        <div className={styles.content}>
            <h1 className={styles.title}>
                Psst.<br/> I'm <span className={styles.name1} >David Esfandiary,</span>
            </h1>
            <p className={styles.description}>
                a student and an aspiring dev. I'm currently studying Computer Science at <a href="google.com">Ateneo de Davao University. </a>
                If you can't already tell, I love <span onMouseLeave={lenny1} className={styles.inter1}>{inter1}</span> and <span className={styles.glow1}>glowy things</span>. Scroll to find out more!
            </p>

            <Tilt>
                <Button />
            </Tilt>

            


        </div>
        <div className={styles.heroImg} data-anything="That tickles!"> 
        <Tilt>
        <img  className={styles.tickles} onClick={props.toggleFPS} src={getImageUrl("hero/walkingLeft.gif")} alt="My picture" />
        </Tilt>
        </div> 
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />

    </section>;
};