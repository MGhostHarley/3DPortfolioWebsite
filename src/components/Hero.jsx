import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { personalPhotos } from '../constants'

const PictureCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[300px] pr-10">
      <motion.div
        variants={fadeIn('up', 'spring', 0.5 * index, 0.75)}
        className=" green-pink-gradient p-4 px-5 rounded-[20px]  shadow-card items-stretch w-[300px] h-[400px]"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-2 px-2 justify-evenly items-stretch flex flex-col w-full h-full"
        >
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-cover rounded-2xl "
          />
        </div>
      </motion.div>
    </Tilt>
  )
}

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`} // !PCheck
      >
        <div className="flex flex-col justify-center items-center mt-4">
          <div className="w-5 h-5 rounded-full bg-[#9153ff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Em</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Software Engineer that builds APIs.{' '}
            <br className="sm:block hidden" />I am a team player and a joy to
            work with.
          </p>
          <div className="mt-20 -mx-4 flex flex-wrap gap-7">
            {personalPhotos.map((photo, index) => (
              <>
                <PictureCard key={`photo-${index}`} index={index} {...photo} />
                <p className="p-5"> &nbsp;</p>
              </>
            ))}
          </div>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
