import './IphoneStyles.css'
import iphone from '../../assets/toss_iphone.png'
import appToss from '../../assets/charte/new_logo.png'
import appleBadge from '../../assets/app_store_badge.png'
import googlePlay from '../../assets/google_play.png'
import {useEffect } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin'



gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Iphone = () =>{
      //Animation on scroll
      const SlideLeftRotate= (elem)=>{
        gsap.fromTo(
            elem,
            
            {
              x:-400,
                opacity:0,
                rotate: -360,
                
    
            },
            {
                opacity:1,
               x:0,
               rotate:0,
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
        SlideLeftRotate('#iphone')
       
  
    },[])

    return (
        <div className="section-iphone">
            <img id='iphone' src={iphone}/>
            <div className="iphone-text">
                <h5> Pour rester connecté.e durant le week-end</h5>
            <h2 id='iphone-title'> Application <label>TOSS</label></h2>
            <p> Conçue pour vous, l'Application TOSS vous permettra de connaître en temps réel les résultats dans chaque tournoi et voir le classement général. Elle possède aussi un plan pour ne pas que tu te perdes durant ce long week-end</p>
            <img src={appToss} />
            <div className='download-links'>

                 <a href ="https://play.google.com/store/apps/details?id=com.cssports.TOSS2022"><img src={googlePlay}/></a>
          <a href ="https://apps.apple.com/fr/app/toss2022/id1620555133"><img src={appleBadge}/></a>
            </div>
           
            </div>
        </div>
    )
}

export default Iphone