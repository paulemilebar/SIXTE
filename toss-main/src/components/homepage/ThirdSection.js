import React from 'react'
import './ThirdSectionStyles.css'
import CountUp from 'react-countup'
import { useState,useEffect } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin'



gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const ThirdSection = () => {

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
                  start:"top bottom",
                  end:"bottom center",
                  
                  toggleActions:"play none none none"
              }
          }
      )
  }

  


  useEffect(()=>{
      FadeBottom('#left-box')
      FadeBottom('#right-box')
  },[])

  
    const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} >
 <div className='third-section'>
      <div className='third-section-title'>
        <span>Le TOSS 2022</span>
        <h2> en chiffres</h2>
      </div>
      <div className='third-section-number'>
<div id ='left-box'>
    <h3> {counterOn && <CountUp start ={0} end={4500} duration={3} delay={0}></CountUp>}</h3>
    <p> participants</p>
</div>
<div id='center-box'>
    <h3>1 <sup>er</sup></h3>
    <p> tournoi omnisports etudiant français</p>
</div>
<div id='right-box'>
    <h3>{counterOn && <CountUp start ={0} end={19} duration={3} delay={0}></CountUp>}</h3>
    <p> Sports</p>
</div>

      </div>
     
    </div>
    </ScrollTrigger>
  
   

  )
}

export default ThirdSection
