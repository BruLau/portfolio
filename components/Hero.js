import Image from "next/image";

// react-icons
import { 
    BsLinkedin,
    BsGithub,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import styles from "../styles/Hero.module.css";
import image from "../public/images/Code typing-bro.svg";

export default function Presentation(){
    return (
        <section id="home" className={styles.container}>
            <div className={styles.presentation}>
                <div className={styles.name}>
                    <h3>Hello there! I&#8217;m</h3>
                    <h1>Fabrizio Tessaro</h1>
                    <h3>A Fullstack web developer</h3>
                </div>
                <div className={styles.description}>
                    <h4>
                        &#8220;I stand out for my optimism,<br/>
                        no matter what problem or difficulty I face,<br/>
                        always I&#8217;ll put a good face on and work to overcome it&#8221;.
                    </h4>
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
            <div className={styles.image}>
                <a 
                    href="https://storyset.com/work" 
                    target="_blank" 
                    rel="noreferrer" 
                    aria-label="Work illustrations by Storyset"
                >
                    <Image 
                        src={image} 
                        alt="" 
                        quality={100}
                    />
                </a>
            </div>
        </section>
    )
}