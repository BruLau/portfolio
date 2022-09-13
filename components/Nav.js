import Link from "next/link";
import { Twirl as Hamburger } from 'hamburger-react'

import styles from "../styles/Nav.module.css";

export default function Nav({ isMenuOpen, toggleMenu }){
	return(
		<header className={`${styles.navHeader}`}>
			<div className={styles.content}>
				<Link href="/">Bruno Lauricella</Link>
				<Hamburger
					rounded 
			        role="button"
			        label="Toggle menu"
			        hideOutline={true}
			        color="#EF2844"
			        toggled={isMenuOpen}
			        size={35}
			        toggle={toggleMenu}
		        ></Hamburger>
		    </div>
		</header>
	)
}