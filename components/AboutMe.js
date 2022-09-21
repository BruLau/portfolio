import Image from "next/image";

//react-icons
import { 
    BsLinkedin,
    BsGithub,
    BsArrowRight,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import styles from "../styles/AboutMe.module.css";
import me from "../public/images/me.jpg";

export default function AboutMe(){
    return (
        <section id="aboutme" className={styles.container}>
            <div className={styles.aboutMeCard}>
                
                <div className={styles.cardRight}>
                    <div className={styles.information}>
                        <div className={styles.title}>
                            <h2>About Me</h2>
                            <h3>I&#8220;m Bruno Lauricella</h3>
                        </div>
                        <div className={styles.description}>
                            <p>
                            I am a computer technician and a FullStack developer.
                                <br/><br/>
                                I really enjoy listening, learning and working with other people
                                I work hard to achieve my goals and I consider perseverance as the most important Habit to get what you are looking for.
                                I love the world of technology and I would love to be part of it.
                                <br/><br/>
                                If you want to contact me you can do it by direct message to my Linkedin or to my email, I will be very happy to answer you. 
                                <br/><br/>
                                Greetings and have a nice day!
                            </p>
                        </div>
                    </div>
                    
                    
                   
                     <div className={styles.social}>
                        <a 
                            href="https://www.linkedin.com/in/bruno-mateo-lauricella/" 
                            target="_blank" 
                            rel="noreferrer" 
                            aria-label="Linkedin"
                        >
                            <BsLinkedin className={styles.icon}/>
                        </a>
                        <a 
                            href="https://github.com/BruLau" 
                            target="_blank" 
                            rel="noreferrer" 
                            aria-label="GitHub"
                        >
                            <BsGithub className={styles.icon}/>
                        </a>
                        <a 
                            href="mailto:brunomlauricella@gmail.com" 
                            aria-label="Email"
                        >
                            <GrMail className={styles.icon}/>
                        </a>
                        <div className={styles.cvButton}>
                        <a 
                            href="/Curriculum.pdf"
                            target="_blank" 
                            rel="noreferrer" 
                        >
                            <h2>Get Curriculum</h2> 
                            <BsArrowRight className={styles.arrowCv} size={"2.5rem"}/>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}