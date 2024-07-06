import React, {useState} from "react";

import styles from "./Navbar.module.css";
import {getImageUrl} from "/src/utils.js";
import { Tilt } from '@jdion/tilt-react';


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); 
    return <nav id="navbar" className={styles.navbar}>
        <Tilt>
        <a href="#home"><img className={styles.title}  src={getImageUrl("nav/arrowLogo.svg")} alt="DE"/></a>
        </Tilt>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
            src={
                menuOpen ? 
                getImageUrl("nav/closeIcon.png") : 
                getImageUrl("nav/menuIcon.png")} 
            alt = "menuBtn"
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick = {() => setMenuOpen(false)}>
                <li>
                    <a className={styles.menuItem} href="#about">About</a>
                </li>
                <li>
                    <a className={styles.menuItem} href="#experience">Experience</a>
                </li>
                <li>
                    <a className={styles.menuItem} href="#projects">Projects</a>
                </li>
                <li>
                    <a className={styles.menuItem} href="#contact">Contact</a>
                </li>
                <li>
                    <a className={styles.fisbuk} href="https://chimpanzeatinggrades.github.io/CS1130/" target="_blank"
                    >Fisbuk</a>
                </li>
            </ul>
        </div>
    </nav>;
}