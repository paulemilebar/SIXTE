import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import Lightings from '../../assets/toss_video.mp4'
import Toss from '../../assets/toss_text.png'
import { AiFillCaretRight } from "react-icons/ai";
import test from "../../assets/toss_fond_iphone.jpeg"

import { BrowserView, MobileView} from 'react-device-detect';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import {useEffect,useRef} from 'react'
import Typed from 'react-typed';
import {useTranslation} from "react-i18next";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);





const Video = () => {
 
    const {t, i18n} = useTranslation('common');

    const onLoad1 = () =>{
      gsap.timeline().fromTo("#home-content",
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
  
  useEffect(()=>{
    onLoad1();
  
        },[])

    return (
        <div className='hero'>
<BrowserView>
 <video autoPlay loop muted id='video'>
                <source src={Lightings} type='video/mp4'  />
            </video>
</BrowserView>
           <MobileView>
                <div className='mobile-footage'>
                <img src={test} />
            </div>
           </MobileView>
        
            <div className='content' id='home-content'>
                <img src={Toss} alt='TOSS'/>
                <h3> 
                    <Typed
                    strings={[
                        `${t('home.date')}`,
                        `${t('home.edition')}`,
                       
                    ]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop/>
                </h3>
               
               

                <div>
                    <Link to='/contact' className='hero-btn'>Espace participant <AiFillCaretRight className='fleche-home'/> </Link>
                </div>
            </div>
        </div>
    )
}

export default Video