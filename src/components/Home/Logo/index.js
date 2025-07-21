import './index.scss';
import LogoJ from '../../../assets/images/logo-j-bare.png'

const Logo = () => {

    return (
        <div className="logo-container">
            <img className="solid-logo animate" src={LogoJ} alt="J" />
        </div>
    )
}

export default Logo