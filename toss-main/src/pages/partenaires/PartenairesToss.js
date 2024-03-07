
import React from 'react'
import './PartenairesTossStyles.css'
import Navbar from '../../components/modules/Navbar'
import {BsFileArrowDown} from 'react-icons/bs'
import { Link as LinkScroll} from 'react-scroll';
import {AiOutlineArrowRight} from 'react-icons/ai'
import { useState,useEffect,useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { isMobile,BrowserView} from 'react-device-detect';
import Footer from '../../components/modules/Footer';

//Logo entreprises
import logoToss from '../../assets/logo_toss_noir.png'
import mazarsLogo from '../../assets/partenaires/logoMazars.png'
import withings from '../../assets/partenaires/withings.png';
import avencore from '../../assets/partenaires/avencore.png';
import lydia from '../../assets/partenaires/lydia.png';
import bnp from '../../assets/partenaires/bnp.png';
import al from '../../assets/partenaires/al.png';
import ffsu from '../../assets/partenaires/ffsu.png';
import saclay from '../../assets/partenaires/saclay.png';
import polytechnique from '../../assets/partenaires/x.png';
import idf from '../../assets/partenaires/idf.png';
import cs from '../../assets/partenaires/cs.png';
import devoteam from '../../assets/partenaires/devoteam.png';


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);




const PartenairesToss = () => {

    const [desactive,setDesactive] = useState(false)
    const [bolde ,setBold] = useState(false);
    const myRef = useRef();
    const [myElementIsVisible,setMyElementVisible] = useState(false);

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
                    start:"top 20%",
                    end:"bottom 70%",
                 
                    toggleActions:"play reset resume pause",
                    pin:elem,
                    pinSpacing:false,
                    
                    
                },
                
               
                
            }
           
        )
        
    }
    const BoldeTitle = (elem)=>{
        gsap.fromTo(
            elem,
            
            {
              y:0,
            },
            {
               y:0, 
                duration:0.001,
                scrollTrigger:{
                    trigger:elem,
                    start:"top center",
                    end:"bottom center",
                
                    toggleActions:"play reset play reset",
                    
                    
                    
                },
                onComplete: function(){
                    setBold(elem);}
                
               
                
            }
           
        )
        
    }
  
    useEffect(()=>{
if (!isMobile){
    PinElement('.partenaires-title-content','#partenaires-presentation')
    BoldeTitle('#textile')
    BoldeTitle('#officiel')
    BoldeTitle('#numerique')
    BoldeTitle('#institution')
    BoldeTitle('#autres')
    BoldeTitle('#logistique')
} 


    },[])

    var tl = gsap.timeline({
            
    })
    const onLoad = () =>{
        gsap.timeline().fromTo("#on",
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

    useEffect(() =>{
        onLoad();
    },[])


    return (
        <div>
           <Navbar scroll='true' />
            <div className='partenaires-toss' id='part'>
                <div className='partenaires-toss-title'>
 <h1 id='on'> Nos partenaires</h1>
                <LinkScroll to='partenaires-presentation' smooth={true}  offset={0} duration={1000}> <BsFileArrowDown style={{color:'black'}} className='fleche-mazars'/></LinkScroll>
                </div>
                <div className='partenaires-presentation'  id='partenaires-presentation' ref={myRef}>
                    <div className={desactive ? 'partenaires-title-content desactive' : 'partenaires-title-content'} >
                        <div>
                            <div className='partenaires-image-toss'>
                                <img src={logoToss}/>
                            </div>
                            <ul  className='partenaires-category' id='partenaires-category'>
                                                <li className={bolde === '#officiel' ? 'bold' :''}>
                                                    <LinkScroll to='officiel' smooth={true} offset={-250} duration={1000}><h2>Partenaire officiel <AiOutlineArrowRight className='fleche-partenaire'/></h2></LinkScroll>
                                                </li>
                                                <li className={bolde === '#numerique' ? 'bold' :''}>
                                                    <LinkScroll to='numerique' smooth={true}  offset={-250} duration={1000}><h2>Partenaire numérique<AiOutlineArrowRight className='fleche-partenaire'/></h2></LinkScroll>
                                                </li>
                                                <li className={bolde ==='#institution'? 'bold' :''}>
                                                    <LinkScroll to='institution' smooth={true}  offset={-250} duration={1000}><h2>Partenaires institutionnels<AiOutlineArrowRight className='fleche-partenaire'/></h2></LinkScroll>
                                                </li>
                                                <li className={bolde === '#textile' ? 'bold' :''}>
                                                    <LinkScroll to='textile' smooth={true}  offset={-250} duration={1000}><h2>Partenaire textile<AiOutlineArrowRight className='fleche-partenaire'/></h2></LinkScroll>
                                                </li>
                                                <li className={bolde  ==='#logistique'? 'bold' :''}>
                                                    <LinkScroll to='logistique' smooth={true}  offset={-250}duration={1000}><h2>Partenaires logistiques<AiOutlineArrowRight className='fleche-partenaire'/></h2></LinkScroll>
                                                </li>
                                                <li className={bolde === '#autres' ? 'bold' :''}>
                                                    <LinkScroll to='autres' smooth={true}  offset={-250} duration={1000}><h2>Autres partenaires<AiOutlineArrowRight className='fleche-partenaire'/></h2></LinkScroll>
                                                </li>
                                                
                                            </ul> 
                        </div>
                       
                    </div>
                    <div className='partenaires-content'>
                        <div className='partenaires-inner' id='officiel'>
                            <div className='partenaires-inner-image'>
                                <img src={mazarsLogo}/>
                            </div>
                            <div className='partenaires-inner-content'>
                            <BrowserView><h3> Mazars</h3></BrowserView>
                                <p> Lorem zefih flzhf lzjf zfjzeofkmozkfm zmjzjlzekjc lzkcjlzke clzjc lzjcl zjclzjcl  </p>
                            </div>
                        </div>
                        <div className='partenaires-inner' id='numerique'>
                            <div className='partenaires-inner-image'>
                            <img src={devoteam}/>
                            </div>
                            <div className='partenaires-inner-content'>
                            <BrowserView> <h3> Devoteam</h3></BrowserView>
                                <p>  Lorem zefih flzhf lzjf zfjzeofkmozkfm zmjzjlzekjc lzkcjlzke clzjc lzjcl zjclzjcl  </p>
                            </div>
                        </div>
                        <div id='institution'>
                        <div className='partenaires-inner'>
                            <div className='partenaires-inner-image'>
                            <img src={cs}/>
                            </div>
                            <div className='partenaires-inner-content'>
                            <BrowserView> <h3> CentraleSupélec</h3></BrowserView>
                                <p>  Lorem zefih flzhf lzjf zfjzeofkmozkfm zmjzjlzekjc lzkcjlzke clzjc lzjcl zjclzjcl  </p>
                            </div>
                        </div>
                        <div className='partenaires-inner'>
                            <div className='partenaires-inner-image'>
                            <img src={idf}/>
                            </div>
                            <div className='partenaires-inner-content'>
                            <BrowserView> <h3> Ile de France</h3></BrowserView>
                                <p>  Lorem zefih flzhf lzjf zfjzeofkmozkfm zmjzjlzekjc lzkcjlzke clzjc lzjcl zjclzjcl  </p>
                            </div>
                        </div>
                        <div className='partenaires-inner'>
                            <div className='partenaires-inner-image'>
                            <img src={polytechnique}/>
                            </div>
                            <div className='partenaires-inner-content'>
                            <BrowserView> <h3> Polytechnique</h3></BrowserView>
                                <p>  Lorem zefih flzhf lzjf zfjzeofkmozkfm zmjzjlzekjc lzkcjlzke clzjc lzjcl zjclzjcl  </p>
                            </div>
                        </div>
                        <div className='partenaires-inner'>
                            <div className='partenaires-inner-image'>
                            <img src={saclay}/>
                            </div>
                            <div className='partenaires-inner-content'>
                            <BrowserView> <h3> Université Paris-Saclay</h3></BrowserView>
                                <p>  Lorem zefih flzhf lzjf zfjzeofkmozkfm zmjzjlzekjc lzkcjlzke clzjc lzjcl zjclzjcl  </p>
                            </div>
                        </div>
                        <div className='partenaires-inner'>
                            <div className='partenaires-inner-image'>
                            <img src={ffsu}/>
                            </div>
                            <div className='partenaires-inner-content'>
                            <BrowserView><h3> FFSU</h3></BrowserView>
                                <p>  Lorem zefih flzhf lzjf zfjzeofkmozkfm zmjzjlzekjc lzkcjlzke clzjc lzjcl zjclzjcl  </p>
                            </div>
                        </div>

                        </div>
                       
                        <div className='partenaires-inner' id='textile'>
                            <div className='partenaires-inner-image'>
                            <img src={al}/>
                            </div>
                            <div className='partenaires-inner-content'>
                               <BrowserView><h3> Agence Lifting</h3></BrowserView> 
                                <p>  Lorem zefih flzhf lzjf zfjzeofkmozkfm zmjzjlzekjc lzkcjlzke clzjc lzjcl zjclzjcl  </p>
                            </div>
                        </div>
                        <div id='logistique'>
  <div className='partenaires-inner'>
                            <div className='partenaires-inner-image'>
                            <img src={bnp}/>
                            </div>
                            <div className='partenaires-inner-content'>
                            <BrowserView><h3> BNP Parisbas</h3></BrowserView>
                                <p>  Lorem zefih flzhf lzjf zfjzeofkmozkfm zmjzjlzekjc lzkcjlzke clzjc lzjcl zjclzjcl  </p>
                            </div>
                        </div>
                        <div className='partenaires-inner'>
                            <div className='partenaires-inner-image'>
                            <img src={lydia}/>
                            </div>
                            <div className='partenaires-inner-content'>
                            <BrowserView><h3> Lydia</h3></BrowserView>
                                <p>  Lorem zefih flzhf lzjf zfjzeofkmozkfm zmjzjlzekjc lzkcjlzke clzjc lzjcl zjclzjcl  </p>
                            </div>
                        </div>
                        </div>
                      
                        <div className='partenaires-inner' id='autres'>
                            <div className='partenaires-inner-image'>
                            <img src={avencore}/>
                            </div>
                            <div className='partenaires-inner-content'>
                            <BrowserView><h3> Avencore</h3></BrowserView>
                                <p>  Lorem zefih flzhf lzjf zfjzeofkmozkfm zmjzjlzekjc lzkcjlzke clzjc lzjcl zjclzjcl  </p>
                            </div>
                        </div>
                        <div className='partenaires-inner'>
                            <div className='partenaires-inner-image'>
                            <img src={withings}/>
                            </div>
                            <div className='partenaires-inner-content'>
                            <BrowserView> <h3> Withings</h3></BrowserView>
                                <p>  Lorem zefih flzhf lzjf zfjzeofkmozkfm zmjzjlzekjc lzkcjlzke clzjc lzjcl zjclzjcl  </p>
                            </div>
                        </div>
                    </div>
                   
                
                </div>
               


            </div>
            <Footer />
        </div>
    )
}

export default PartenairesToss