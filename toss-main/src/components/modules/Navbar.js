import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import { AiFillCaretDown } from "react-icons/ai";
import './NavbarStyles.css'
import { useEffect } from 'react';

import logoToss from '../../assets/logo_toss_blanc.png' 
import { flushSync } from 'react-dom';

import reglementInt from '../../assets/pdf/Reglement_Interieur.pdf'
import cgiIndiv from '../../assets/pdf/CGI_deleg_2022.pdf'
import cgiDeleg from '../../assets/pdf/CGI_indiv_2022.pdf'
import Confidialité from '../../assets/pdf/confidentialite.pdf'
import {useTranslation} from "react-i18next";




const Navbar = (props) => {

  //Lang
  const [t, i18n] = useTranslation('common');

  // Scroll
    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    if (props.color === null){
        props.color = 'black'
    }
  
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if ((window.scrollY > lastScrollY) && (window.scrollY > '500')){ // if scroll down hide the navbar
          setShow(true); 
        } else { // if scroll up show the navbar
          setShow(false);  
        }
  
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
      }
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
  
        // cleanup function
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }
    }, [lastScrollY]);


    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [clickToss, setClickToss] = useState(true)
    const handleClickToss = () => (setClickToss(!clickToss),setClickPart(true),setClickInfo(true),setClickEsp(true), setClickLan(true))
    
    const [clickPart, setClickPart] = useState(true)
    const handleClickPart = () => (setClickPart(!clickPart),setClickToss(true),setClickInfo(true),setClickEsp(true), setClickLan(true))  
    
    const [clickInfo, setClickInfo] = useState(true)
    const handleClickInfo = () => (setClickInfo(!clickInfo),setClickToss(true),setClickPart(true),setClickEsp(true), setClickLan(true))   
    
    const [clickEsp, setClickEsp] = useState(true)
    const handleClickEsp = () => (setClickEsp(!clickEsp),setClickToss(true),setClickPart(true),setClickInfo(true), setClickLan(true))

        
    const [clickLan, setClickLan] = useState(true)
    const handleClickLan = () => (setClickLan(!clickLan),setClickToss(true),setClickPart(true),setClickInfo(true),setClickEsp(true))

    const lang = localStorage.getItem('lang')

    const [color, setColor] = useState(false)
        const changeColor =() => {
            if(window.scrollY >= '500') {
                setColor(true)
            } else {
                setColor(false)
            }
        }

      const changeLang = (lang) =>{
        if (lang == 'fr'){
          i18n.changeLanguage('fr')
          localStorage.setItem('lang','FR')
          window.location.reload(false);
        }
        if (lang == 'en'){
          
          i18n.changeLanguage('en')
          localStorage.setItem('lang','EN')

          window.location.reload(false);

        }

      }

        window.addEventListener('scroll', changeColor)
       
    return (
        <nav className={`active ${show && 'hidden'}`}>
        <div className={props.scroll ==='true' ? `header` :(color? 'header header-bg' : 'header')} style={{background: color && props.scroll === false ?  'transparent' : props.color }}>
           <Link to='/'><img src={logoToss}></img></Link> 
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li>
                   <a onClick={handleClickToss} className={clickToss?'' : 'background-navbar'}>TOSS 2023 <AiFillCaretDown/> </a>
                   <div className={clickToss ?  'dropdown' : 'dropdown on'}>
                    <ul>
                        <li> <Link to='/editorial'>Editorial</Link> </li>
                        <li> <Link to ='/presentation'>Présentation de l'édition</Link></li>
                        <li> <Link to='/sports'>Les sports</Link></li>
                    </ul>
                   </div>
               </li>
               <li>
                   <a onClick={handleClickPart} className={clickPart?'' : 'background-navbar'}>Partenaires <AiFillCaretDown/></a>
                   <div className={clickPart ?  'dropdown' : 'dropdown on'}>
                    <ul>
                        <li><Link to='/mazars'>Mazars, partenaire officiel du TOSS</Link></li>
                        <li> <Link to='/partenaireToss'>Partenaires du TOSS</Link></li>
                        <li> <Link to='/devenirPart'>Devenir partenaire</Link></li>
                        <li> <Link to='/assoPart'>Les associations partenires</Link></li>
                    </ul>
                   </div>
               </li>
               <li>
                   <a onClick={handleClickInfo} className={clickInfo?'' : 'background-navbar'}>Informations pratiques <AiFillCaretDown/></a>
                   <div className={clickInfo ?  'dropdown' : 'dropdown on'}>
                    <ul>
                    <li> <Link to='/tarif'>Tarifs de participation</Link></li>
                            <li> <Link to ='/faq'>F.A.Q</Link></li>
                            <li> <Link to ='/accesTournoi'>Accès au tournoi</Link></li>
                            <li>  <Link to ='/contacts'>Contacts et réclamations</Link></li>
                            <li> <Link to='/bracelets'>Les bracelets Cashless</Link></li>
                            <li>  <Link to ='/ambassadeur'>Devenir ambassadeur international</Link></li>
                    </ul>
                   </div>
               </li>
               <li>
                   <Link to='/engagements'>Engagements</Link>
               </li> <li>
                   <Link to='/galerie'>Galerie Photo</Link>
               </li>
               <li >
               <a onClick={handleClickEsp} className={clickEsp ?'' : 'background-navbar'}> Espace participant <AiFillCaretDown/></a>
               <div className={clickEsp ?  'dropdown' : 'dropdown on'}>
                    <ul>
                          <li>  <a href={reglementInt} target='_blank'>Règlement intérieur</a> </li>
                            <li>  <a href={cgiDeleg} target='_blank'>CGI - Délégation</a></li>
                            <li>  <a href={cgiIndiv} target='_blank'>CGI - Non-Délégation</a></li>
                            <li>  <a href={Confidialité} target='_blank'>Politique de confidentialité</a></li>
                            <li> <a href='https://www.cs-sports.fr/toss-register/index.php' target='_blank'>Connexion / Inscription</a> </li>
                    </ul>
                   </div>
               </li>
               <li >
               <a onClick={handleClickLan} className={clickLan ?'' : 'background-navbar'}>{lang} <AiFillCaretDown/></a>
               <div className={clickLan ?  'dropdown' : 'dropdown on'}>
                    <ul>
                          <li>      <a onClick={() =>changeLang('fr')}>FR</a></li>
                          <li>      <a onClick={() => changeLang('en')}>EN</a></li>
         
                         
                            
                    </ul>
                   </div>
               </li>
           </ul>

           <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
               
           </div>
        </div>
        </nav>
    )
}

Navbar.defaultProps = {
    scroll: 'true',
    color:'black'
  };
export default Navbar