import React, { useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from "react-loaders";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faCss3, faJava, faHtml5, faAmazon, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"About me".split("")}
                        idx={15}
                    />
                </h1>
                <p>I'm a driven front-end developer passionate about crafting responsive and accessible web interfaces.</p>
                <p>I focus on writing clean, efficient code and collaborating effectively with designers and engineers.</p>
                <p>I constantly learn and adapt to modern technologies to deliver high-quality digital experiences.</p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                     <div className = "face1">
                            <FontAwesomeIcon icon={faAmazon}/>
                        </div>
                        <div className = "face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        </div>
                        <div className = "face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                        </div>
                        <div className = "face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                        </div>
                        <div className = "face5">
                            <FontAwesomeIcon icon={faPython} color="#ffd700"/>
                        </div>
                        <div className = "face6">
                            <FontAwesomeIcon icon={faJava} color="#EC4D28"/>
                    </div>
                </div>
            </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About