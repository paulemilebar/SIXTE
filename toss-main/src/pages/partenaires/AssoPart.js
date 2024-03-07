
import React from 'react'
import Navbar from '../../components/modules/Navbar'
import {BsFileArrowDown} from 'react-icons/bs'
import { Link as LinkScroll} from 'react-scroll';
import './AssoPartStyles.css'
import { useEffect } from 'react';
import { isMobile,BrowserView} from 'react-device-detect';
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

//import images

import pics from '../../assets/asso_partenaire/pics.png'
import adr from '../../assets/asso_partenaire/adr.png'
import hyris from '../../assets/asso_partenaire/hyris.png'
import capese from '../../assets/asso_partenaire/çapèse.png'
import sbcs from '../../assets/asso_partenaire/sbcs.png'
import impact from '../../assets/asso_partenaire/impact.png'
import { Fade } from 'react-scroll-motion';
import Footer from '../../components/modules/Footer';

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

const AssoPart = () => {

  const FadeUpScroll = (elem)=>{
    gsap.fromTo(
        elem,
        
        {
          y:20,
          opacity:0
        },
        {
           y:0, 
           opacity:1,
            duration:1,
            scrollTrigger:{
                trigger:elem,
                start:"top center",
                end:"bottom center",
          
                toggleActions:"play none pause none",
                
                
                
            }
           
            
        }
       
    )
    
}
  useEffect(() =>{
    FadeUpScroll('#pics')
    FadeUpScroll('#hyris')
    FadeUpScroll('#adr')
    FadeUpScroll('#sbcs')
    FadeUpScroll('#impact')
    FadeUpScroll('#capese')
  },[])
    useEffect(() =>{
        let path = document.querySelector('.path')
        let mesure = isMobile? '3400' : '2800'
        let longueur = isMobile ? '2400' : '2700'

       
        window.addEventListener('scroll', () =>{
              var scrollPourcentage = (document.documentElement.scrollTop + document.body.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight);
              var drawLenght = mesure * scrollPourcentage - 200
              path.style.strokeDashoffset = longueur - drawLenght
        })
      

    },[])

 

    return (
        <div>
           <Navbar scroll='true' />
           <div className='asso-part'>
<h1> Les associations partenaires</h1>
<LinkScroll to='asso-part-content' smooth={true}  offset={-10} duration={1000}> <BsFileArrowDown style={{color:'black'}} className='fleche-mazars'/></LinkScroll>

           </div>
           <div className='asso-part-content'>
                <div className='line-container'>
                    <svg width="264" height="2381" viewBox="0 0 264 2381" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='path' d="M1.5 0.5V240.5C1.5 297.167 17.2 429.8 80 507C142.8 584.2 106.167 678.833 80 716.5C48.3333 752 -3.2 836 44 888C91.2 940 145.333 1003.33 166.5 1028.5C195.5 1068.83 234.2 1160.9 157 1206.5C60.5 1263.5 44 1414 44 1474.5C44 1534.83 58.4 1666 116 1708C188 1760.5 308.5 1844 245 1992.5C181.5 2141 132 2261 124 2380" stroke="black" strokeWidth="2"/>
                    </svg>
                </div>
                <div className='asso-part-inner'>
                    <div id='pics'>
                        <div >
                              <img src={pics}/>
                        </div>
                      <div className='asso-part-inner-content'>
                               <BrowserView className='asso-part-inner-titles'><h2> Pics</h2></BrowserView>  
                        <p> Pics est le club photo de CentraleSupélec, né de la fusion de Centrale Num, club photo de l'école Centrale Paris et du club photo de Supélec.

Leur activité principale est la couverture photographique des événements de la vie étudiante, mais ils réalisent aussi des prestations extérieures pour d’autres associations, d’autres écoles ou des entreprises. Une autre de leurs activités est la formation de nos membres et la sensibilisation des étudiants de l'école au monde de la photographie.

Ils utilisent plusieurs boitiers professionnels et une gamme d’objectifs nous permettant de réaliser tous types de clichés. L'association prend également des photos de studio sur fond blanc, vert ou noir.

N'hésitez pas à consulter leur page Facebook pour suivre leur actualité !</p>
<a href='https://galerie.pics/' className='btn-asso'> Voir leur site</a>
                      </div>
               
                    </div>
                    <div id='hyris'>
                        <div>
                              <img src={hyris}/>
                        </div>
                      <div className='asso-part-inner-content'>
                      <BrowserView className='asso-part-inner-titles'> <h2> Hyris</h2></BrowserView>
                        <p> Hyris c'est bien!

Hyris est né de la fusion de NX Télévision (école Centrale Paris) et de SMS (école Supérieure d'électricité) en 2017.

N'hézitez pas à visiter leur page facebook et leur site internet</p>
<a href='https://hyris.tv/' className='btn-asso'> Voir leur site</a>
                      </div>
               
                    </div>
                    <div id='adr'>
                        <div>
                              <img src={adr}/>
                        </div>
                      <div className='asso-part-inner-content'>
                      <BrowserView className='asso-part-inner-titles'>  <h2> Association des Résidents</h2></BrowserView>
                        <p> L'ADR ou l'association des résidents du campus de CentraleSupélec est l'association qui organise tout ce qui touche à la vie des résidents, c'est à dire la restauration, le contact avec les résidences, et bien sûr les soirées

Allez faire un tour sur leur page facebook</p>
<a href='https://adr.cs-campus.fr/' className='btn-asso'> Voir leur site</a>
                      </div>
               
                    </div>
                    <div id='sbcs'>
                        <div>
                              <img src={sbcs}/>
                        </div>
                      <div className='asso-part-inner-content'>
                      <BrowserView className='asso-part-inner-titles'>   <h2> SBCS</h2></BrowserView>
                        <p> SBCS (Sono Barco CentraleSupélec) est né de la fusion entre le BarcoTrip, la Sono Supélec et la Sono Centrale AdR. Leurs deux corps de métier que sont la sonorisation et l'éclairage (Sono CentraleSupélec) et le vidéo mapping (BarcoTrip) leur permettent de couvrir des évènements divers tant par leur nature que par leur taille.

Aller visiter leur site internet pour voir leurs plus grands événements</p>
<a href='https://www.sbcs-events.fr/' className='btn-asso'> Voir leur site</a>
                      </div>
               
                    </div>
                    <div id='impact'>
                        <div>
                              <img src={impact}/>
                        </div>
                      <div className='asso-part-inner-content'>
                      <BrowserView className='asso-part-inner-titles'>  <h2> Impact</h2></BrowserView>
                        <p> Née de la fusion entre ISF Supélec et de REMED(Centrale Pa), Impact est une association visant à promouvoir le développement durable à CentraleSupélec.

Cette association rend le campus de CentraleSupélec plus vert au quotidien en passant bien sur par tous les événements qui y sont organisés

N'hézitez pas à visiter leur page facebook</p>
<a href='' className='btn-asso'> Voir leur site</a>
                      </div>
               
                    </div>
                    <div id='capese'>
                        <div>
                              <img src={capese}/>
                        </div>
                      <div className='asso-part-inner-content'>
                      <BrowserView className='asso-part-inner-titles'>   <h2> Çapèse</h2></BrowserView>
                        <p> Çapèse est l'association féministe de CentraleSupélec, elle a pour but de promouvoir l'équité femmes-hommes au sein du campus.

Aller visiter leur site internet pour voir leurs actions</p>
<a href='https://capese.cs-campus.fr/' className='btn-asso'> Voir leur site</a>
                      </div>
               
                    </div>
                   




                    </div>
                    
        
           


           </div>
            <Footer/>
        </div>
    )
}

export default AssoPart