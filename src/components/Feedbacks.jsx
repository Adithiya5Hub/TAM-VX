import React from 'react'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
const TAM_Crew = () => {
  return (
    <>
    <div className='border-4 border-indigo-500/100 rounded-lg p-14'>      
    <h2 className={`${styles.heroHeadText}`}><span className='text-[#915eff] font-bold'>TAM</span> Crew</h2> 
    <p className={`${styles.heroSubText}`}>“Every great organization has a great team. We as a crew at TAM have made it a point to ensure that every event is filled with a great deal of success, in addition to ensuring every participant is able to be served with equal priority.</p>
    <br />
    <br />
    <img src="https://smectam.in/planet-09.png" alt="TAM Crew" className='rounded-lg cursor-pointer hover:animate-pulse' />
    </div>
    </>
  )
}

export default SectionWrapper(TAM_Crew,"crew")