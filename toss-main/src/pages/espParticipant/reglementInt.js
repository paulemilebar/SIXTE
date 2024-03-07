import React from "react";
import Footer from "../../components/modules/Footer";
import Navbar from "../../components/modules/Navbar";

import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { isMobile,BrowserView} from 'react-device-detect';
import {useEffect,useState} from 'react'



gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

const ReglementInt = () => {

    const [bolde ,setBold] = useState('image1');

    const PinElement = (elem,elem2)=>{
            
        gsap.fromTo(
            elem,
            
            {
              y:0,
            },
            {
               y:0, 
                duration:4,
                scrollTrigger:{
                    trigger:elem2,
                    start:"top top",
                    end:"bottom top",
                    markers:true,
                    toggleActions:"play reset resume pause",
                    pin:elem,
                    pinSpacing:false,
                    
                    
                },
                
               
                
            }
           
        )
        
    }

    const BoldeTitle = (elem,name)=>{
        gsap.fromTo(
            elem,
            
            {
              y:0,
            },
            {
               y:0, 
                duration:0.00001,
                scrollTrigger:{
                    trigger:elem,
                    start:"top top",
                    end:"bottom top",
                    markers:true,
                    toggleActions:"play reset play reset",
                    
                    
                    
                },
                onComplete: function(){
                    setBold(name);}
                
               
                
            }
           
        )
        
    }

    useEffect(()=>{
        if (!isMobile){
            PinElement('#row','#scroll-view')
            BoldeTitle('#image2','image2')
            BoldeTitle('#image1','image1')
            BoldeTitle('#image3','image3')
            BoldeTitle('#image4','image4')
            BoldeTitle('#image5','image5')
            BoldeTitle('#image6','image6')
        } 
    })


    
    return (
        <div>
            <Navbar/>
            <div className="blanks">
                <h1> Test</h1>
            </div>
            <div className="pres">
                <div className="scroll-view" id='scroll-view'></div>
                <div className="scroll-view1" id='image1'></div>
                <div className="scroll-view2" id='image2'></div>
                <div className="scroll-view3" id='image3'></div>
                <div className="scroll-view4" id='image4'></div>
                <div className="scroll-view5" id='image5'></div>
                <div className="scroll-view6" id='image6'></div>
                <div className="pres-row" id='row'>
                    <div className={`pres-image ${bolde}`}>
                    </div>
                    <div className="pres-content">
                        <h2 className={bolde === 'image1' ? 'bold' :''}> Bonjour</h2>
                        <h2 className={bolde === 'image2' ? 'bold' :''}> Bonjour</h2>
                        <h2 className={bolde === 'image3' ? 'bold' :''}> Bonjour</h2>
                        <h2> Bonjour</h2>
                        <h2> Bonjour</h2>
                    </div>
                </div>
              
                <h2> zfih</h2>

            </div>
            <Footer/>
        </div>
    )

}

export default ReglementInt