import styles from "../styles/TechnologiesAndSkills.module.css";

import TechCard from "./TechCard";

export default function TechnologiesAndSkills(){
    const technologies = [
        "Javascript",
        "NodeJS",
        "ReactJS",
        "ReduxJS",
        "ExpressJS",
        "PostgreSQL",
        "MongoDB",
        "HTML5",
        "CSS3",
        "Git",
        "GitHub",
    ];
    return (
        <section id="technologies&skills" className={styles.container}>
            <div className={`${styles.card} ${styles.technologies}`}>
                <h2>Technologies</h2>
                <div className={`${styles.techStack}`}>
                    {technologies.map((tech) =>
                        <TechCard key={tech} techName={tech} iconSize="40px" fontSize="20px"/>
                    )}
                    
                </div>
            </div>
            <div className={`${styles.card} ${styles.skills}`}>
                <h2>Skills</h2>
                <div className={styles.skillsList}>
                    <div className={styles.skill}>
                        <h3>Perseverance</h3>
                    </div>
                    <div className={styles.skill}>
                        <h3>Scrum</h3>
                    </div>
                    <div className={styles.skill}>
                        <h3>Autodidact</h3>
                    </div>
                    <div className={styles.skill}>
                        <h3>Team Plater</h3>
                    </div>
                    <div className={styles.skill}>
                        <h3>Creativy</h3>
                    </div>
                    <div className={styles.skill}>
                        <h3>Communicative</h3>
                    </div>
                    <div className={styles.skill}>
                        <h3>Results-oriented</h3>
                    </div>
                </div>
            </div>

        </section>
    )
}