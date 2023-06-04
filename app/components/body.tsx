'use client';

import Image from 'next/image';
import styles from './body.module.css'
import { motion } from "framer-motion";
import { GiMuscleFat } from "react-icons/gi";
import {
    SiCsharp, SiMicrosoftsqlserver,
    SiKotlin, SiPython, SiLaravel,
    SiMysql, SiNodedotjs, SiReact
} from 'react-icons/si'

const imageStyle = {
    borderRadius: '45%',
    border: '1px solid #fff',
};


export default function Body() {
    return (
        <>
            <section id='about-me' className="hero is-dark is-large">
                <div className="hero-body py-6">
                    <div className='container'>
                        <div className="columns is-multiline is-centered">
                            <div className="column is-half has-text-centered">
                                <Image
                                    src="/img/sailor-cat.jpg"
                                    style={imageStyle}
                                    width={400}
                                    height={400}
                                    priority={true}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="column">
                                <div className="">
                                    <p className="title is-1 is-family-sans-serif has-text-centered">
                                        ¡Hola!
                                    </p>
                                    <br />
                                    <p className='title is-2 is-family-sans-serif has-text-centered'>
                                        Me llamo <span className='has-text-primary'>Camilo Urrego.</span>
                                    </p>
                                    <br />
                                    <p className="subtitle has-text-centered">
                                        Tecnologó en desarrollo de software de la
                                        <br />
                                        <span className='has-text-primary'> I.U. Pascual Bravo </span>
                                        de <span className='has-text-primary'> Medellín. </span>
                                    </p>
                                    <p className="subtitle has-text-centered">
                                        Me gusta programar y estoy buscando una oportunidad laboral.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='skills' className="hero is-medium">
                <div className="hero-body">
                    <div className='columns is-multiline is-centered'>
                        <h2 className='subtitle column is-half'>
                            Estos son los lenguajes que aprendí en la universidad. <GiMuscleFat size="40px" />
                            <br />
                            Confio en poder aprender más y poder utilizarlos profesionalmente.
                        </h2>
                        <br />
                    </div>
                    <div className="columns is-multiline is-centered">
                        <div className='column is-one-third'>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}>
                                <div className='box has-background-dark has-text-white'>
                                    <article className="media">
                                        <div className="media-left">
                                            <figure className="image">
                                                <SiCsharp size="100px" color='white' />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <strong className='has-text-white title is-4'>C#</strong>
                                                    <br />
                                                    Windows Forms y ASP.NET
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </motion.div>
                        </div>
                        <div className='column'>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}>
                                <div className='box has-background-dark has-text-white'>
                                    <article className="media">
                                        <div className="media-left">
                                            <figure className="image">
                                                <SiMicrosoftsqlserver size="100px" color='white' />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <strong className='has-text-white title is-4'>SQL Server</strong>
                                                    <br />

                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </motion.div>
                        </div>
                        <div className='column'>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20
                                }}>
                                <div className='box has-background-dark has-text-white'>
                                    <article className="media">
                                        <div className="media-left">
                                            <figure className="image">
                                                <SiKotlin size="100px" color='white' />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <strong className='has-text-white title is-4'>Kotlin Android</strong>
                                                    <br />
                                                    También Java Android
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hero">
                <div className="hero-body">
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{
                            scale: 0.8,
                            borderRadius: "100%"
                        }}
                    >
                        <div className='columns is-multiline is-centered'>
                            <div className="box column is-half px-6 has-background-dark">
                                <p className="subtitle has-text-centered has-text-white">
                                    Otros lenguajes que he practicado por mi cuenta haciendo pequeños
                                    proyectos
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <section className="hero is-medium">
                <div className="hero-body">
                    <motion.div initial="hidden" animate="visible" variants={{
                        hidden: {
                            scale: .8,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: .2
                            }
                        },
                    }}>
                        <div className="columns is-multiline is-centered">
                            <div className='column is-one-third'>
                                <div className='box has-background-dark has-text-white'>
                                    <article className="media">
                                        <div className="media-left">
                                            <figure className="image">
                                                <SiPython size="100px" color='white' />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <strong className='has-text-white title is-4'>Python</strong>
                                                    <br />

                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className='column is-one-third'>
                                <div className='box has-background-dark has-text-white'>
                                    <article className="media">
                                        <div className="media-left">
                                            <figure className="image">
                                                <SiLaravel size="100px" color='white' />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <strong className='has-text-white title is-4'>Laravel|PHP</strong>
                                                    <br />

                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className='column is-one-third'>
                                <div className='box has-background-dark has-text-white'>
                                    <article className="media">
                                        <div className="media-left">
                                            <figure className="image">
                                                <SiMysql size="100px" color='white' />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <strong className='has-text-white title is-4'>MySQL</strong>
                                                    <br />

                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className='column is-one-third'>
                                <div className='box has-background-dark has-text-white'>
                                    <article className="media">
                                        <div className="media-left">
                                            <figure className="image">
                                                <SiNodedotjs size="100px" color='white' />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <strong className='has-text-white title is-4'>Node.js</strong>
                                                    <br />

                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className='column is-one-third'>
                                <div className='box has-background-dark has-text-white'>
                                    <article className="media">
                                        <div className="media-left">
                                            <figure className="image">
                                                <SiReact size="100px" color='white' />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <div className="content">
                                                <p>
                                                    <strong className='has-text-white title is-4'>React.js</strong>
                                                    <br />
                                                    Next.js
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <section className="hero is-dark m-auto">
                <div className="hero-body">
                    <div className='columns is-multiline is-centered'>
                        <div className="box column is-half px-6 has-background-dark">
                            <p className="subtitle has-text-centered">
                                Aunque no tengo experiencia profesional, confio en poder aprender
                                y adecuarme para desempeñarme de la mejor manera.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}