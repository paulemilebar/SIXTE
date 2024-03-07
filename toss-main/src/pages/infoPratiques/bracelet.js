import React from "react";
import Footer from "../../components/modules/Footer";
import Navbar from "../../components/modules/Navbar";
import './braceletStyles.css'
import {BsFileArrowDown} from 'react-icons/bs'
import { Link as LinkScroll} from 'react-scroll';
import DevoTeam from '../../assets/partenaires/devoteam.png'
import payInTech from '../../assets/partenaires/payintech.png'
import {BiDollar, BiDollarCircle, BiInfinite} from 'react-icons/bi'
import {RiRefund2Fill} from 'react-icons/ri'
import {AiOutlineDollarCircle} from 'react-icons/ai'
import braceletPic from '../../assets/bracelet.jpeg'
import {TbRecharging} from 'react-icons/tb'
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPluging from 'gsap/ScrollToPlugin'
import gsap from 'gsap';
import {useEffect} from 'react'
import { isMobile} from 'react-device-detect';



gsap.registerPlugin(ScrollTrigger,ScrollToPluging);




const Bracelet = () =>{

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
               
                duration:0.8,
                scrollTrigger:{
                    trigger:elem,
                    start:"-50% 80%",
                    end:"bottom center",
                    toggleActions:"play none none none",
                    
                },
                
            }
           
        )
        
    }

 
    const FadeLeft = (elem)=>{
            
        gsap.fromTo(
            elem,
            
            {
              x:-50,
                opacity:0,
                
    
            },
            {
                opacity:1,
               x:0, 
               
                duration:0.8,
                scrollTrigger:{
                    trigger:elem,
                    start:"-50% 80%",
                    end:"bottom center",
                    toggleActions:"play none none none",
                    
                },
                
            }
           
        )
        
    }

    const FadeRight = (elem)=>{
            
        gsap.fromTo(
            elem,
            
            {
              x:50,
                opacity:0,
                
    
            },
            {
                opacity:1,
               x:0, 
               
                duration:0.8,
                scrollTrigger:{
                    trigger:elem,
                    start:"-50% 80%",
                    end:"bottom center",
                    toggleActions:"play none none none",
                    
                },
                
            }
           
        )
        
    }

    //Pour adapter le responsive
    const Xvalue = isMobile ? 0 : -100;

    // Fonction pour le texte avec l'image
    const FadeRight2 = (elem)=>{
            
        gsap.fromTo(
            elem,
            
            {
              x:0,
                opacity:0,
                
    
            },
            {
                opacity:1,
               x:Xvalue, 
               
                duration:0.8,
                scrollTrigger:{
                    trigger:elem,
                    start:"-50% 80%",
                    end:"bottom center",
                    toggleActions:"play none none none",
                    
                },
                
            }
           
        )
        
    }
  
    useEffect(()=>{
    FadeBottom('#center-card')
    FadeLeft('#left-card')
    FadeRight("#right-card")
    FadeRight2("#bracelet-content")
    FadeBottom('#bracelet-perte')
    },[])

    return (
        <div>
            <Navbar color='#f8485e'/>
            <div className="bracelet">
                <div className="bracelet-title">
                    <h1> Les bracelets cashless</h1>
                    <LinkScroll to='presentation' smooth={true}  offset={-10} duration={1000}> <BsFileArrowDown style={{color:'#56555a'}} className='fleche-mazars'/></LinkScroll>

                </div>
                <div className="bracelet-presentation" id='presentation'>
                    <h4>
                    Cette année encore, nous avons décidé de te simplifier la vie au TOSS : que tu aies envie d’accéder aux activités, de te restaurer, ou encore de profiter de la buvette durant le week-end, tu n’auras besoin que d’une chose : ton <div className="gradient-text">Bracelet Cashless !</div>
                    </h4>

                </div>
                <div className="bracelet-content">
                    <div className="bracelet-images">
                        <img src={DevoTeam}/>
                        <h2> X</h2>
                        <img src={payInTech}/>
                    </div>
                    <h3> Ce bracelet, développé grâce à notre partenaire <span>Devoteam ©</span> et s’appuyant sur la technologie de <span>Payintech ©</span>, te sera distribué dans ton Pack Accueil à ton arrivée sur le campus. Tu pourras le <span>recharger à plusieurs reprises</span> : à l’accueil le vendredi soir et le samedi matin, à côté de la buvette du Village TOSS durant la journée mais aussi sous le chapiteau pendant la soirée. Il te suffit d’amener le montant souhaité en espèces ou par carte bancaire et il sera crédité automatiquement sur ton bracelet.</h3>
                    <div className='bracelet-numbers field'>
                            <div id='left-card'>
                                <h4> Rechargeable</h4>
                                <TbRecharging className="icon"/>
                            </div>
                            <div id='center-card'> 
                            <h4> Surplus remboursé</h4>
                            <RiRefund2Fill className="icon"/>
                            </div>
                            <div id='right-card'>
                            <h4> Argent dématérialisé</h4>
                            <AiOutlineDollarCircle className="icon"/>
                            </div>

                        
                     </div>
                     <div>
                        <h3> Attention, <span>ne le perds pas !</span> Tu devras te rendre à côté de la buvette du Village TOSS et te <span>défausser de 5 euros</span> pour en récupérer un. S’il te reste un solde non nul sur ton bracelet à la fin du TOSS, pas d’inquiétude : <span>tu seras remboursé</span> sur notre plateforme après l’événement.</h3>
                     </div>

                </div>
                <div className="bracelet-recup">
                   
                    <h2>
                        Récupérer son bracelet
                    </h2>
                    <div className="bracelet-container">
                        <div className="bracelet-img"> </div>
                        <div className="bracelet-recup-content" id='bracelet-content'>
                             <p> Tu dois récupérer ton bracelet <span>dès ton arrivée</span> entre vendredi 18h et samedi matin 9h en même temps que ton pack accueil à l’accueil. Si tu es en retard, il te faudra venir le chercher au Village TOSS situé à côté de notre buvette. Ce bracelet te donnera accès aux activités, aux repas ainsi qu’au paiement aux buvettes.</p>
                             <p> Tu auras différentes occasions pour le recharger : à côté de la buvette du Village TOSS ouverte toute la journée, sous le chapiteau durant la soirée mais tu peux également le recharger en ligne.</p>
                             <p> Le principe est simple : tu échanges un certain montant en espèces ou par carte bancaire contre ce même montant crédité directement sur ton bracelet.</p>
                        </div>
                    </div>
                
                </div>
                <div className="bracelet-perte">
                    <h2> Perte de bracelet</h2>
                    <p id='bracelet-perte'>
                    Tu as perdu ton bracelet, rends-toi à côté de la <span>buvette du Village TOSS</span> pour en avoir un nouveau. Le solde est conservé, mais tu devras te <span>défausser de 5€</span> contre ce nouveau bracelet.
                    </p>

                </div>
                                

            </div>
            <Footer color='#f8485e' color2='rgb(222 45 67)'/>
        </div>
    )

}

export default Bracelet