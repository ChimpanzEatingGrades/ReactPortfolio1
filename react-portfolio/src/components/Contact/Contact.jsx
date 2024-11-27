import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () =>
{
    return(
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>
                    Talk to me!
                </p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href="mailto:david.s.esfandiary@gmail.com"><img src={getImageUrl("contact/emailIcon.png")} alt="Email me"/></a>
                    <a href="mailto:david.s.esfandiary@gmail.com">david.s.esfandiary@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <a href="mailto:david.s.esfandiary@gmail.com"><img src={getImageUrl("contact/linkedinIcon.png")} alt="Email me" /></a>
                    
                    <a href="https://www.linkedin.com/in/david-esfandiary">linkedin.com/david-esfandiary</a>
                </li>
                <li className={styles.link}>
                    <a href="mailto:david.s.esfandiary@gmail.com"><img src={getImageUrl("contact/githubIcon.png")} alt="Email me" /></a>
                    
                    <a href="https://github.com/ChimpanzEatingGrades">github.com/ChimpanzEatingGrades</a>
                </li>
            </ul>
            
            <img className={styles.contactImg} src={getImageUrl("hero/walkingRight.gif")}  alt="My picture" />

        </footer> 
    );
};