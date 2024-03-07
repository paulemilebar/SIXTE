
import React, { useEffect } from 'react'
import Navbar from '../../components/modules/Navbar'
import './DevenirPartStyles.css'
import {BsFileArrowDown} from 'react-icons/bs'
import { Link as LinkScroll} from 'react-scroll';
import {ImQuotesLeft} from 'react-icons/im'
import {ImQuotesRight} from 'react-icons/im'
import Footer from '../../components/modules/Footer';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPluging from 'gsap/ScrollToPlugin'
import gsap from 'gsap';



gsap.registerPlugin(ScrollTrigger,ScrollToPluging);


const DevenirPart = () => {
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
           <div className='devenir-part'>
                <h1 id='on'> Devenir partenaire</h1>
                <LinkScroll to='devenir-part-content' smooth={true}  offset={-10} duration={1000}> <BsFileArrowDown style={{color:'black'}} className='fleche-mazars'/></LinkScroll>
           </div>
           <div className='devenir-part-content' id='devenir-part-content'>
<h2> Comment devenir partenaire?</h2>
<div className='devenir-part-inner'>
   <div className='semi-circle-part'> </div>
   <div className='devenir-part-inner-content'>
    <div className='devenir-part-quote'>
        <p> <ImQuotesLeft/> Né il y a 32 ans, le TOSS est un des tournois omnisports étudiants les plus importants et les plus reconnus au niveau national. Cet événement, devenu une institution dans le paysage sportif étudiant, permet de conclure l’année sportive universitaire. <ImQuotesRight/></p>
    </div>
    <div>
        <h4>Si vous êtes interessé pour devenir partenaire du TOSS, prenez connaissance du document ci-dessous présentant brièvement l'événement.</h4>
        <div className='part-btn-content'>
            <a className='part-btn' href=''> Dossier partenariat</a>
        <a className='part-btn' href=''> Devenir partenaire</a>
            </div>
    </div>

   
</div>

            </div> 
           </div>
            
            <Footer/>
        </div>
    )
}

export default DevenirPart