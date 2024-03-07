import React from 'react'
import './FifthSectionStyles.css'
import SBCS from '../../assets/SBCS_blanc.png'
import {useEffect } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin'



gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);




const FifthSection = () => {
    //Animation on scroll
    const FadeBottom = (elem)=>{
      gsap.fromTo(
          elem,
          
          {
            y:100,
              opacity:0,
              
  
          },
          {
              opacity:1,
             y:0,
              duration:0.4,
              scrollTrigger:{
                  trigger:elem,
                  start:"-200px center",
                  end:"bottom center",
                  
                  
                  toggleActions:"play none none none"
              }
          }
      )
  }

  


  useEffect(()=>{
FadeBottom('#fifth-section-text')
  },[])

  return (
  
    <div className='fifth-section'>
      
        <div className='fifth-section-container'>
            <span className='txt '><img src={SBCS}/> <img src={SBCS}/> <img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/> </span>
            <span className='txt '><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/></span>
        
        </div>
        <div className='fifth-section-text' id='fifth-section-text'>
            <h2>La soirée est organisée en collaboration avec SBCS, l'association Sono Barco de CentraleSupélec </h2>
<a href='https://www.sbcs-events.fr/'> Voir leur site</a>
        </div>
        <div className='fifth-section-container2'>
        <span className='txt2'><img src={SBCS}/> <img src={SBCS}/> <img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/></span>
            <span className='txt2'><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/><img src={SBCS}/></span>
        </div>
       
    </div>

  )
}

export default FifthSection
