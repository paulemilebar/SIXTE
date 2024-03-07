import React from 'react'
import './FourthSectionStyles.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const FourthSection = () => {

    const [isHover1, SetHover1] = useState(false);   
     const [isHover2, SetHover2] = useState(false);

  return (
  
    <div className='fourth-section'>
    <span className={isHover1 ? 'split-block left-move' : (isHover2 ? 'split-block right-move' :'split-block')}></span>
      <div className='fourth-section-1' onMouseEnter={() => SetHover1(true)} onMouseLeave={()=> SetHover1(false)}>
        <h3> Les sports du TOSS</h3>
        <Link to='/sports'>Découvrir</Link>
      </div>
      <div className='fourth-section-2' onMouseEnter={() => SetHover2(true)} onMouseLeave={()=> SetHover2(false)}>
      <h3> Tarif 2023</h3>
        <Link to='/tarif'>Découvrir</Link>
      </div>
    </div>

  )
}

export default FourthSection
