import { useEffect, useRef } from 'react'
import './index.scss';
import LogoJ from '../../../assets/images/logo-j-bare.png'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial'

const Logo = () => {

    return (
        <div className="logo-container">
            <img className="solid-logo animate" src={LogoJ} alt="J" />
        </div>
    )
}

export default Logo
