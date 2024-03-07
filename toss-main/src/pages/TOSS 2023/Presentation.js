
import React from 'react'
import './PresentationStyles.css'
import Navbar from '../../components/modules/Navbar'
import Footer from '../../components/modules/Footer';

import { Link } from 'react-router-dom';
import ScrollText from '../../components/ScrollText'

import {motion} from 'framer-motion'


import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import {useEffect,useState,useRef} from 'react'
import { isMobile,BrowserView} from 'react-device-detect';

import Images from '../../components/function/ImagesCaroussel'

import CountUp from 'react-countup'
import {IoBookmarksOutline} from 'react-icons/io5'
import {AiOutlineArrowRight} from 'react-icons/ai'



gsap.registerPlugin(ScrollTrigger);



const Presentation = () => {

          //Animation on scroll
          const FadeUp2= (elem)=>{
            gsap.fromTo(
                elem,
                
                {
                  y:50,
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
                        
                      
                    }
                }
            )
        }     
        const FadeBottom = (elem,time)=>{
            
            gsap.fromTo(
                elem,
                
                {
                  y:100,
                    opacity:0,
                    
        
                },
                {
                    opacity:1,
                   y:0, 
                   
                    duration:0.8,
                    delay:time,
                    scrollTrigger:{
                        trigger:elem,
                        start:"-50% 80%",
                        end:"bottom center",
                    
                        onEnter:setCounterOn(true),
                        toggleActions:"play none none none",
                        
                    },
                    
                }
               
            )
            
        }
    
    
        
        
      
      
        useEffect(()=>{
            FadeUp2('#carousel')
            FadeBottom('#presentation-numbers1',0)
            FadeBottom('#presentation-numbers2',0.2)
            FadeBottom('#presentation-numbers3',0.4)
           
      
        },[])


    const [widthWrap, setWidthWrap] = useState(0)
    const carousel = useRef();

    useEffect(()=>{
        
        setWidthWrap(carousel.current.scrollWidth - carousel.current.offsetWidth);

    },[])

    const [counterOn, setCounterOn] = useState(false);


    
    return (
        <div>
           <Navbar scroll='false' />
            <ScrollText/>
            <div className='presentation' id='carousel'>
             
                <motion.div  ref={carousel} className='carousel' >
                    <motion.div drag='x' dragConstraints={{right:0, left :-widthWrap}} className='inner-carousel'>
                        {Images.map((image,index) => {
                            return(
                                <motion.div key={index} className='item'>
                                    <img src={image.src} alt=''/>
                                    <p> {image.title}</p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </motion.div>
                
                <div className='presentation-sports'>
                    <Link to='/sports'> Voir les sports</Link>
                </div>
                <div className='presentation-team' id='presentation-team'>
                    <h2> BDS CentraleSupélec</h2>
                    <div className='presentation-image'>
                        
                    </div>
                    <div className='presentation-numbers' >
                        <div id='presentation-numbers1'>
                            <h6> Créé en</h6>
                            <h4> {counterOn && <CountUp start ={0} end={1989} duration={2} delay={0}></CountUp>}</h4>
                           
                        </div>
                        <div id='presentation-numbers2'>
                      
                            <h4> {counterOn && <CountUp start ={0} end={42} duration={2} delay={0.5}></CountUp>}</h4>
                            <p> membres</p>
                        </div>
                        <div id='presentation-numbers3'>
                      
                            <h4> {counterOn && <CountUp start ={0} end={240} duration={2} delay={1}></CountUp>}</h4>
                            <p> bénévoles</p>
                        </div>
                       
                    </div> 
                    <p> Créé en 1989 par le Bureau des Sports de l’École Supérieure d’Électricité (désormais CentraleSupélec), le TOSS n’a cessé de se développer. C’est aujourd’hui l’histoire d’une <span>équipe organisatrice de 42 membres</span>, travaillant dans l’optique d'offrir un événement de qualité professionnelle aux participants. Epaulée le jour J par près de <span>240 bénévoles renommés Team TOSS</span> pour l’occasion, l’équipe assure un suivi optimal des compétiteurs le temps du week-end.</p>
                    <a href='https://cs-sports.fr/BDS/index.php'> Voir notre site <AiOutlineArrowRight className='team-arrow'/></a>
                </div>
                <div className='presentation-amelioration'>
                    <h2> Une amélioration d'édition en édition </h2>
                    <div className='presentation-amelioration-content'>
                        <p>Le TOSS est aujourd’hui implanté et <span>reconnu dans le domaine de l’événementiel sportif français</span>, la quête de l’amélioration continue est partagée par tous, et c’est pourquoi l’équipe s’engage davantage dans des projets innovants et responsables. Nous ne cessons de vouloir satisfaire davantage nos participants en analysant soigneusement le questionnaires qu'ils nous soumettent à la suite de l'événement, et en leur <span>offrant des nouveautés et expériences exceptionnelles</span> sur chaque édition.</p>
                        <a href=''><IoBookmarksOutline className='book'/> Notre politique qualité</a>
                    </div>
                </div>
                <div className='presentation-edition'>
                    <h2> La 33<sup>ème</sup> édition</h2>
                    <p>
                    La 33ème édition est tout d’abord marquée par l’arrivée d'un nouveau sport : l'athlétisme fait son apparition parmi les sports proposés au TOSS !
                    </p>
                    <p>
                    De plus, l’édition 2023 sera éco-responsable. Nous souhaitons faire du TOSS un évènement vert et nous mettrons en place cette année de nombreuses nouveautés afin de limiter autant que possible l'impact de l'évènement sur l'environnement.
                    </p>
                    <p>
                    Nous avons aussi décidé de promouvoir le handisport au travers d'un tournoi de basket fauteuil, de l'ouverture du tournoi de tennis de table aux personnes à mobilité réduite, ainsi que d'un parcours du 10km Mazars en joëlettes.
                    </p>
                    <p>
                    Enfin, l’équipe organisatrice te réserve de nombreuses autres surprises et nouveautés, notamment une cérémonie de clôture qui s’annonce spectaculaire...
                    </p>
                </div>
            </div>

             <Footer />
        </div>

            
     
    )
}

export default Presentation



