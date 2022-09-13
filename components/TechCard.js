import Image from "next/image";

//react-icons
import {
  SiCss3,
  SiNodedotjs,
  SiSocketdotio,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiRedux,
  SiPostgresql,
  SiExpress,
  SiGit,
  SiGithub
} from "react-icons/si";

import styles from "../styles/TechCard.module.css";
import me from "../public/images/me.jpg";

export default function TechCard({techName, iconSize, fontSize}){

    return (
        <div className={styles.techCard}>
            {techName === "CSS3"
                ? <SiCss3 className={styles.icon} size={iconSize}/>
                : techName === "NodeJS"
                ? <SiNodedotjs className={styles.icon} size={iconSize}/>
                : techName === "Socket.io"
                ? <SiSocketdotio className={styles.icon} size={iconSize}/>
                : techName === "MongoDB"
                ? <SiMongodb className={styles.icon} size={iconSize}/>
                : techName === "ReactJS"
                ? <SiReact className={styles.icon} size={iconSize}/>
                : techName === "NextJS"
                ? <SiNextdotjs className={styles.icon} size={iconSize}/>
                : techName === "Javascript"
                ? <SiJavascript className={styles.icon} size={iconSize}/>
                : techName === "HTML5"
                ? <SiHtml5 className={styles.icon} size={iconSize}/>
                : techName === "ReduxJS"
                ? <SiRedux className={styles.icon} size={iconSize}/>
                : techName === "PostgreSQL"
                ? <SiPostgresql className={styles.icon} size={iconSize}/>
                : techName === "ExpressJS"
                ? <SiExpress className={styles.icon} size={iconSize}/>
                : techName === "Git"
                ? <SiGit className={styles.icon} size={iconSize}/>
                : techName === "GitHub"
                ? <SiGithub className={styles.icon} size={iconSize}/>
                : <></>
            }
            <h3 style={{"fontSize":fontSize}}>{techName}</h3>
        </div>
    )
}