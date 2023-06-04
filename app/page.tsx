
import styles from './page.module.css'
import Hero from './components/hero'
import Body from './components/body'
import Link from 'next/link'
import { MdArrowUpward } from "react-icons/md";

export default function Home() {
  return (
    <main>
      <Hero />
      <Body />
      <Link href="#start-section" id='back-top' className={`button is-link ${styles.to_top}`}>
        <span className="icon-text">
          <span className="icon">
            <MdArrowUpward />
          </span>
          <span>Inicio</span>
        </span>
      </Link>
    </main>
  )
}
