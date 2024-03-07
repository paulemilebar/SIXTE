
import React from 'react'
import Navbar from '../../components/modules/Navbar'
import './MazarsStyles.css'
import mazarsLogo from '../../assets/partenaires/logoMazars.png'
import { useState,useEffect } from 'react'
import CountUp from 'react-countup'
import Footer from '../../components/modules/Footer'
// import ScrollTrigger from 'react-scroll-trigger'
import {BsArrowRight} from 'react-icons/bs'
import {BsFileArrowDown} from 'react-icons/bs'
import { Link as LinkScroll} from 'react-scroll';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPluging from 'gsap/ScrollToPlugin'
import gsap from 'gsap';



gsap.registerPlugin(ScrollTrigger,ScrollToPluging);

const Mazars = () => {
        //Animation on scroll
        var tl = gsap.timeline({
            
        })
        const onLoad = () =>{
            gsap.timeline().fromTo("#off",
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
                        
                        onEnter:setCounterOn(true),
                        toggleActions:"play none none none",
                        
                    },
                    
                }
               
            )
            
        }
     
        
      
      
        useEffect(()=>{
            onLoad();
        FadeBottom('#mazars-numbers1',0)
        FadeBottom('#mazars-numbers2',0.2)
        FadeBottom('#mazars-numbers3',0.4)
        FadeBottom('#mazars-numbers4',0.6)
        },[])


    const [counterOn, setCounterOn] = useState(false);

return ( 
<div>
    <Navbar scroll='true' color='#09208f'/>
            <div className='mazars'>
                <div className='mazars-title'>
                    <h3 id='off'> Partenaire officiel</h3>
                    <img id='off' src={mazarsLogo}/>
                    <h5 id='off'>partenaire du BDS de CentraleSupélec depuis plus de 15 ans </h5>
                   <LinkScroll to='mazars-toss' smooth={true}  offset={0} duration={1000}> <BsFileArrowDown className='fleche-mazars'/></LinkScroll>
                </div>
                <div className='mazars-toss' id='mazars-toss'>
                    <h4>Mazars, acteur de premier plan dans les domaines de l’audit et du conseil, nous accompagne depuis plus de quinze ans dans l’organisation du TOSS. Ce partenaire historique affirme son soutien en devenant, pour cette 32ème édition, partenaire officiel du TOSS. Vous aurez la chance de rencontrer les sportifs du cabinet au stand Mazars du village TOSS ou en participant aux 10 Km Mazars du TOSS ! </h4>
                </div>
                <div className='mazars-presentation' id='mazars-presentation'>
                {/* <ScrollT onEnter={() => setCounterOn(true)} > */}
                    <h3> Présentation de la société</h3>
                    <div className='mazars-numbers' >
                        <div id='mazars-numbers1'>
                            <h6> présente dans</h6>
                            <h4> {counterOn && <CountUp start ={0} end={91} duration={3} delay={0}></CountUp>}</h4>
                            <p> pays</p>
                        </div>
                        <div id='mazars-numbers2'>
                        <h6> fédère</h6>
                            <h4> {counterOn && <CountUp start ={0} end={40400} duration={3} delay={0.5}></CountUp>}</h4>
                            <p> professionnels</p>
                        </div>
                        <div id='mazars-numbers3'>
                        <h6> dont</h6>
                            <h4> {counterOn && <CountUp start ={0} end={24400} duration={3} delay={1}></CountUp>}</h4>
                            <p> collaborateurs</p>
                        </div>
                        <div id='mazars-numbers4'>
                        <h6> chaque année</h6>
                            <h4> {counterOn && <CountUp start ={0} end={700} duration={3} delay={1.5}></CountUp>}</h4>
                            <p> jeunes recrutés</p>
                        </div>
                    </div> 
                    {/* </ScrollT> */}
                    <h5> Mazars est une organisation internationale, intégrée et indépendante spécialisée dans <span>l'audit, le conseil</span>, ainsi que <span>les services comptables, fiscaux et juridiques.</span></h5>
                        <h2>Pour poursuivre sa croissance en France, Mazars recrute sur ses différentes lignes de métiers : </h2>
                        <div className='mazars-numbers field'>
                            <div>
                                <h4> Audit Financer</h4>
                            </div>
                            <div>
                            <h4> Conseil</h4>
                            </div>
                            <div>
                            <h4> Digital et Systèmes d'Informations</h4>
                            </div>
                            <div>
                            <h4> Transaction Service / Corporate Finance</h4>
                            </div>
                            <div>
                            <h4> Actuariat</h4>
                            </div>
                            <div>
                            <h4> Expertise comptable</h4>
                            </div>
                        
                        </div>
                        <div className='mazars-numbers center'>
<div>
                        <h4> Fiscalité</h4>
                        </div>
                        </div>
                     
                </div>
                <div className='mazars-recrutement'>
<h2> Intégrer l'équipe</h2>
<div>
    <p>Halte à la monoculture ! Mazars recrute des profils très diversifiés et chaque année, <span> 30% des juniors débutants</span> sont issus d’écoles d’ingénieurs. Pour voir toutes les opportunités de stage, cliquez ci-dessous.</p>
<div>
    <a href='https://www.mazarsrecrute.fr/'>Mazars recrute <BsArrowRight className='fleche'/></a>
    </div>
</div>


                </div>
            </div>
            <Footer color='#09208f' color2='#0f1c5b'/>
        </div>
    )
}

export default Mazars