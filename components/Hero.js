import Image from "next/image";

// react-icons
import { 
    BsLinkedin,
    BsGithub,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import styles from "../styles/Hero.module.css";
import image from "../public/images/Code typing-bro.svg";
import me from "../public/images/me.jpg";
export default function Presentation(){
    return (
        <section id="home" className={styles.container}>
            <div className={styles.presentation}>
                <div className={styles.name}>
                    <h3>Hello there! I&#8217;m</h3>
                    <h1>Bruno Lauricella</h1>
                    <h3>A Fullstack web developer</h3>
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
                </div>
            </div>
            <div className={styles.image}>

                    <Image 
                    className={styles.imagePerfil}
                            src={me} 
                            alt="My Photo" 
                            quality={100}
                            layout="fill"
                            objectFit="cover"
                            placeholder="blur"
                            blurDataURL="/placeholder-2.png"
                        />
            </div>
        </section>
    )
}