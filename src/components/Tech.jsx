import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import {fadeIn} from '../utils/motion'



const Tech = () => {
  return (
    <>
      <motion.div variants={fadeIn("right", "spring")}>
        <img src="https://ik.imagekit.io/o3b14qow3gqi/Crew/princi_O8p_H9fUo_tS.jpg?updatedAt=1647430271746" alt="Principal" width="600px" className='rounded-lg'/>
        <h3 className='sm:text-[18px] text-[14px] text-secondary tracking-wider font-bold'>| Board Of <span className='text-[#915eff]' >Director</span></h3>
        <h2 className='text-white font-bold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Dr.P.Santosh Kumar Patra</h2>
        <p className= "sm:text-[18px] text-[14px] text-secondary tracking-wider">Dr.P.Santosh Kumar Patra , Principal of St.Martin's Engineering College is holding B.E. in Computer Science & Engineering, MTech in Computer Science & Engineering and Ph.D in Computer Science & Engineering degrees. His area of interests are Airtificial Intelligence,Software Engineering , Data mining and warehousing & Wireless Networks.</p>
      </motion.div>
      
    </>
    
  )
}

export default SectionWrapper(Tech,"principal")