import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";
import { Tilt } from '@jdion/tilt-react';

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source}}) =>
{
    
    function openDemo(demoLink)
    {
        window.open(demoLink, '_blank');
    }
    
    return(
        <Tilt>
        <div className={styles.container}>
            <img className={styles.image} src={getImageUrl(imageSrc)} alt={`image of ${title}`} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return <li className={styles.skill} key={id}>{skill}</li>
                })}
            </ul>
            <div className={styles.links}>
                <Tilt>
                <button className={styles.link} onClick = {() => openDemo(demo)} >Demo</button>
                
                </Tilt>
                <Tilt>
                <a className={styles.link} target="_blank" href={source}>Source</a>  
                </Tilt>
            </div>
        </div>
        </Tilt>
    )
}