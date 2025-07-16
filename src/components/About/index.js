import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I'm a driven front-end developer passionate about crafting responsive and accessible web interfaces.</p>
                <p>I focus on writing clean, efficient code and collaborating effectively with designers and engineers.</p>
                <p>I constantly learn and adapt to modern technologies to deliver high-quality digital experiences.</p>
            </div>
        </div>
    )
}

export default About