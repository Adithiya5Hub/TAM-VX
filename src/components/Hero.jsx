import React from 'react'
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>TAM <span className='text-[#915eff]'>VX</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span  className='text-[#915eff] font-bold'>TAM</span> stands for <span className='text-[#915eff] font-bold'>T</span>echnology <span className='text-[#915eff] font-bold'>A</span>wareness <span className='text-[#915eff] font-bold'>M</span>onth, where we conduct events on generating awareness amongst students about the latest practical technologies in the industry of engineering.
            <br className='sm:block hidden'/> TAM stands to be a knowledge-parting legacy from years! We are more than proud to introduce version <span className='text-[#915eff] font-bold'>10</span> of TAM for the year 2023-24. Come and join us to be a part of the biggest intelligence-rave of St. Martin’s Engineering College.
          </p>
        </div>
        
      </div>
      
      
     
    </section>
    
  )
}

export default Hero