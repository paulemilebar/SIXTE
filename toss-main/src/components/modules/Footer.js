import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaMailBulk, FaYoutube, FaSearchLocation, FaInstagram } from 'react-icons/fa'
import logoBDS from '../../assets/Logo_BDS_Blanc.png'
import Mazars from '../../assets/Mazars.png'
import logo from '../../assets/logo_toss_blanc.png'
import { Link } from 'react-router-dom'

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

const Footer = (props) => {
    return (
        <div className='footer'>
     <div className='footer-round' style={{background:props.color}}></div>
                      <div className="footer-animation">        
                <div className="footer-animation-2">
                    <a href=''>
                        <img src={mazarsLogo} className='logo1'/>
                    </a>
                    <a>
                        <img src={withings} className='logo2'/>
                    </a>
                    <a>
                    <img src={avencore} className='logo3'/>
                    </a>
                    <a>
                    <img src={lydia} className='logo4'/>
                    </a>
                    <a>
                    <img src={bnp} className='logo5'/>
                    </a>
                    <a>
                    <img src={al} className='logo6'/>
                    </a>
                    <a>
                    <img src={ffsu} className='logo7'/>
                    </a>
                    <a>
                    <img src={saclay} className='logo8'/>
                    </a>
                    <a>
                    <img src={polytechnique} className='logo9'/>
 
                    </a>
                    <a>
                    <img src={idf} className='logo10'/>
                        
                    </a>
                    <a>
                    <img src={cs} className='logo11'/>

                    </a>
                    <a>
                    <img src={devoteam} className='logo12'/>

                    </a>
                    <a href=''>
                        <img src={mazarsLogo} className='logo1'/>
                    </a>
                    <a>
                        <img src={withings} className='logo2'/>
                    </a>
                    <a>
                    <img src={avencore} className='logo3'/>
                    </a>
                    <a>
                    <img src={lydia} className='logo4'/>
                    </a>
                    <a>
                    <img src={bnp} className='logo5'/>
                    </a>
                    <a>
                    <img src={al} className='logo6'/>
                    </a>
                    <a>
                    <img src={ffsu} className='logo7'/>
                    </a>
                    <a>
                    <img src={saclay} className='logo8'/>
                    </a>
                    <a>
                    <img src={polytechnique} className='logo9'/>
 
                    </a>
                    <a>
                    <img src={idf} className='logo10'/>
                        
                    </a>
                    <a>
                    <img src={cs} className='logo11'/>

                    </a>
                    <a>
                    <img src={devoteam} className='logo12'/>

                    </a>


                    
                   
                   
                   
                   
                  
                   
                 
                  
                 </div>
            </div>
            
            
            <div className='footer-container' style={{background:props.color}}>
     
                <div className='first-row'>
                    <div className='footer-navbar'>
                        <h4> TOSS 2023</h4>
                        <ul>
                            <li> Editorial</li>
                            <li> Présentation de l'édition</li>
                            <li> Les sports</li>
                            <li> Galerie Photo</li>
                            <li> Application mobile</li>
                        </ul>
                    </div>  
                    <div className='footer-navbar'>
                        <h4> Partenaires </h4>
                        <ul>
                            <li> Mazars,partenaire officiel du TOSS</li>
                            <li> Partenaires du TOSS</li>
                            <li> Devenir partenaire</li>
                         
                        </ul>
                    </div> 
                     <div className='footer-navbar'>
                        <h4> Informations pratiques</h4>
                        <ul>
                            <li> Tarifs de participation</li>
                            <li> F.A.Q</li>
                            <li> Accès au tournoi</li>
                            <li> Contacts et réclamations</li>
                            <li> Les bracelets Cashless</li>
                            <li> Devenir ambassadeur international</li>
                            <li> Mentions légales</li>
                        </ul>
                    </div>
                    <div className='footer-navbar'>
                        <h4> Engagements </h4>
                        <ul>
                            <li> <a href=""><img src={logoBDS} width='100'></img></a></li>
                            <li> Engagements du BDS</li>
                           
                         
                        </ul>
                    </div>    
                    <div className='footer-navbar'>
                        <h4> Espace participants </h4>
                        <ul>
                            <li> Règlement intérieur </li>
                            <li> CGI - Délégation</li>
                            <li> CGI - Non-Délégation</li>
                            <li> Politique de confidentialité</li>
                            <li> Connexion / Inscription </li>
                           
                         
                        </ul>
                    </div> 
                </div>
                <div className='second-row'> <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />
                        <div>
                            <p>3 rue Joliot-Curie </p>
                            <h4>Gif-Sur-Yvette, France</h4>
                        </div>
                    </div>
                  
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> <a href='mailto:toss@cs-sports.fr'>toss@cs-sports.fr</a></h4>
                    </div>
                </div>
             
               

                <div className='footer-mazars'>
              
                
                    <img src={Mazars} width='300' />
                    <p> Un évènement organisé par le BDS de CentralSupélec Paris Saclay en collaboration avec Mazars</p>
               
                </div>
                 <div className='right'>
                    <Link to ='/'><img src={logo} width='80'/></Link>
                    
                                        <div className='social'>
                        <a href="https://m.facebook.com/toss.cs/posts/"> <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                        <a href="https://www.instagram.com/toss_cs/?hl=fr"> <FaInstagram size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                        <a href="https://www.youtube.com/channel/UCv7EuHKAclQQN8xyn2Qk0fw"> <FaYoutube size={30} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                    </div>
                </div>

            </div>
            </div>
               
            <div className='copyright' style={{background:props.color2}} >
                <p> Copyright 2022-2023 BDS CentralSupélec. Tous droits réservés.</p>
            </div>
        </div>
    )
}


Footer.defaultProps = {
    color:'black',
    color2:'rgba(20,20,20)'
  };

export default Footer