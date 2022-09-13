
// projects cards
import ProjectCard from "./ProjectCard";

import styles from "../styles/MyProjects.module.css";

export default function MyProjects({ myProjects }){
	return (
		<section id="myprojects" className={styles.container}>
			<div className={styles.title}>
				<h1>My Projects</h1>
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