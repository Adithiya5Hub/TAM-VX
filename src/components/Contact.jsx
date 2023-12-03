import React from 'react'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'

const Contact = () => {
  return (
    <>
    <div className='flex items-center h-fit py-4 px-6'>
      <p className={`${styles.sectionHeadText} text-center`}>Questions for <span className='text-[#915eff] '>TAM ?</span></p>
      
      {/* <button type='button' className='flex items-center h-fit py-4 px-6 ms-80 bg-[#25618B] rounded-[32px] gap-[12px] font-bold text-lg'><a href="#">Contact Us</a></button> */}
    </div>
    
    <div>
    <p className={`${styles.sectionSubText} text-center hover:text-violet-600 animate-bounce cursor-pointer`}>Contact Us</p>
      <div className='flex justify-evenly p-6'>
        <a href="https://www.instagram.com/smec.tam.vx/" target='_blank'><img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt="Instagram" className='w-12 h-12 hover:scale-125' /></a>
        <a href="https://www.linkedin.com/in/tam-vx-technology-awareness-month-2024982a0/" target='_blank'><img src="https://cdn-icons-png.flaticon.com/128/3992/3992606.png" alt="LinkedIn" className='w-12 h-12 hover:scale-125 ' /></a>
        <a href="https://forms.gle/BWownWZrgUx9nTZe8" target='_blank'><img src="https://cdn-icons-png.flaticon.com/128/2991/2991110.png" alt="Google Form" className='w-14 h-14 hover:scale-125 ' /></a>
      </div>
    
    </div>
    </>
  )
}
{/*helloo again */}
{/*helloo again */}
{/*helloo again */}

{/*helloo again */}


export default SectionWrapper(Contact,"contact")