import Link from 'next/link';
import styles from './hero.module.css'
import { BsGithub } from 'react-icons/bs'
import { GiHummingbird } from "react-icons/gi";

export default function Hero() {
    return (
        <section id='start-section' className={`hero is-fullheight `}> {/*${styles.bg_dark} */}
            {/* <!-- Hero head: will stick at the top --> */}
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <span className="navbar-burger" data-target="navbarMenuHeroA">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenuHeroA" className="navbar-menu">
                            <div className="navbar-end">
                                <Link className='navbar-item' href="#about-me">Sobre mi</Link>
                                <Link className='navbar-item' href="#skills">Habilidades</Link>
                                <span className="navbar-item">
                                    <a className="button is-dark" target='_blank'>
                                        <span className="icon">
                                            <BsGithub />
                                        </span>
                                        <span>Ver código</span>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            {/* <!-- Hero content: will be in the middle !--> */}
            <div className={`hero-body `}>
                <div className={`container has-text-centered `}>
                    <p className="title is-1">
                        ¡Bienvenido!
                    </p>
                    <p className="subtitle">
                        Al nido del colibrí <GiHummingbird size={50}/>
                    </p>
                </div>
            </div>
        </section>
    );
}