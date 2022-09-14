import Link from "next/link";

// react-icons
import { 
    BsLinkedin,
    BsGithub,
    BsArrowRight,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import styles from "../styles/Menu.module.css";

export default function Menu({ isMenuVisible, toggleMenu }){
	return(
		<section className={`${styles.container} ${!isMenuVisible ? styles.closing : styles.opening}`}>
			<div className={styles.menu}>
				<div className={styles.content}>
					<div className={styles.menuGroup}>
						<div className={styles.menuTitle}>
							<h2>Social</h2>
						</div>
						<div className={styles.social}>
							<a
								href="https://www.linkedin.com/in/bruno-mateo-lauricella/" 
								target="_blank" 
								rel="noreferrer" 
								aria-label="Linkedin"
								passHref
								onClick={() => toggleMenu()}
							>
		                        <BsLinkedin className={styles.icon}/>
		                    </a>
		                    <a 
		                    	href="https://github.com/BruLau" 
		                    	target="_blank" 
		                    	rel="noreferrer" 
		                    	aria-label="GitHub"
		                    	passHref
		                    	onClick={() => toggleMenu()}
		                    >
		                        <BsGithub className={styles.icon}/>
		                    </a>
		                    <a
		                    	href="mailto:brunomlauricella@gmail.com" 
		                    	aria-label="Email"
		                    	passHref
		                    	onClick={() => toggleMenu()}
		                    >
		                        <GrMail className={styles.icon}/>
		                    </a>
		                </div>
					</div>
					<div className={styles.menuGroup}>
						<div className={styles.menuTitle}>
							<h2>Navigation</h2>
						</div>
						<div className={styles.navigation}>
							<Link href="/#home" passHref>
								<div className={styles.option} onClick={() => toggleMenu()}>
									<BsArrowRight size={"1.4rem"}/>
									Home
								</div>
							</Link>
							<Link href="/#aboutme" passHref>
								<div className={styles.option} onClick={() => toggleMenu()}>
									<BsArrowRight size={"1.4rem"}/>
									About me
								</div>
							</Link>
							<Link href="/#technologies&skills" passHref>
								<div className={styles.option} onClick={() => toggleMenu()}>
									<BsArrowRight size={"1.4rem"}/>
									Technologies and Skills
								</div>
							</Link>
							<Link href="/#myprojects" passHref>
								<div className={styles.option} onClick={() => toggleMenu()}>
									<BsArrowRight size={"1.4rem"}/>
									My projects
								</div>
							</Link>
						</div>
			    	</div>
			    </div>
			</div>
		</section>
	)
}