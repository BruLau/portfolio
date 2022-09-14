import Head from 'next/head'

// components
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import MyProjects from "../components/MyProjects";
import TechnologiesAndSkills from "../components/TechnologiesAndSkills";

import styles from '../styles/Home.module.css'

import myProjects from "../myProjects.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bruno Lauricella</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <AboutMe />
        <TechnologiesAndSkills/>
        <MyProjects myProjects={myProjects}/>
      </main>
    </div>
  )
}
