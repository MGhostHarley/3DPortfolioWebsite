import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { textVariant } from '../utils/motion'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { Tooltip as ReactTooltip } from 'react-tooltip'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Technologies I Use</p>
        <p> &nbsp;</p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <>
              <div
                data-tooltip-id="tech"
                data-tooltip-content={technology.name}
              >
                <BallCanvas icon={technology.icon} />
              </div>
              <ReactTooltip id="tech" />
            </>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, 'tech')
