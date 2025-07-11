import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-j.png'
import './index.scss';

const Home = () => {
    

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                    <img src={LogoTitle} alt="developer" />
                    iwei
                    <br />
                    web developer
                </h1>
                <h2>Full-Stack Developer / Machine Learning Expert / Cloud Engineer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home