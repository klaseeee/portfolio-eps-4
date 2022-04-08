import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { AppWrap } from '../../wrapper'

import './Header.scss'

const scaleVariants = {
  whileInView : {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginleft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className="head-text">Micael</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className='p-text'>Frontend Developer</p>
            <p className='p-text'>Solo Learner</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1]}}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1]}}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          className="overlay_circle"
          alt='profile_circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, item) => {
          return (
            <div className="circle-cmp app__flex" key={`circle-${circle}`}>
              <img src={circle} alt="circle" />
            </div>
          )
        })}

      </motion.div>

    </div>
  )
}

export default AppWrap( Header, 'home')