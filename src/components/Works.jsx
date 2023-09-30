import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import {fadeIn} from '../utils/motion'
const Works = React.memo(() => {
  return (
    <motion.div variants={fadeIn("right", "spring")} >
      <img src="https://ik.imagekit.io/o3b14qow3gqi/Crew/sss_z642MOd4G.jpg?updatedAt=1647509408608" width="600px" className='rounded-lg'/>
      <br />
      <h3 className='sm:text-[18px] text-[14px] text-secondary tracking-wider font-bold'>| Faculty <span className='text-[#915eff]'>Advisor</span></h3>
      <h2 className='text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>E.Sowmya</h2>
      <p className= "sm:text-[18px] text-[14px] text-secondary tracking-wider">Every great organization has a great team and every great teams need a great Advisor. We as a crew at TAM have made it a point to ensure that every event is filled with a great deal of success, in addition to ensuring every participant is able to be served with equal priority. From planning the events to marketing, to making our website, we make sure that we are meeting the needs of every participant.</p>
    </motion.div>
  )
})

export default SectionWrapper(Works,"faculty")