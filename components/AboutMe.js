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
                <div className={styles.cardLeft}>
                    <div className={styles.photo}>
                        <Image 
                            src={me} 
                            alt="My Photo" 
                            quality={100}
                            layout="fill"
                            objectFit="cover"
                            placeholder="blur"
                            blurDataURL="/placeholder-2.png"
                        />
                    </div>
                    <div className={styles.social}>
                        <a 
                            href="https://linkedin.com/in/fabrizio-tessaro" 
                            target="_blank" 
                            rel="noreferrer" 
                            aria-label="Linkedin"
                        >
                            <BsLinkedin className={styles.icon}/>
                        </a>
                        <a 
                            href="https://github.com/fabriziotessaro" 
                            target="_blank" 
                            rel="noreferrer" 
                            aria-label="GitHub"
                        >
                            <BsGithub className={styles.icon}/>
                        </a>
                        <a 
                            href="mailto:fabriziotessaro02@gmail.com" 
                            aria-label="Email"
                        >
                            <GrMail className={styles.icon}/>
                        </a>
                    </div>
                </div>
                <div className={styles.cardRight}>
                    <div className={styles.information}>
                        <div className={styles.title}>
                            <h2>About Me</h2>
                            <h3>I&#8220;m Fabrizio Tessaro</h3>
                        </div>
                        <div className={styles.description}>
                            <p>
                                I stand out for my optimism, no matter what problem or difficulty I face, I will always put on a good face and work to overcome it. I like to apply this in my professional field as a web developer, always learning new technologies and ways to solve problems.
                                <br/><br/>
                                I love web development, it is a world full of possibilities that is always changing and evolving, providing millions of services and solutions to billions of people.
                                <br/><br/>
                                Currently, I have mastered the MERN Stack, with MongoDB / PostrgreSQL, ReactJS, ExpressJS, and NodeJS.
                                <br/><br/>
                                My interests are: no stop instructing myself and learning new things, as well as facing different and difficult challenges that fill me with experience and with which I can demonstrate everything that I am capable of. I would like to find a place where I can do all that accompanied by a team with which I can work side by side.
                            </p>
                        </div>
                    </div>
                    
                    <div className={styles.cvButton}>
                        <a 
                            href="/Fabrizio_Tessaro_CV.pdf"
                            target="_blank" 
                            rel="noreferrer" 
                        >
                            <h2>Get Curriculum</h2> 
                            <BsArrowRight size={"2.5rem"}/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}