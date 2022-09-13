import Head from "next/head";
import { useState } from "react";

import Nav from "../components/Nav";
import Menu from "../components/Menu";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 350);

      setIsMenuVisible(false);
    } else {
      setIsMenuOpen(true);
      setIsMenuVisible(true);
    }
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
      <Component {...pageProps} />
      {isMenuOpen ? (
        <Menu isMenuVisible={isMenuVisible} toggleMenu={toggleMenu}/>
      ) : null
      }
    </>
  )
}

export default MyApp
