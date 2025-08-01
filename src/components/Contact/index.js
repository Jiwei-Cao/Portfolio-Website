import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
            const timer = setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
            return () => clearTimeout(timer)
        }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_haocbp9',
            'template_w8s0qon',
            refForm.current,
            '1bubQQVXhVTFEH1Hd'
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={"Contact me".split("")} idx={15}/>
                    </h1>
                    <p>
                        Thank you for your interest in reaching out! <br /><br />
                        I'm happy to answer questions, hear feedback, or discuss collaboration. <br />
                        Please use the contact form to get in touch.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li >
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Jiwei Cao, 
                    <br />
                    London, United Kingdom
                    <br />
                    <span>jiweicao2006@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[51.5074, -0.1278]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact