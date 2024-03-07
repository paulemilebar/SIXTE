import React from 'react'
import tossRun from '../../assets/toss_running.jpeg'
import './FirstSectionStyles.css'
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import {useEffect,useRef} from 'react'
import {isMobile} from 'react-device-detect'


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const FirstSection = () => {

  const slideInLeft = (elem)=>{
    gsap.fromTo(
        elem,
        
        {
            x:-40,
            opacity:0,
            

        },
        {
            opacity:1,
            x:0,
            duration:1,
            scrollTrigger:{
                trigger:elem,
                start:"top center",
                end:"bottom center",
               
                toggleActions:"play none none none"
            }
        }
    )
}
const slideInRight = (elem)=>{
    gsap.fromTo(
        elem,
        
        {
            x:40,
            opacity:0,
            

        },
        {
            opacity:1,
            x:0,
            duration:1,
            scrollTrigger:{
                trigger:elem,
                start:"top center",
                end:"bottom center",
                
                toggleActions:"play none none none"
            }
        }
    )
}

const slideInBottom = (elem)=>{
    gsap.fromTo(
        elem,
        
        {
            y:40,
            opacity:0,
            

        },
        {
            opacity:1,
            y:0,
            duration:1,
            scrollTrigger:{
                trigger:elem,
                start:"top center",
                end:"bottom center",
                
                toggleActions:"play none none none"
            }
        }
    )
}

useEffect(()=>{
    if (!isMobile){
        slideInLeft('#first-section-image')
        slideInRight('#first-section-texte')
    } else{
        slideInBottom('#first-section-image')
        slideInBottom('#first-section-texte') 
    }



      },[])

  return (
  
    <div className='first-section'>
      <div className='first-section-image' id='first-section-image'>
        <img src={tossRun} />
      </div>
      <div className='first-section-texte' id='first-section-texte'>
         <h5> Toss 2023</h5>

         <h2> 33<sup>ème</sup> édition</h2>
         <h3> Sur le campus de CentralSupélec</h3>

         <p> Organisé par le Bureau des Sports de CentraleSupélec, le TOSS est depuis plusieurs années le plus grand tournoi omnisports étudiant de France qui réunit chaque année des milliers de partiipants venus de toute la France.</p>
         <p> Mais le TOSS n'est pas qu'un tournoi sportif, vous pourrez également profiter de la présence de nombreuses activités (saut à l'élastique, lasergame, tir à l'arc, des escape games et bien d'autres) et d'un show de clôture hors du commun. Enfin, l'équipe organisatrice vous réserve également de nombreuses surprises pour sa 33ème édition, alors tenez-vous prêt !</p>
         
          <Link to='/contact' className='btn-first-section'>S'inscrire <AiFillCaretRight className='fleche'/> </Link>

      </div>
     
    </div>

  )
}

export default FirstSection
