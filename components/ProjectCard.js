import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ProjectCard.module.css";

//react-icons
import { BsArrowRight } from "react-icons/bs";

export default function ProjectCard({ id, name, shortDescription, pictures, placeholder }){
	return (
		<div className={styles.container}>
			<div className={styles.picture}>
				<Image
					quality={100}
                    layout="fill"
			        src={pictures[0] }
			        alt={name}
			        placeholder="blur"
          			blurDataURL={placeholder}
				/>
			</div>
			<div className={styles.content}>
				<h3>{name}</h3>
				<div className={styles.border}></div>
				<p>{shortDescription}</p>
				<Link href={`project/${id}`} passHref>
					<button>
						View more
						<BsArrowRight size={"2rem"}/>
					</button>
				</Link>
			</div>
		</div>
	)
}