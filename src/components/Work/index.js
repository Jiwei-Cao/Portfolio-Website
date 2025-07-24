import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Timeline from './Timeline'

const HOVER_DELAY_MS = 3000

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, HOVER_DELAY_MS)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container work-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Work Experience'.split('')}
              idx={10}
            />
          </h1>
          <Timeline />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Work
