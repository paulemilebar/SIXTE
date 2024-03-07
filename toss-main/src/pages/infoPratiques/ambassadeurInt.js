import React from "react";
import Navbar from "../../components/modules/Navbar";
import './ambassadeurIntStyles.css'
import {BsFileArrowDown} from 'react-icons/bs'
import { Link as LinkScroll} from 'react-scroll';
import {BsArrowDownCircle} from 'react-icons/bs'
import Footer from "../../components/modules/Footer";

import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPluging from 'gsap/ScrollToPlugin'
import gsap from 'gsap';
import {useEffect} from 'react'



gsap.registerPlugin(ScrollTrigger,ScrollToPluging);



const AmbassadeurInt = () => {

    const onLoad = () =>{
        gsap.timeline().fromTo("#ambassadeurs",
        {
            y: 50,
            opacity:0,
        },
        {
            y:0,
            opacity:1,
            duration:1.5,
        })
        
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
                    toggleActions:"play none none none",
                    
                },
                
            }
           
        )
        
    }
    
    useEffect(()=>{
        onLoad();
        FadeBottom('#link1',0)
        FadeBottom('#link2',0.3)
        FadeBottom('#text1',0)
        FadeBottom('#text2',0)

    
          },[])
          
    return (
        <div>
            <Navbar scroll='true' color='#066C38'/>
            <div className="ambassadeur">
                <div className="ambassadeur-title">
                     <h1 id='ambassadeurs'> Devenir ambassadeur</h1>
                    <h3 id='ambassadeurs'>
                        Toutes les informations nécessaires ci-dessous
                    </h3>
                    <LinkScroll to='ambassadeur-image' smooth={true}  offset={100} duration={1000}> <BsFileArrowDown className='fleche-ambassade'/></LinkScroll>
                </div>
                <div className="ambassadeur-image" id="ambassadeur-image">
                    
                    <div className="ambassadeur-img">

                    </div>
                </div>
                <div className="ambassadeur-link" >
                    <div className="link-content" id='link1'>
                        <LinkScroll to='presentation' smooth={true}  offset={-20} duration={1500}>
                              <h3> Qu'est-ce que le TOSS?</h3>
                        <BsArrowDownCircle className="fleche-down"/>
                        </LinkScroll>
                      
                    </div>
                    <div className="link-content" id='link2'>
                    <LinkScroll to='ambassadeur' smooth={true}  offset={-20} duration={2000}>
                              <h3> Comment devenir ambassadeur?</h3>
                        <BsArrowDownCircle className="fleche-down"/>
                        </LinkScroll>
                    </div>
                    
                    
                </div>
                <div className="ambassadeur-card presentation" id='presentation'>
                    <div className="circle-1-ambassadeur"></div>
                    <div className="circle-2-ambassadeur"></div>
                    <div className="circle-3-ambassadeur"></div>
                    <h2> Qu'est-ce que le TOSS?</h2>
                    <div className="ambassadeur-presentation-content" id='text1'>
                        <p>
                        Le TOSS revient pour sa 33e édition, les <span>12, 13 et 14 mai 2023</span> sur le Campus de CentraleSupélec, une école d’ingénieur française située sur le Plateau de Saclay, technopôle regroupant universités, grandes écoles d’ingénieur, instituts de recherche privés et publics, à moins d’1h de Paris en transports en commun.
                        </p>
                        <p>
                        Le TOSS est le <span>plus gros tournoi omnisport étudiant de France</span>, rassemblant, le temps d’un week-end, <span>4500 participants</span> venus d’universités françaises et européennes. Il est organisé par le Bureau des Sports de CentraleSupélec, qui travaille déjà d’arrache-pied à vous faire vivre le meilleur week-end de l’année ! En quelques mots, le TOSS c’est :
                        </p>
                        <ul>
                            <li>
                            <span>Des sports par équipe : </span>athlétisme, basket, cheerleading, football, handball, natation, rugby, volleyball, spikeball, ultimate
                            </li>
                            <li>
                            <span>Des sports individuels :</span> badminton simple et double, boxe, escalade, escrime, judo, tennis, tennis de table, 10km
                            </li>
                            <li>
                            <span>Des activités insolites :</span> lasergame, paintball, saut à l’élastique, tir, feu d’artifice, et bien d’autres…
                            </li>
                            <li>
                            Ainsi qu’une <span>soirée le samedi</span>, dans les locaux de CentraleSupélec
                            </li>
                        </ul>
                        <p>
                        Mais c'est également l'opportunité de découvrir la vie étudiante française, une culture festive et sportive ponctuée par de nombreux événements, dont le TOSS, l'un de ses chefs de file, vous fera garder un <span>souvenir inoubliable.</span>
                        </p>
                        <p>

                        </p>

                    </div>
                </div>
                <div className="ambassadeur-card how" id='ambassadeur'>
                <div className="circle-1-ambassadeur"></div>
                    <div className="circle-4-ambassadeur"></div>
                <div className="circle-3-ambassadeur"></div>

                    <h2> Comment devenir ambassadeur ?</h2>
                    <div className="ambassadeur-presentation-content" id='text2'>
                                          <p> Si l’idée t’intéresse, et que tu es <span>prêt à chauffer des étudiants de ton université</span>, nous te proposons de devenir ambassadeur du TOSS à l’étranger, afin de profiter d’une inscription gratuite au tournoi si tu arrives à motiver les gens de ton campus et à ramener au moins une équipe !</p>
  <button>Envoyez un mail</button>
                    </div>
                </div>
               
            </div>
            <Footer color='#066C38' color2='rgb(14 80 47)'/>
        </div>
    )

}

export default AmbassadeurInt