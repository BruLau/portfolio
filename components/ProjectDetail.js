import styles from "../styles/ProjectDetail.module.css";

import TechCard from "./TechCard";

//react-icons
import { SiGithub } from "react-icons/si";
import { BsEyeFill } from "react-icons/bs";

export default function ProjectDetail({ id, name, description, liveViewLink, githubLink, techStack}){
	return (
		<section className={styles.container}>
			<div className={styles.title}>
				<h1>{name}</h1>
			</div>
			<div className={styles.detailGroup}>
				<div className={styles.groupTitle}>
					<h3>Description</h3>
				</div>
				<div className={styles.description}>
					{description?.split("\n").map((p, i) => (
			          <p className={styles.paragraph} key={i}>
			            {p}
			          </p>
			        ))}
				</div>
			</div>
			<div className={styles.detailGroup}>
				<div className={styles.groupTitle}>
					<h3>Tech stack</h3>
				</div>
				<div className={styles.techStack}>
					{techStack?.map(tech => 
						<TechCard key={tech} techName={tech} iconSize="30px" fontSize="15px"/>
					)}
				</div>
			</div>
			<div className={styles.detailGroup}>
				<div className={styles.projectSauce}>
					{liveViewLink &&
						<div className={styles.suaceLink}>
							<a 
								href={liveViewLink}
								target="_blank"
            					rel="noopener noreferrer"
							>
								<BsEyeFill size={"30px"}/>
								<h4>Live View</h4>
							</a>
						</div>
					}
					{githubLink &&
						<div className={styles.suaceLink}>
							<a 
								href={githubLink}
								target="_blank"
            					rel="noopener noreferrer"
							>
								<SiGithub size={"30px"}/>
								<h4>GitHub Source Code</h4>
							</a>
						</div>
					}
					{!liveViewLink && !githubLink &&
						<div className={styles.notSauce}>
							<h3>oh uh... seems like there no source :(</h3>
						</div>
					}
				</div>
			</div>
		</section>
	)
}