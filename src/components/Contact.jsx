import React from 'react'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'

const Contact = () => {
  return (
    <>
    <div className='flex items-center h-fit py-4 px-6'>
      <p className={`${styles.sectionHeadText} text-center`}>Questions for <span className='text-[#915eff] '>TAM ?</span></p>
      
      <button type='button' className='flex items-center h-fit py-4 px-6 ms-80 bg-[#25618B] rounded-[32px] gap-[12px] font-bold text-lg'><a href="#">Contact Us</a></button>
    </div>
    
    <div>
    <p className={`${styles.sectionSubText} text-center`}>Contact Us </p>
    </div>
    </>
  )
}

export default SectionWrapper(Contact,"contact")