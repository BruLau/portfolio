
// projects cards
import ProjectCard from "./ProjectCard";

import styles from "../styles/MyProjects.module.css";

export default function MyProjects({ myProjects }){
	return (
		<section id="myprojects" className={styles.containerProyect}>
			<div className={styles.title}>
				<h2>My Projects</h2>
			</div>
			<div className={styles.content}>
				<div className={styles.collection}>
					{myProjects?.map((project) => 
						<ProjectCard key={project.id} {...project}/>
					)}
				</div>
			</div>
		</section>
	)
}